# Licence Path — Journey Passport usability-test guide

## 1. Study purpose and decision

Run 3–5 moderated mobile sessions to identify which comprehension, dependency-recovery,
resume, and mock/official-boundary defects must be fixed before the Journey Passport is
demo-ready. This is a formative test of an independent concept prototype, not a test of
the participant, government policy, eligibility, or a live service.

The study is qualitative, behavioural, and scripted. It can show where observed
participants succeed, hesitate, recover, or need help. It cannot establish prevalence,
population-level usability, legal correctness, or production readiness.

## 2. Research questions

1. Can participants explain the eight-stage Journey Passport and identify the current
   and next stage?
2. Can they prepare the supplied fictional General, adult, first-time, West Bengal,
   non-Aadhaar LMV route without relying on regulatory recall?
3. Can they find and correct the incompatible fictional vehicle class without rescue?
4. Can they understand why Documents needs attention and resolve the missing
   address-proof choice?
5. Can they distinguish preparation in Licence Path from authentication, upload,
   verification, payment, receipt, RTO verification, and booking actions that still
   require the official service?
6. From a standard prepared state, can they interpret the browser-only save status,
   intentionally save and exit, close and reopen the prototype, find the saved
   fictional profile, continue, and confirm an illustrative future slot?
7. What language, literacy, mobile-interaction, or accessibility signals appear in
   this deliberately narrow sample?

## 3. Recruitment, screening, and exclusions

Recruit 3–5 adult smartphone self-applicants and keep two screened backups. Qualify a
participant only when all of the following are true:

- they are 18 or older and live in West Bengal;
- they applied for a learner's licence in the previous 12 months or expect to apply in
  the next 12 months;
- they have not held a driving licence and would normally try to apply without a
  professional agent;
- they normally use a smartphone and can complete the session in English or Hindi;
- they are willing to follow the supplied fictional General, non-Aadhaar scenario and
  not enter or show any real information.

Aim for at least two Hindi-first participants and at least one participant who often
needs help with mobile-service tasks. Report the actual mix. Screen with category
questions rather than collecting names, dates of birth, licence numbers, addresses,
phone numbers, account details, documents, or other personal data.

Exclude minors; existing-licence holders; people testing an Aadhaar route or any of the
seven non-General categories; assisted, offline, or low-connectivity applicants;
professional agents; transport staff; UX professionals; project contributors and,
where possible, their close collaborators; people who can participate only in Bangla;
and access needs that the test setup cannot support. These exclusions limit what the
study can say; they do not imply that the excluded groups are unimportant.

Keep recruitment contacts, if any, outside the study notes and delete them when
recruitment is complete. Notes use participant IDs only: `P01`–`P05`.

## 4. Materials and setup

- Use the mobile prototype at a 390 px viewport in the participant's chosen test
  language. Do not switch languages unless the participant chooses to.
- Use only the visibly fictional demo applicant and built-in example choices. Never ask
  for, enter, photograph, upload, record, or display real personal information,
  documents, OTPs, signatures, payment data, or government identifiers.
- Prepare two independent starting states before the session:
  - **Task 1:** clean demo state at the prototype entry screen;
  - **Task 2:** the documented, standardized prepared-state fixture, with the fictional
    route, application details, and Documents stage already prepared and saved on the
    device. It must not inherit Task 1 performance.
- Confirm the Task 2 state using the fixture or documented seed sequence before the
  participant arrives. Resetting/seeding is moderator setup and is not scored.
- Have a neutral way to reopen the prototype, such as a home-screen shortcut or supplied
  browser bookmark. Do not leave the target screen open in another tab.
- Pilot once with a matching participant. If the full session exceeds 12 minutes, cut
  reflection probes; do not shorten the tasks, rush the participant, or extend the
  session without renewed consent.

## 5. Consent script

> We are testing this website, not you. Licence Path is an independent concept
> prototype, not an official government service. Everything in the demo—including the
> profile, documents, dates, slots, transactions, references, and confirmations—is
> fictional. It cannot authenticate you, upload or verify documents, take payment,
> issue a receipt, submit an application, or book a real appointment. Please do not
> enter or show any personal information or documents. I will take notes using only a
> participant ID. You may skip a question, take a break, or stop at any time without a
> penalty. May we continue?

