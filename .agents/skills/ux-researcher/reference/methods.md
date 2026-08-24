# Method selection and sampling

Phase 2 reference. Sourced from Nielsen Norman Group and the Interaction Design
Foundation. Text in `"quotes"` is verbatim. **[INFERENCE]** marks reasoning that
extends a source rather than a claim it makes.

---

# 1. The three dimensions

Plot the question on three independent axes, then pick the method whose position on
all three matches. **The framework disqualifies first and chooses second** — it tells
you which methods physically cannot answer your question.

**Attitudinal vs. behavioural** — what people *say* vs. what people *do*. `"There are
often major differences between what people say and what they do."` A usability or
performance question needs a behavioural method; an attitudinal one will systematically
mislead. Belief, preference, brand, and motivation are only reachable attitudinally.

**Qualitative vs. quantitative** — *not* words vs. numbers, but **directness of
observation**. Qualitative data comes from observing or hearing `"directly"`;
quantitative comes `"indirectly, through a measurement or an instrument such as a
survey."` Qualitative answers *why*, quantitative answers *how many*. Qualitative is
`"best for discovering problems"`; quantitative is `"best for collecting benchmarks."`

**Context of use** — four categories:

| Context | Definition | Buys you |
|---|---|---|
| **Natural** | `"minimize interference from the study"` | Ecological validity — real environment, interruptions, workarounds |
| **Scripted** | `"focus the insights on specific product areas"` | Comparability — everyone hits the same flow |
| **Limited** | a `"limited form of a product to study a specific or abstracted aspect"` | One layer (IA, visual tone) without a working product |
| **De-contextualized** | product not used; examines issues `"broader than usage and usability"` | Strategy, brand, unmet need, life context |

The more scripted the context, the more comparable and less realistic the data.

**Caveats.** Axes are independent — position on one does not constrain the others.
Several methods straddle boundaries. [INFERENCE] De-contextualized methods degrade
fastest in enterprise, where work is embedded in workflows and permissions participants
cannot describe from memory — push toward natural use. [INFERENCE] For hardware,
limited-use methods dominate early and natural-use methods matter disproportionately
late, when environment, lighting, and noise decide outcomes.

Source: https://www.nngroup.com/articles/which-ux-research-methods/

---

# 2. Product phase

**Model A — three phases.** *Strategize* (generative — find directions): field studies,
diary studies, interviews, surveys, participatory design, concept testing. *Design*
(formative — `"determining which aspects of the design work well or not, and why"`):
card sorting, tree testing, usability testing, remote testing. *Launch & Assess*
(summative — measure against baseline or competitor): benchmarking, unmoderated
testing, A/B testing, analytics, surveys.

**Model B — four phases.** *Discover* · *Explore* · *Test* · *Listen*. Use whichever
model the team already speaks.

**The single-activity fallback:** `"If you can do only one activity and aim to improve
an existing system, do qualitative (think-aloud) usability testing"` — NN/g calls it
`"the most effective method to improve usability."`

Not a waterfall: `"The important thing is not to execute a giant list of activities in
rigid order, but to start somewhere and learn more and more as you go along."`
Quantitative usability testing requires a working product. A/B testing `"only works for
fully implemented designs"` and cannot serve Strategize or Design at all.

---

# 3. The method landscape

| Method | Qual/Quant | Att/Beh | Context |
|---|---|---|---|
| Usability testing | Qual | Behavioural | Scripted |
| Field studies | Qual | Behavioural | Natural |
| Contextual inquiry | Qual | Behavioural | Natural |
| Participatory design | Qual | Attitudinal | Limited |
| Focus groups | Qual | Attitudinal | De-contextualized |
| Interviews | Qual | Attitudinal | De-contextualized |
| Eyetracking | Quant | Behavioural | Scripted / Natural |
| Usability benchmarking | Quant | Behavioural | Scripted |
| Moderated remote testing | Qual | Behavioural | Scripted |
| Unmoderated remote testing | Both | Behavioural | Scripted |
| Concept testing | Both | Attitudinal | Limited |
| Diary studies | Qual | Behavioural | Natural |
| Customer feedback | Both | Attitudinal | De-contextualized |
| Desirability studies | Both | Attitudinal | Limited |
| Card sorting | Both | Attitudinal | Limited |
| Tree testing | Quant | Behavioural | Limited |
| Analytics | Quant | Behavioural | Natural |
| Clickstream analytics | Quant | Behavioural | Natural |
| A/B testing | Quant | Behavioural | Natural |
| Surveys | Quant | Attitudinal | De-contextualized |

