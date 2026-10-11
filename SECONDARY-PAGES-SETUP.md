# TraceKit secondary pages — Shopify setup

These pages are implemented as Shopify OS 2.0 JSON templates, all using `sections/tk-content-page.liquid`. Their content and design are version-controlled on `feature/hero-vector-rebuild`.

## Important: page records are separate from templates

Shopify does not automatically create Online Store > Pages records when a JSON template is pushed from GitHub. Create the corresponding page record in Shopify and assign its matching theme template. Use the exact handle below. The page title may be adjusted for presentation. Preview the unpublished theme before publication.

| Shopify page handle | Theme template | Suggested title |
| --- | --- | --- |
| book-a-demo | page.book-a-demo | Book a Demo |
| contact | page.contact | Contact |
| pricing | page.pricing | Plans & Pricing |
| integrations | page.integrations | Integrations |
| intelligence | page.intelligence | TraceKit Intelligence |
| customer-journeys | page.customer-journeys | Customer Journey Tracking |
| solutions | page.solutions | Solutions |
| reconciliation | page.reconciliation | Reconciliation & Profit Visibility |
| security | page.security | Trust & Security |
| about | page.about | About TraceKit |
| resources | page.resources | Resources |
| documentation | page.documentation | Documentation |
| faq | page.faq | Frequently Asked Questions |
| privacy | page.privacy | Privacy (draft only) |
| terms | page.terms | Terms (draft only) |
| cookies | page.cookies | Cookies (draft only) |

## Review gates

- **Do not publish privacy, terms, or cookies templates as legal policies.** They intentionally contain review placeholders. Have counsel approve actual policy text, and confirm cookie inventory before publication.
- Confirm plans, rates, integration support, security assurances, and Intelligence/MCP features against production readiness before publishing claims.
- Contact and demo pages use Shopify's built-in `contact` form. Verify recipient routing, spam controls, success state, and email delivery using a test submission.
- Shopify's global demo URL setting, if configured, may override the fallback `/pages/book-a-demo`.
- Verify header/footer navigation and the Resources page link; the resources landing page is not yet a functioning article blog.
- Complete desktop/mobile QA for all pages and the homepage before merging into `development`.
- Keep the current Shopify preview branch unpublished until approved.

## Editorial / content management

Edit the JSON template's section settings and feature blocks in GitHub. The reusable Liquid section contains no private credentials or backend API calls.
