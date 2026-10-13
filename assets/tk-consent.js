/* Map only expressed iubenda choices to Shopify. Never infer consent from region. */
(function () {
  'use strict';
  if (window.tkConsentInstalled) return;
  window.tkConsentInstalled = true;
  var pending = null;
  var ready = false;
  var root = document.documentElement;
  function snapshot(state) {
    root.dataset.tkConsentStatus = state;
    var api = window.Shopify && window.Shopify.customerPrivacy;
    if (!api) return;
    root.dataset.tkShopifyConsent = JSON.stringify(api.currentVisitorConsent());
    root.dataset.tkShopifyAllowed = JSON.stringify({analytics:api.analyticsProcessingAllowed(),marketing:api.marketingAllowed(),preferences:api.preferencesProcessingAllowed(),sale_of_data:api.saleOfDataAllowed()});
  }
  function mapPreferences(prefs) {
    var groups = {analytics:[4,'s'],marketing:[5,'adv'],preferences:[2,3],sale_of_data:['s','sh']};
    var result = {};
    Object.keys(groups).forEach(function (key) {
      var choice;
      groups[key].forEach(function (id) {
        [prefs.purposes, prefs.uspr].forEach(function (source) {
          if (source && typeof source[id] === 'boolean' && choice !== false) choice = source[id];
        });
      });
      if (typeof choice === 'boolean') result[key] = choice;
    });
    return result;
  }
  function flush() {
    if (!ready || !pending) return;
    var choice = pending;
    pending = null;
    window.Shopify.customerPrivacy.setTrackingConsent(choice, function (response) {
      snapshot(response && response.error ? 'error' : 'synchronized');
    });
  }
  function expressed(prefs) {
    if (!prefs || !Object.keys(prefs).length) {
      var api = window._iub && window._iub.cs && window._iub.cs.api;
      prefs = api && api.getPreferences();
    }
    if (!prefs) return;
    var choices = mapPreferences(prefs);
    if (!Object.keys(choices).length) return;
    pending = choices;
    flush();
  }
  window._iub = window._iub || [];
  window._iub.csConfiguration = window._iub.csConfiguration || {};
  var callbacks = window._iub.csConfiguration.callback || {};
  var previous = callbacks.onPreferenceExpressed;
  callbacks.onPreferenceExpressed = function (prefs) {
    expressed(prefs);
    if (typeof previous === 'function') previous.apply(this, arguments);
  };
  window._iub.csConfiguration.callback = callbacks;
  if (!window.Shopify || !window.Shopify.loadFeatures) {
    snapshot('unavailable');
    return;
  }
  window.Shopify.loadFeatures([{name:'consent-tracking-api',version:'0.1'}], function (error) {
    if (error || !window.Shopify.customerPrivacy) {snapshot('unavailable');return;}
    ready = true;
    snapshot('ready');
    flush();
  });
})();