Also in NN/g's glossary: first-click test, five-second test, multivariate test, paper
prototyping, prototype testing, task analysis, Wizard of Oz (the standard way to test
AI/voice experiences before the system exists), ethnographic study, retrospective
think-aloud (use when concurrent think-aloud would corrupt timing data).

## What each method cannot tell you

The second half of the answer matters more than the first.

- **Usability testing** — how many users in the wild hit the problem, or how it compares
  to a competitor.
- **Field studies / contextual inquiry** — anything comparable across participants, or
  any statistic. Contextual inquiry is explicitly scoped *out* for `"straightforward"`
  interfaces that `"don't require in-depth thought processes."`
- **Focus groups** — anything about usability. `"Watching a demo is fundamentally
  different from actually using the product."` One participant dominates the group.
  NN/g's rule: `"Direct observation of one user at a time always needs to be done to
  supplement focus groups."` Never the sole method.
- **Interviews** — what people will do, or what they did in detail. Four failure modes:
  **memory bias** (`"People can't remember the details...they often tend to make up
  stories"`), **speculation** (`"Users are not designers"`), **query effect** (`"People
  can make up an opinion about anything"`), and **leading questions**. Ask about past
  critical incidents, not button colors or predictions about nonexistent features.
- **Participatory design** — what to build. Output is a statement of priorities, never a
  specification.
- **Concept testing** — usability, or whether people will actually adopt. Should gate
  further investigation, never a build decision.
- **Eyetracking** — *why*. Gaze is not comprehension and not intent.
- **Customer feedback** — prevalence, or anything about the silent majority. Self-selected
  by construction: treat volume as a pointer to investigate, never a measurement.
- **Diary studies** — what people actually did, only what they *reported*. Self-report by
  construction despite the behavioural/natural classification.
- **Card sorting** — whether a given hierarchy works. That is tree testing's job.
- **Tree testing** — whether labels work with real visual cues, search, or cross-links.
  Gives a **floor**, not a prediction of live findability. Cannot represent sites where
  intermediate categories have their own landing pages.
- **Analytics** — *why*. `"Analytics can very quickly become a distracting black hole of
  'interesting' data without any actionable insight."`
- **A/B testing** — *why* you got the result, and anything about the elements you did not
  test. Requires one dominant KPI and a fully implemented design.
- **Surveys** — anything behavioural. Quant/Attitudinal/De-contextualized is the least
  behaviourally grounded corner of the framework.

**The pairing pattern NN/g recommends:** a 5-user qualitative test rapidly pinpoints a
trouble spot, which is then `"instrumented for targeted collection of a few thousand
analytics data points that support much more accurate estimates."`

**Never call it validation.** `"Validate"` `"suggests that you know it works and are
simply looking for concrete proof,"` which biases team and participant alike. Use test,
research, examine, study, or *watch how people use*.

---

# 4. Sample sizes

| Study type | n | Note |
|---|---|---|
| Qualitative usability, one group | **5** | The ROI-optimal number |
| Qualitative, low-overhead / agile | **2** | `"For really low-overhead projects"` |
| Qualitative, NN/g's own practice | **~8** | When sessions are expensive to arrange |
| Qualitative, two groups | **3–4 per group** | Experience overlaps between groups |
| Qualitative, three or more groups | **3 per group** | |
| **Quantitative usability** | **40** | See the conflict note below |
| Card sorting | **15 per group** | 30 for a big, well-funded project |
| Eyetracking heatmaps | **39** | Gazeplots: 8–12 |
| Focus group | **6–9**, ~2 hrs | |
| Interviews | **start 5–6**, run to saturation | Often higher than for user tests |
| Diary study | **5–12** small · **12–30** discovery · **30–50** extensive | |
| Pilot sessions | **1–2** | Must match the target profile |

## Why 5 for qualitative — the actual math

Problems found = **N(1 − (1 − L)^n)**, where L is the share found by one user.
`"The typical value of L is 31%."` So: 1 user → ~31%, **5 users → ~85%**, 15 → ~100%.
`"After the fifth user, you are wasting your time by observing the same findings
repeatedly."`