Record only `consent: yes/no` against the participant ID. If consent is not affirmative,
stop. Do not make audio, video, or screen recordings; this study collects de-identified
notes only.

## 6. Session plan — 10–12 minutes

| Time | Activity | Evidence |
|---:|---|---|
| 0:00–1:15 | Consent and think-aloud instruction | Consent status only |
| 1:15–6:15 | Task 1 — start and prepare; hard cap 5 minutes | Route, correction, document-block recovery |
| 6:15–6:35 | One-question Task 1 ease rating | Individual 1–7 rating |
| 6:35–6:55 | Moderator loads the standardized Task 2 state | Not scored |
| 6:55–9:55 | Task 2 — close/reopen, interpret checkpoints, book; hard cap 3 minutes | Resume, boundary comprehension, slot success |
| 9:55–10:15 | One-question Task 2 ease rating | Individual 1–7 rating |
| 10:15–11:15 | Teach-back and brief reflection | Overall model, boundary, language/access signals |
| 11:15–12:00 | Buffer and close | Participant questions; no new scored task |

Say before the tasks:

> Please work as you normally would and say what you are looking for or expecting. I
> may stay quiet while you work. Remember to use only the fictional information already
> provided in the prototype.

### Task 1 — independent clean state

Read exactly:

> Imagine you are helping Maya, a fictional adult in West Bengal. Maya has never held a
> driving licence, wants to apply for a learner's licence for an LMV, and will use the
> non-Aadhaar route. Starting here, prepare this fictional application until its
> documents are ready. Tell me when you think you have finished.

Do not mention the prefilled incompatibility, address-proof problem, applicant-category
control, stage number, or resolving control. At the end, ask:

> What did the prototype help you prepare, and what would Maya do next?

Task 1 is an **unaided success** only when, before the 5-minute cap and without rescue,
the participant:

1. selects West Bengal, General, first-time/no existing licence, adult, non-Aadhaar,
   and LMV choices for the fictional scenario;
2. notices the incompatible prefilled vehicle class and corrects it to LMV;
3. identifies that Documents needs attention, chooses a fictional address-proof type,
   and reaches the ready state; and
4. can identify the current or next stage without claiming that an official action has
   already occurred.

Record each component separately even when the overall task fails.

### Task 2 — independent standardized prepared state

Load the standard prepared-state fixture; do not copy Task 1 progress. Place the
participant at the agreed neutral reopen point, then read exactly:

> This fictional application has already been prepared to a standard checkpoint. Open
> it and complete the next illustrative checkpoint. Then imagine you need to stop for
> now: leave the journey without losing your place. Close and reopen the prototype as
> you normally would, find the saved demo application, work out what would still need to
> happen outside this concept, and continue until you have chosen and confirmed an
> illustrative future test slot. Tell me when you think you have finished.

When the participant stops, ask the neutral teach-back:

> Tell me which actions this prototype prepared or illustrated, and which actions would
> still need the official service.

Task 2 is an **unaided success** only when, before the 3-minute cap and without rescue,
the participant:

1. recognizes that progress is saved only in the current browser, uses **Save and
   exit** after the first illustrative checkpoint, closes and reopens the prototype,
   locates **My Licence Path**, recognizes the saved fictional stage, and continues
   without restarting;
2. understands that photo/signature upload, payment, payment-status verification, and
   receipt are official-action checkpoints; completes the four focused screens in
   sequence, with only the relevant illustrative action shown on each screen, while
   understanding that “completed” updates demo progress only and does not complete
   those actions on Sarathi;
3. retains the non-Aadhaar RTO document-verification visit as an official dependency;
4. selects an illustrative future date and time and reaches the mock slot confirmation;
   and
5. does not describe the slot or confirmation as real or official.

Record resume, boundary comprehension, RTO-dependency comprehension, and slot completion
separately even when the overall task fails. If an unavailable date or time occurs,
observe recovery and code it as `BLOCK_RECOVERY`; do not create this state for only some
participants.

### Ease rating after each task

Ask immediately after each task, regardless of outcome:

