# TraceKit Intelligence page — desktop and mobile design lock

**Status:** APPROVED / DESIGN LOCKED
**Approved by:** Product owner, 2026-10-11
**Repository:** `nomadinc/tracekit-marketing`
**Baseline branch:** `feature/hero-vector-rebuild`
**Approved implementation commit:** `b03a9ce334a956f6edae3e6e2f958a2b727de433`

## Approved scope

The dedicated TraceKit Intelligence page is approved for desktop and mobile:

1. Two-column desktop / stacked mobile hero and illustrated chargeback investigation
2. Evidence-backed Ask → Connect → Verify walkthrough and example records
3. Four Intelligence capability cards with responsive icons and typography
4. Built-in Intelligence positioning with optional MCP client connectivity
5. Closing “Stop guessing. Start understanding.” CTA
6. Responsive spacing, colors, visual hierarchy, copy, and illustrative-data disclosures

## Implementation boundaries

- `sections/tk-intelligence-page.liquid`
- `templates/page.intelligence.json`
- Intelligence-specific `.tk-ip*` styles in `assets/tracekit.css`

## Change control

- No unsolicited redesign, copy changes, or responsive-layout modifications.
- Require explicit product-owner approval for future visual or copy changes.
- Functional defects may be investigated and corrected with minimal scope and desktop/mobile regression verification.
- Keep the previously approved homepage design lock intact.
- This is an approval record, not an enforced GitHub branch-protection rule.
- Do not merge into development or publish the Shopify theme solely on design approval.

## Release work remaining

Verify Shopify page record/template assignment, CTA routing, browser/mobile QA, and functional form-to-Calendly flow when the publishing/preview constraints are resolved. Final release requires separate approval.