**The corollary that matters more than the number:** spend the saved budget on *more
studies*, not more users. `"The ultimate user experience is improved much more by 3
studies with 5 users each than by a single monster study with 15 users"` — because you
redesign between rounds, so later rounds find problems that did not exist before.
`"Zero users give zero insights."`

## Why 5 fails for quantitative

Not a rigor preference — a difference in what is estimated. **Qualitative estimates a
set** (which problems exist); one participant hitting a problem *proves it exists*, so
discovery is a union operation with an exponential saturation curve. **Quantitative
estimates a number** (a population mean or proportion); one participant is one noisy
data point, and `"substantial individual differences in user performance"` must be
averaged out.

**Binary metrics** (success, conversion): 95% confidence ±15% → **39** · ±20% → 21.
90% confidence ±15% → 28 · ±20% → 15.
**Continuous metrics** (task time, satisfaction): 95% ±15% → **47** · ±20% → 26.
90% ±15% → 33 · ±20% → 19.

> **Source conflict — quantitative n.** NN/g states 20 (Nielsen 2006), 20–30 per group
> (planning checklist), "more than 30" (qual/quant comparison), and 40 (current
> guidance). These are the same math at different tolerances, not a real contradiction —
> but the number you quote depends on the tolerance you accept. **Use the 40 figure**
> (population >500, binary metric, 15% MoE, 95% confidence), and always state your
> margin of error and confidence level. Nielsen's older 20 is a cost-benefit argument
> that a wide interval is fine when the effects you chase are large.

## Why card sorting needs 15

Card sorting is generative, and generating a structure requires sampling the
`"great variability in different people's mental models."` Tullis and Wood (2004,
168 users) measured similarity-score correlations: 5 users → 0.75 (`"not good enough"`),
**15 → 0.90** (`"a more comfortable place to stop"`), 30 → 0.95 (`"usually not worth
twice the money"`), 60 → 0.98 (`"definitely wasteful"`).

> **Source conflict — card sort n.** IxDF says `"3 to 5 participants is ideal"`; NN/g
> says 15. **Genuinely incompatible.** NN/g's figure rests on published correlation
> data; IxDF's appears to describe a small moderated qualitative session. Prefer 15 for
> any sort you will analyze quantitatively (dendrograms, similarity matrices); 3–5 is
> defensible only for an exploratory moderated sort where you are listening to rationale.

## Saturation

`"A point where themes emerging from the research are fleshed out enough such that
conducting more interviews won't provide new insights."` No single number — start with
5–6 and analyze as you go. `"For many exploratory-research studies, 5 participants are
too few."` Set by scope and population diversity: a narrow homogeneous study may need 5;
broad healthcare research 20–30 or more.

The literature: **Guest et al. (2006)** found codes stable after 12 interviews (6 enough
for high-level themes). **Griffin & Hauser (1993)** — 20–30 interviews uncover 90–95% of
customer needs. **Mason (2010)** — 2,000+ PhD theses, median sample 31.

## The rule that governs all of this

You may collect numbers in a qualitative study `"as long as (1) you report those numbers
anecdotally, not statistically; and (2) you are careful to specify that those numbers
may not reflect the behavior of your entire user population."`

**Report:** an individual's value, or a raw count — "only 1 out of the 6 participants
completed this task."
**Never report:** averages or percentages from a qualitative study. "Only 16.7% of
participants succeeded" from a 6-person study is a fabrication of precision.

---

# 5. Protocol essentials

**Tasks** are `"realistic activities that the participant might perform in real life."`
Derive them from research goals, not from the interface.

**Think-aloud** is the default for qualitative testing and is *excluded* from
quantitative testing because it inflates task time.

**Three facilitation techniques:** *Echo* (repeat the participant's last word as a
question), *Boomerang* (return their question — "what would you expect?"), *Columbo*
(trail off, letting them fill the silence).

**Leading questions are the facilitator's main failure mode.** Ask "what are you
thinking?" not "was that confusing?"

**The Hawthorne effect** — people behave differently when observed — and observer bias
are worst in field studies.

**Pilot with 1–2 participants matching the target profile.** This matters most for
unmoderated studies, where task wording carries the whole session and no facilitator can
rescue a confusing prompt.

