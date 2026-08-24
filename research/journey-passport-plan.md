# Licence Path Journey Passport - build and research plan

**Status:** Draft for independent method review

**Date:** 24 August 2026

**Decision owner:** Project creator
**Delivery context:** Solo, five-day hackathon POC

## 1. Decision this work serves

Decide which comprehension, dependency-recovery, resume, and mock/official-boundary defects must be fixed before the Journey Passport is demo-ready.

This is a formative usability decision, not a comparative product decision. Without matched alternatives, the study will not claim that Journey Passport is stronger than a refreshed portal or appointment-only wizard.

The concept succeeds at the POC level if a first-time applicant can:

1. understand the complete learner's-licence application journey;
2. identify the route that applies to a fictional applicant;
3. correct fictional application details;
4. resolve a document-readiness problem;
5. understand what is simulated and what requires the official service; and
6. resume the prepared journey and reach an illustrative booked slot without facilitator rescue.

This study cannot establish legal correctness across India, production feasibility, population-level usability, or real integration with Sarathi, UIDAI, banks, RTOs, or testing systems.

## 2. Product boundary

Licence Path is a **guided application companion**, not a replacement transaction system. It represents the whole West Bengal learner's-licence journey while handing off authentication, personal-data submission, document verification, payments, official receipts, official slots/tests, authority decisions, and licence issuance.

All eight current West Bengal applicant categories are selectable:

- Diplomats (Foreigner)
- Foreigners (But not Diplomats)
- General
- OCI
- Divyang (Differently Abled)
- Repatriate
- Refugees
- Ex-Servicemen

The complete interactive demonstration uses **General**. Other categories provide plain-language consequences, conditional readiness guidance, and an official hand-off rather than invented specialist workflows. Aadhaar and non-Aadhaar routes are compared neutrally with no default; the primary test scenario chooses non-Aadhaar. No authentication or OTP interaction is simulated.

The interactive journey ends at an illustrative booked LL test slot. Tutorial, test, result, and official LL printing appear only in a clearly labelled “What happens next” preview.

## 3. Concept: the Journey Passport

The Journey Passport combines a stable overview with focused tasks. It remains visible throughout the application and answers four questions:

- Where am I?
- What have I completed?
- What needs attention?
- What is the next best action?

Each stage has one derived status: **Pending**, **Needs attention**, **This step is completed**, or **Official step — pending**. Users may preview any stage. A stage whose prerequisites are missing shows the specific reason and a link to the resolving stage; it never presents a dead disabled control without explanation. For stages 4–7, “completed” records only an illustrative prototype checkpoint and must continue to state that the real official action remains outstanding.

### Eight-stage application map

| Stage | Relation to official flow | POC interaction | Completion evidence |
|---|---|---|---|
| 1. Find my route | Companion preflight | State, applicant category, existing-licence status, Aadhaar choice, age band, vehicle class | Applicable fictional route explained |
| 2. Application details | Official “Fill application details LL” | Review and correct a fictional profile; choose RTO context and COV; preview Form 1 declaration | Required demo corrections complete |
| 3. Documents | Official “Upload documents” | Conditional readiness checklist; resolve one missing address-proof choice | Required mock evidence marked ready |
| 4. Photo and signature | Official upload stage | A focused upload-checkpoint screen explains non-Aadhaar photo + signature and Aadhaar signature-only conditions; its labelled demo button records mock completion, then advances | Illustrative checkpoint complete; official upload still required |
| 5. Fee payment | Official fee stage | A focused payment-checkpoint screen records a mock payment state; no fee, payment data or real transaction | Illustrative checkpoint complete; official payment still required |
| 6. Verify payment | Official verification stage | A focused status-check screen records only the mock verification checkpoint | Illustrative checkpoint complete; official verification still required |
| 7. Receipt | Official print-receipt stage | A focused receipt screen records only the dependency without generating an official-looking receipt/reference | Illustrative checkpoint complete; official receipt still required |
| 8. Test slot | Official LL slot stage | Unrestricted future-date picker, illustrative times, no-slots recovery, review | Mock slot selected and confirmed |

### After the application

Confirmation previews the official tutorial/test, pass/fail or absence, retest loop, authority decision, and state-dependent Form 3 printing. These are informational only.

## 4. Fictional scenario and privacy model

Use a visibly fictional **My Licence Path** profile such as **Maya Sen - demo applicant**. Entry is a one-click “Continue as Maya” demonstration, not a username/password form. The profile dashboard shows the current Journey Passport, last prepared stage, next action, and “Continue application.” Store only fictional demo choices in browser storage under a versioned key. Autosave every fictional choice, show a persistent “Fictional progress saved in this browser only” status with the last-saved time, and provide “Save and exit” on active journey tasks plus “Clear demo progress” on the profile. “Save and exit” gives users an intentional stopping point; it is not required for autosave.

The POC demonstrates the value of a coherent profile and resume experience; it does not implement identity, authentication, cloud sync, account recovery, cross-device access, or secure production storage. Those require an official security/privacy architecture outside this hackathon scope.