> Overall, how easy or difficult was that task? Use a scale from 1, very difficult, to
> 7, very easy.

Record the individual response. Do not calculate an average or treat it as CSAT.

## 7. Facilitation and rescue rules

Allow silence. These neutral probes do **not** count as rescue:

- “What are you looking for?”
- “What are you thinking?”
- “What do you expect will happen?”
- “What would you do next?”
- “What does that message mean to you?”
- “Please say more about that.”
- rereading the exact task prompt without emphasis, at the participant's request.

Do not name a route, stage, prerequisite, control, or expected answer; point at the
screen; confirm that a choice is correct; or explain the mock/official boundary while a
task is active.

A **rescue** is any task-specific moderator help that reveals where to act, what to
choose, what a status means, or how to proceed. Use rescue only after the participant
says they are stuck or after 30 seconds without a task action and one neutral probe has
not restarted progress. Record the first level used:

| Level | Help | Scoring consequence |
|---|---|---|
| R0 | Neutral probe or exact prompt reread | Not a rescue; unaided success remains possible |
| R1 | Direct attention to the relevant screen region or status | Rescue; unaided success = No |
| R2 | Name the unmet prerequisite or correct choice | Rescue; unaided success = No; `CRITICAL_ERROR` if required to proceed |
| R3 | Give step-by-step direction or complete/skip an action | Rescue; unaided success = No; `CRITICAL_ERROR` and assisted completion only |

Assistance needed to operate the test device or a participant's chosen accessibility
adaptation is not task rescue unless it reveals the product answer. Log it separately as
an `ACCESS_SIGNAL`.

## 8. Operational definitions and codebook

Use evidence IDs such as `[P01 · 03:42]` for every scored observation.

| Term/code | Exact rule |
|---|---|
| `OVERVIEW_MODEL` | Participant accurately identifies the current stage, completed work, and next stage/action. Record Pass/Partial/Fail with evidence. |
| `ROUTE_CHOICE` | Participant selects all supplied Task 1 route conditions. Pass requires General, first-time, West Bengal, adult, non-Aadhaar, and LMV before the cap. |
| `CORRECTION` | Participant changes the incompatible fictional vehicle class to LMV without being told that the prefilled value is wrong. |
| `BLOCK_RECOVERY` | After encountering a prerequisite or unavailable choice, participant explains the block, uses a resolving action, and returns to progression. Record Unaided/Rescued/Not recovered. |
| `MOCK_BOUNDARY` | Participant distinguishes preparation/illustration from official authentication, upload, verification, payment, receipt, RTO verification, submission, and real booking. Record Pass only when they understand that a “This step is completed” pill records demo progress—not completion on Sarathi—and no required official action is described as completed by the prototype. |
| `RESUME` | From the standard Task 2 state, participant interprets the browser-only save status, uses Save and exit after one checkpoint, closes/reopens, finds the saved fictional profile/stage, and continues without restarting. |
| `SLOT_SUCCESS` | Participant selects an illustrative future date and time and reaches mock confirmation without describing it as a real booking. |
| **Unaided task success** | Every numbered success condition for that task is completed before its cap, with no R1–R3 rescue. |
| **Assisted completion** | The participant reaches the task endpoint after any R1–R3 rescue. It is not an unaided success. |
| **Self-correction** | Participant reverses an incorrect selection or interpretation before the cap, after reading the interface or receiving only R0 probes, and before any task-specific hint. If rescue came first, it is not self-correction. |
| **Abandonment** | Participant says they would stop, leave, or seek someone else to complete the task; declines to continue; or remains unable to act for 30 seconds after one R0 probe until the hard cap. Record whether they later recovered unaided, recovered with rescue, or did not recover. |
| `CRITICAL_ERROR` | Wrong route not self-corrected by the cap; a required step that needs R2/R3 rescue; abandonment without recovery; or any critical boundary failure. Count events, not screens. |
| **Critical boundary failure** | Participant states or acts as though Licence Path authenticated them, uploaded or verified a document, took payment, verified payment, created an official receipt/reference, submitted an application, booked a real slot, or removed the non-Aadhaar RTO verification visit—and does not self-correct after rereading the visible disclosure or checkpoint copy. The moderator may ask “What tells you that?” but must not supply the correction before scoring. |
| `ACCESS_SIGNAL` | Observable language, literacy, target-size, keyboard, screen-reader, zoom, focus, or mobile-interaction friction. One event is a signal, not proof of an accessibility finding. |