**Informed consent** before recording. NN/g's consent article makes no mention of NDAs —
handle those separately.

---

# 6. Benchmarking and metrics

**Process:** choose what to measure → decide how → collect baseline → redesign → measure
again → interpret → optionally calculate ROI. Later rounds restart at redesign, assuming
context holds. **Aim for 2–4 metrics.**

**HEART:** Happiness (satisfaction, ease-of-use, NPS) · Engagement (avg time on task,
feature usage, conversion) · Adoption (new accounts, sales) · Retention (returning users,
churn) · Task effectiveness (error count, success rate, time on task).

**Cadence:** for daily-use products, 2–3 weeks after launch; for weekly, 4–5 weeks.

| Metric | Note |
|---|---|
| **Success rate** | `"The percentage of users who were able to complete a task"` — binary. If grading partial success on levels, **do not average the level numbers**: `"they are simply labels and they form an ordinal scale."` Report the percentage at each level. Coarse — says nothing about why. |
| **Time on task** | Continuous, so the 47-participant table applies. Think-aloud inflates it. |
| **Error rate** | Named as a core metric, but NN/g gives **no canonical counting rule** — define your own error taxonomy in the test plan and freeze it across rounds. |

**Directionality trap:** time on task appears under Engagement *and* Task Effectiveness.
As an efficiency metric it should be low; as an engagement metric, high. Decide which
you mean before collecting.

**Perceived-usability instruments:**

| | Items | Scale | When | Benchmarks |
|---|---|---|---|---|
| **SUS** | 10 | 5-point Likert | Post-test | 0–100. Average **68** across 500 studies; **80+** = top 10%; **73** = top 30% |
| **SEQ** | 1 | 7-point | After each task | No NN/g benchmark |
| **NASA-TLX** | 6 | 21-point | Post-task | Mental/physical demand, time pressure, perceived success, effort, frustration |
| **NPS** | 1 | — | — | `"How likely are you to recommend this website to a friend?"` |

SUS benchmarks the session and cannot localize a problem; SEQ localizes but cannot
summarize. NASA-TLX suits enterprise and safety-critical work where cognitive load is the
real cost. **[UNVERIFIED]** The SUS scoring arithmetic (odd/even subtraction, ×2.5) is not
published on the cited NN/g pages — verify before computing scores.

**Cost warning:** `"measuring usability can cost four times as much as conducting
qualitative studies,"` and metrics are `"a poor use of typically scarce usability
resources"` unless the project is very well funded.

---

# 7. Card sorting and tree testing

**Card sorting.** *Open* (`"users create their own groups"`), *closed* (`"all categories
are predefined"`), *hybrid* (some predefined). **30–50 cards** — users tire after ~50.
Analysis produces similarity matrices and dendrograms. Moderated yields rationale;
unmoderated yields quantitative data. Limits: `"lacking context"`, one categorization
level only, and hard to interpret when mental models genuinely differ.

**Tree testing.** Define the tree → pick a tool → input the hierarchy → define tasks →
run. Measures success rate, **directness** (`"whether users bounced around trying a few
categories before making a choice"`), time, and path. Run it *after* card sorting to
evaluate the candidate structure.

Card sorting discovers; tree testing evaluates. Card-sort results must be tree-tested
before you commit an IA.

---

# 8. Remote, moderated, and study design

**Moderated remote** buys real-time follow-up but loses body language and environment.
Mobile tooling `"can have stability issues."` Enterprise participants often cannot install
screen-sharing software or show real customer data — plan a sanitized environment.

**Unmoderated** scales to quantitative sample sizes cheaply and suits narrow scripted
paths, but task wording carries the entire session and you cannot follow up.

**Between- vs. within-subjects:** between-subjects avoids learning effects but needs more
participants; within-subjects is more sensitive but requires counterbalancing.

---

# 9. Known source gaps

Not verifiable from NN/g or IxDF during research — do not present as sourced: the SUS
scoring arithmetic; any SEQ benchmark; an average success rate across NN/g studies; a
canonical error-counting rule; a neutral-midpoint rule for rating scales; NN/g guidance
on NDAs. Dedicated NN/g articles for participatory design, concept testing, and customer
feedback did not resolve — those entries rest on the glossary and the methods chart only.