Do not request or persist real Aadhaar or licence numbers, date of birth, phone number, signature, files, OTP, payment details, or exact residential address. Use age bands, document-type choices, and abstract locality/RTO context. Never provide a real upload control in the POC; the upload checkpoint uses example document cards and explicit mock actions.

The deliberate corrections are task-relevant rather than arbitrary typing traps:

- the fictional profile starts with the wrong vehicle class for the scenario;
- the document checklist lacks an address-proof choice; and
- revising the Aadhaar route revalidates the photo requirement.

## 5. Interaction and accessibility requirements

- Mobile-first at 390 px, with a centred responsive Journey Passport and large targets.
- English and Hindi parity for every new label, explanation, error, and status.
- Semantic headings, fieldsets, legends, labels, status text, focus order, and live feedback.
- Status meaning is conveyed by text and icon as well as colour.
- Each blocked stage has a programmatic description and a resolving action.
- Upstream changes invalidate incompatible downstream mock completions and explain what changed.
- Back navigation preserves valid progress; reset is deliberate and clearly scoped to fictional local progress.
- Every active journey task shows browser-only autosave feedback and a “Save and exit” action; returning to the profile confirms the save and identifies the next incomplete stage.
- Persistent prototype disclosure remains visible. Mock stages say what did **not** happen.
- The official hand-off opens Sarathi in a new tab only when the user chooses it; it carries no personal data.
- For the non-Aadhaar scenario, an RTO document-verification visit is a prominent official dependency before the test journey; the smooth mock path must not conceal it.

## 6. Implementation architecture

Refactor the current single-screen state into a small configuration-driven journey rather than adding more independent booleans.

### Proposed seams

- `src/App.jsx` - application shell, language, top-level route and reset.
- `src/journey/config.js` - eight-stage labels, dependencies, and official/mock boundary.
- `src/journey/data.js` - bilingual categories, fictional profile, document types, slots, and stage copy.
- `src/journey/state.js` - versioned fictional state, derived stage statuses, invalidation rules, and local-storage adapter.
- `src/components/JourneyPassport.jsx` - overview, stage status, preview and next-best-action behaviour.
- `src/screens/` - focused route, application, documents, mock-checkpoint, slot and confirmation screens.
- `src/styles.css` - responsive and accessible local styling; keep UX4G lean CSS generated.

The derived status model is the source of truth. A stage is complete only when its completion predicate is satisfied; later statuses are recalculated when an upstream choice changes.

## 7. Five-day build sequence

| Day | Build outcome | Exit criterion |
|---|---|---|
| 1 | Journey configuration/state model, fictional profile/dashboard, responsive Passport overview, persistence/reset | Stages derive correct status and survive a close/reopen using fictional data only |
| 2 | Route/category/Aadhaar comparison and fictional application correction | General path completes; special categories explain conditions and hand off safely |
| 3 | Document readiness plus four focused, sequential official-checkpoint screens | Missing-proof recovery works; each screen contains only its own illustrative action, every official dependency remains visible, and no transaction is imitated |
| 4 | Future slot booking, confirmation/what-next, Hindi parity, mobile and keyboard pass | Primary path completes at 390 px in both languages without inaccessible blockers |
| 5 | Three moderated sessions, issue fixes, demo reset and production build | Critical test defects addressed; limitations and raw observations documented |

## 8. Research questions

1. Can participants explain the overall journey and identify the current/next stage?
2. Can they select the General, first-time, non-Aadhaar route for the fictional scenario and explain the consequences?
3. Can they identify and correct the incompatible vehicle class without rescue?
4. Can they explain why Documents needs attention and resolve the missing proof?
5. Can they distinguish preparation in the companion from actions that still require the official service?
6. Can they interpret the browser-only autosave status, intentionally save and exit, close/reopen the fictional profile, identify the resumed stage, and book an illustrative slot?
7. What language, literacy, mobile interaction, or accessibility **signals** appear in this deliberately narrow sample?

## 9. Recommended research method

### Scrappy option - recommended for the hackathon

Run 3-5 short moderated usability sessions using the working mobile POC. This is qualitative, behavioural, and scripted: it directly observes task comprehension and recovery in a controlled fictional scenario.

Recruit adult smartphone self-applicants who are West Bengal residents, applied for an LL within the previous 12 months or expect to apply within the next 12 months, and can use English or Hindi for the test. Screen out project contributors, close collaborators where possible, UX professionals, transport staff and agents. Aim for at least two Hindi-first participants and one participant who often needs help with mobile-service tasks. Keep two backups and report the actual participant mix.

The study excludes minors, Aadhaar-route users, seven non-General categories, existing-licence holders, assisted/offline and low-connectivity applicants, professional agents, Bangla-only applicants, and access needs not represented in the sessions. One participant using an adaptation can surface a signal; it cannot establish accessibility coverage.

Two connected tasks:

