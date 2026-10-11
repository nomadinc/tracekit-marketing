# Customer Journey Tracking — desktop and mobile design lock

**Status:** APPROVED / DESIGN LOCKED
**Approved by:** Product owner, 2026-10-11
**Repository:** `nomadinc/tracekit-marketing`
**Baseline branch:** `feature/hero-vector-rebuild`
**Approved implementation baseline:** `433ceec1562033f1c0fd5b26230c642599b28b24`

## Approved scope

- Desktop and mobile Customer Journey Tracking page design, including Click → Customer → Dollar hero, illustrative timeline with expandable evidence, financial summary, capability cards, financial-outcome section, and CTA.
- Mobile spacing and card-density refinements approved.
- Current example data is intentionally **fictional/illustrative**, not real customer records.
- The design is frozen; do not alter layout, typography, copy, spacing, or interactions without explicit product-owner approval.

## REQUIRED FOLLOW-UP — Replace illustrative journey with real data

**Status:** DEFERRED / OPEN — return after TraceKit production journey functionality is working and governed evidence can be retrieved.

- Select a suitable **Stem Labs production customer journey** through an authorized, read-only TraceKit workflow.
- Include genuine non-personal acquisition source, campaign, timestamps, source relationships, orders, upsells, rebills, refunds, disputes, and financial figures where supported by actual evidence.
- Exclude names, emails, phone numbers, addresses, private customer identifiers, live tracking tokens, credentials, and other identifying or sensitive fields; mask identifiers where needed.
- Validate each source relationship and calculate financial totals from actual events. Never fabricate missing links or call net collected “profit.”
- Label the public example accurately and obtain explicit approval before publishing production-derived data.
- Replace **only the example dataset and necessary accompanying labels**; preserve the approved desktop/mobile layout and interactions.
- If real journey retrieval remains blocked or incomplete, retain the clearly labeled illustrative data rather than inventing evidence.

## Release boundaries

- Do not merge into development or publish the Shopify theme solely because design is approved.
- Independently verify page/template sync, responsive QA, and CTA routing before release.
- Keep the Homepage, Intelligence, Integrations, and Pricing design locks intact.
- This approval file documents change control; it is not an enforced branch-protection rule.
