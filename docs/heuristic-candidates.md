# Parivahan pre-handoff — heuristic candidates

**Scope:** public Parivahan home and the first Sarathi state-selection hand-off, reviewed
read-only on mobile. These are expert hypotheses, not observed citizen behaviour.

| Priority | Candidate risk | Observable basis | POC response |
|---|---|---|---|
| P0 | Several distinct licence-service cards, including a clearly labelled Drivers/Learners License card, converge on Sarathi. | This creates a **potential** route-discoverability ambiguity; it does not show that applicants fail to find the learner route. | One explicit “Find my path” entry and a plain-language first-time question. |
| P0 | The hand-off reaches a generic state selector without visibly echoing the preceding portal choice. | This is a candidate context-continuity risk; the later flow may restore context. | Preserve context: first-time route → state → mock appointment, plus back/change-route controls. |
| P1 | On the mobile home page, licence cards appear after utility, branding, campaign, and navigation content. | The relevant journey is not prominent in the initial viewport. | Put the single primary CTA in the first mobile viewport. |
| P1 | Repeated visible “Read More” links may obscure link purpose. | This is a candidate link-clarity risk; accessible-name and programmatic-context inspection is still required. | Use outcome-specific actions and semantic labels. |
| P1 | Small, separate title and “Read More” links risk unclear tap targets. | The pattern separates the route label from the action. | Make the whole route option a large, clearly named control. |
| P1 | The observed state selector lacks an explicit accessible name. | A screen-reader user may need to infer its purpose from surrounding text. | Label it “State where you will apply” with helper text. |
| P2 | An unavailable state/service path lacks a clear recovery alternative. | The entry condition says service availability varies by state. | Add no-slots/unavailable recovery and a safe assistance suggestion. |

## What is retained

The portal already groups driving-licence services under a meaningful heading and exposes
accessibility controls, search, contrast, and language utilities. Licence Path keeps the
grouping principle while reducing the choice burden for this narrowly scoped task.

## Limits

The review does not establish prevalence, task abandonment, accessibility conformance,
or the quality of downstream Sarathi transactions. The test guide in
[`usability-test-guide.md`](./usability-test-guide.md) is the next evidence step.

## Independent review status

Three independent reviews assessed all four candidate claims; two split claims were
extended to five reviewers and then narrowed through evidence-only adjudication. The
panel supported the observed mobile prominence pattern, while the hand-off, route, and
link claims remain deliberately qualified as candidate risks. Model-panel agreement
measures stability under resampling, not truth or human validation; the participant study
is required before making behavioural claims.