1. **Start and prepare (about 5 minutes):** understand the Passport, choose the applicable route, correct the fictional application, and resolve the missing proof. The scenario explicitly supplies the fictional adult age band, desired LMV class, state and non-Aadhaar constraint so success tests interface guidance rather than regulatory recall.
2. **Save, resume and book (about 3 minutes):** start from a standard prepared checkpoint, complete one focused checkpoint, intentionally leave with “Save and exit,” close/reopen the page, locate the saved fictional application, interpret the browser-only boundary and remaining official-action checkpoints, and book an illustrative future slot. This state is independent of Task 1 performance.

Reserve the remaining 2-4 minutes for consent, two ease ratings, open-ended teach-back (“Tell me what happened here and what would still need the official service”), and a brief debrief. If the pilot exceeds 12 minutes, cut reflection probes rather than rushing tasks or silently extending the session.

Use a one-question seven-point ease rating after each task. Record unaided completion, critical errors, abandonment/recovery, time on task, facilitator rescue, self-correction, mock/official-boundary comprehension, and accessibility/language signals. Report raw counts, individual ratings and individual times only; moderation and think-aloud make time descriptive rather than comparative.

Predefine a critical boundary failure: the participant states or acts as though the prototype has authenticated them, uploaded or verified a document, taken payment, created an official receipt, booked a real slot, or removed the non-Aadhaar RTO verification requirement—and does not self-correct after rereading visible information.

This method can reveal usability problems, participants' interpretations, and recovery behaviour in this fictional General/non-Aadhaar smartphone path. It cannot estimate prevalence, prove improvement or superiority, demonstrate sustained real-world resume, establish English/Hindi parity or accessibility coverage, prove nationwide applicability, measure NPS/CSAT, validate legal policy, or predict production performance.

### Rigorous option

Run two iterative rounds of five participants, fixing the prototype between rounds. Recruit across English/Hindi preference, lower/higher digital confidence, first-time/recent applicant status, and at least one relevant assistive-technology user per round. Add a structured keyboard/screen-reader expert review and follow-up interviews about a recent real application immediately after—not instead of—the behavioural task.

This improves coverage and provides evidence that fixes survive a second round, but it still does not support population-level metric claims. Quantitative success-rate estimation would require a substantially larger sample and a frozen prototype.

## 10. Analysis

Use the Seven Stages of Action to locate each failure, with a shared codebook:

| Code | Definition |
|---|---|
| OVERVIEW_MODEL | Participant can/cannot explain the stage map and current state |
| ROUTE_CHOICE | Selects and explains applicable category/status/Aadhaar path |
| CORRECTION | Finds and corrects the fictional incompatibility unaided |
| BLOCK_RECOVERY | Interprets a prerequisite, follows its resolving action, and returns |
| MOCK_BOUNDARY | Correctly explains what is illustrative and what requires Sarathi |
| RESUME | Understands browser-only autosave, uses the intentional exit path, and continues the saved fictional state without restarting |
| SLOT_SUCCESS | Selects date/time and reaches mock confirmation |
| CRITICAL_ERROR | Wrong route without self-correction, irreversible misunderstanding, or facilitator rescue required to proceed |
| ACCESS_SIGNAL | Observable mobile, language, literacy, keyboard, screen-reader or target-size friction |

Separate observation, finding, insight and recommendation. A single-participant event is a signal. Run a disconfirmation pass for each proposed theme and preserve contradictory evidence.

## 11. Fleet after plan approval

- Protocol designer: update the discussion guide, fictional scenario and score sheet.
- Heuristic/accessibility evaluator: inspect the implemented Journey Passport and dependency/error states.
- One independent challenge pass before sessions; participant evidence remains the priority.
- If session evidence is synthesized into findings, independent coders and the required claim panel use the same de-identified codebook; contested claims retain the minority report.

No participant names, contact information, recordings, personal details or documents are sent to agents or written into research artifacts.

## 12. Risks and blind spots

- **Scope compression:** Eight visible stages may still feel long; stage count alone is not the usability problem, but poor chunking could recreate it.
- **Scenario artificiality:** A fictional profile removes privacy risk but also removes real anxiety, document availability and authentication friction.
- **State specificity:** West Bengal evidence cannot support nationwide rules; state-dependent language must remain explicit.
- **Category shallowness:** Special-category guidance is useful navigation, not a complete workflow or legal determination.
- **Prototype optimism:** Fast mock checkpoints underrepresent latency, payment failure, upload rejection, CAPTCHA and RTO coordination.
- **Profile optimism:** Device-only fictional persistence tests the resume signifier and mental model, not secure accounts, cross-device continuity, identity recovery or production data retention.
- **Sample exclusion:** Smartphone self-applicants do not represent offline applicants, transport professionals, intermediated applicants, or all disability needs.
- **Measurement limits:** Three to five sessions can reveal problems, not population success rates or KPI movement.
- **Correlated model review:** Independent model validators measure stability under resampling, not truth; human participant evidence remains decisive.

## 13. Approval gate

Implementation begins only after the decision owner reviews this plan together with the three independent method critiques and explicitly approves the scope.