Time on task starts after the moderator finishes reading the task prompt. It ends at
unaided success, assisted completion, abandonment, or the hard cap. Record individual
times only; think-aloud and moderation make them descriptive, not comparative.

## 9. Individual score sheet

Use `U` = unaided success, `R` = rescued/assisted completion, `F` = failed before cap,
and `A` = abandoned. Add evidence IDs in the notes rather than participant details.

| Participant | Language | T1 outcome | T1 time | Route | Correction | Doc recovery | T1 ease 1–7 | T2 outcome | T2 time | Resume | Boundary | RTO dependency | Slot | T2 ease 1–7 | Highest rescue | Critical errors | Self-corrections | Access/language signals | Evidence IDs |
|---|---|---|---:|---|---|---|---:|---|---:|---|---|---|---|---:|---|---:|---:|---:|---|
| P01 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| P02 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| P03 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| P04 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| P05 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

## 10. Raw-count summary

Report raw participant counts and individual values only. Do not report percentages,
averages, NPS, CSAT, population estimates, or claims that the design is “validated.”

| Measure | P01 | P02 | P03 | P04 | P05 | Raw count |
|---|---|---|---|---|---|---:|
| Task 1 unaided success |  |  |  |  |  |  |
| Correct route unaided |  |  |  |  |  |  |
| Incompatibility corrected unaided |  |  |  |  |  |  |
| Document block recovered unaided |  |  |  |  |  |  |
| Task 2 unaided success |  |  |  |  |  |  |
| Resume completed unaided |  |  |  |  |  |  |
| Mock/official boundary explained |  |  |  |  |  |  |
| Non-Aadhaar RTO dependency retained |  |  |  |  |  |  |
| Illustrative slot confirmed unaided |  |  |  |  |  |  |
| Any R1–R3 rescue |  |  |  |  |  |  |
| Any abandonment |  |  |  |  |  |  |
| Recovered after an error/block |  |  |  |  |  |  |
| Any critical boundary failure |  |  |  |  |  |  |
| Any access/language signal |  |  |  |  |  |  |

List Task 1 and Task 2 times and ease ratings by participant below the table; do not
aggregate them. Separate direct observation, a cross-participant pattern, an
interpretation, and a recommendation. A single-participant event is a signal. Before
calling anything a pattern, look for contradictory evidence and retain it.

## 11. Closing script

> Thank you. This was an independent fictional prototype, and nothing you did was sent
> to a government service or used to make a real application, payment, receipt, or
> booking. Is there one point where the next action or the official-service boundary was
> unclear?

Never put participant names, contact information, recordings, personal details, or
documents into research artifacts or send them to agents.

## 12. Limitations

- Three to five scripted sessions can reveal usability problems and recovery behaviour;
  they cannot estimate how common those problems are.
- The standardized Task 2 fixture tests recognition of saved fictional progress and the
  resume signifier. It does not test long-term persistence, authentication, secure
  accounts, cross-device continuity, or recovery of a real application.
- A fictional profile removes privacy risk but also removes real anxiety, document
  availability, upload rejection, payment failure, CAPTCHA, latency, and RTO
  coordination.
- The scenario covers only an adult, General, first-time, West Bengal, non-Aadhaar LMV
  path. It does not support claims about other states, categories, vehicle classes,
  Aadhaar routes, existing-licence services, minors, or assisted/offline applicants.
- The recruitment excludes Bangla-only, low-connectivity, professional, and
  unrepresented access-needs groups. English/Hindi observations and individual access
  signals do not establish language parity or accessibility coverage.
- Moderation, think-aloud, a supplied scenario, and hard caps affect behaviour and task
  time. Individual times are diagnostic only and must not be compared as benchmarks.
- This study does not verify policy accuracy, legal compliance, official-system
  integration, production security, or whether a government service would accept an
  application.
- Without primary participant data, this guide contains a protocol and hypotheses—not
  findings.
