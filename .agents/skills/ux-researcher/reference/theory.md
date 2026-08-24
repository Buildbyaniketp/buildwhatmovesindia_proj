# Foundational theory

Used in Phase 1–2 to frame the problem and in Phase 4 to interpret findings. Sourced
from jnd.org, the Interaction Design Foundation, NN/g, and the Design Council. Text in
`"quotes"` is verbatim. **⚠** marks a claim that could not be verified on a primary page.

---

# 1. Affordance → perceived affordance → signifier

The most-mangled vocabulary in UX. Norman revised his own position three times; get the
history right or the rest collapses.

| Year | Position |
|---|---|
| 1977 | **Gibson coins "affordance"** — a relationship between environment and actor. It `"did not have to be perceivable or even knowable"` |
| 1988 | **Norman imports it into design** as `"the perceived or actual properties of the thing"` |
| 1999 | **First correction** — splits real from perceived: `"I should have used the term 'perceived affordance'."` |
| 2008 | **Second correction** — introduces the signifier: `"Forget affordances: what people need, and what design must provide, are signifiers."` |
| 2013 | **Codified** — `"Affordances define what actions are possible. Signifiers specify how people discover those possibilities."` And: `"Signifiers are of far more importance to designers than are affordances."` |

**The practical rule.** When a participant fails to act, the defect is almost never a
missing affordance — the action was usually possible. It is a missing or misread
**signifier**. Write findings in signifier language; it points at a fixable artifact.

## The vocabulary

**Affordance** — a relationship between actor and object describing what is possible.
Capability × property. A ladder affords climbing to an adult but not an infant. Change
the actor and the affordance changes without the object changing. *Use it to ask: could
this participant physically have done the thing?* If yes, the defect lives elsewhere.
Genuine missing affordances are the heart of accessibility work — a drag-and-drop UI
really does not afford reordering to a keyboard-only user.

**Perceived affordance** — what the user *believes* is possible. Four combinations:
possible-and-perceived, possible-but-unperceived (hidden feature), perceived-but-
impossible (the false affordance), neither. *In a session, log every element the
participant tried to touch and every one they ignored, independent of whether it was
interactive. The mismatch matrix is the finding.*

**Signifier** — `"any mark or sound, any perceivable indicator that communicates
appropriate behavior."` Deliberate (a label, a scrollbar) or accidental (a worn path, an
empty train platform). Things can also `"signify by their absence."` *Primary diagnostic
vocabulary for discoverability failures: when a participant says "I didn't know I could
do that," name the missing signifier.*

**Mapping** — the relationship between controls and effects; **natural mapping** is
`"a design in which the system's controls represent or correspond to the desired
outcome."` The stovetop is canonical. Three digital kinds: spatial (drag monitor icons
into their physical arrangement), conceptual (swipe up for more), behavioural
(raise-to-wake). *Mapping failures show up as **systematic, repeated, non-learning**
errors — the same wrong choice three times. That signature is a mapping defect, not
inattention.*

**Feedback** — communicating what happened. *Any finding of the form "the participant
repeated the action" or "did that work?" is a feedback defect. In unmoderated data,
double-submits and rage-clicks are feedback-latency signatures.*

**Feedforward** — information *before* acting about what the result will be. **Not
Norman's term** — Vermeulen et al., CHI 2013. `"In feedforward, the action is
hypothetical or is to be executed; in feedback, the action has already happened."` A
button label is the simplest instance. *A signifier says you can act here; feedforward
says here is what will happen. Both can be missing independently.*

**Constraints** — properties that limit possible actions. **Physical** (a USB-A plug
will not seat upside down), **cultural** (`"learned conventions — arbitrary but
powerful"`), **semantic** (a magnifying glass means search), **logical** (one screw left
over means a missed hole). *Constraints are the primary preventive fix for slips. When
you find a slip, recommend a constraint, not a warning. Diagnostic ladder: can you make
the error physically impossible? Logically obvious? Semantically clear? Cultural
convention is the weakest and least portable rung.* ⚠ The four-way taxonomy as a set is
standard DOET but was not confirmed verbatim on a primary page.

**Conceptual model** — an account of how something works, simple enough to predict with.
Usually *wrong but useful*: a thermostat is not a valve, but "set the target temperature"
predicts correctly. Three models are in play — the designer's, the user's, and the
**system image** connecting them. *Ask participants to explain what the system just did
and what it will do next. Their answer is their conceptual model, and where it diverges
from the design model is the source of every downstream mistake.*

**System image** — everything the system puts in front of the user: interface, labels,
docs, marketing, packaging. `"The designer can only talk to the user through the system
image."` *This is what makes "the designer understood it, so the design is fine"
indefensible. It also legitimises error copy, onboarding email, and store listings as
research scope.*

**Discoverability** vs. **findability** — discoverability is whether users ever learn a
feature exists; findability is whether they can locate it when looking. *Different tasks:
discoverability needs an open unprompted task and is measured by spontaneous encounter
rate; findability needs a directed task measured by time and success. Reporting one as
the other is a common error.*

**Understanding** — the ability to predict how the system will respond. *Measure by
prediction, not task success: ask what they expect before they click and what they think
happened after. A product can score 100% task success and near-zero understanding — and
it will fail on the first unscripted task.*

---

# 2. The two gulfs

**Gulf of Execution** — the gap between what the user intends and what the system lets
them do. Closed by signifiers, feedforward, natural mapping, constraints, and the user's
vocabulary. *Symptoms: long pre-action pauses, "I think it's this one," opening the wrong
menu repeatedly, abandoning before touching anything.*

**Gulf of Evaluation** — the gap between the system's state and the user's understanding
of it. Closed by feedback, visible state, and familiar representations. *Symptoms:
repeating a completed action, "did that save?", checking a second surface to confirm.*

**Check evaluation first.** `"Successful execution usually depends on correct
evaluation"` — a participant who cannot read the current state cannot plan the next
action, so an apparent execution failure is frequently an evaluation failure one step
upstream.

Provenance: the terms were `"invented in 1986 by Ed Hutchins, Jim Hollan, and Don
Norman"`, popularised in DOET (1988).

---

# 3. The Seven Stages of Action — the diagnostic

Two published formulations. **Use the 1986/1988 enumeration when you need a citation:**

1. Setting a goal · 2. Developing an intention to act · 3. Planning a sequence of actions
· 4. Executing the sequence · 5. Perceiving the resulting state · 6. Interpreting the
perception · 7. Evaluating the interpretation

**The Gulf of Execution covers stages 2–4; the Gulf of Evaluation covers 5–6.**

⚠ The compact 2013 labels (Goal → Plan → Specify → Perform → Perceive → Interpret →
Compare) are standard for the revised edition but not verbatim on a primary page.

**This is the model's real value: it turns "the user got confused" into a located
defect.** Walk a recorded failure backwards and stop at the first broken stage.

| Stage that failed | What you observe | Class of fix |
|---|---|---|
| 1 Goal | No goal forms; doesn't know the product helps | Positioning, onboarding, discoverability |
| 2 Plan | Knows the goal, can't think of a route | Conceptual model, IA, worked examples |
| 3 Specify | Has a route, can't pick the control | **Signifiers**, labelling, mapping |
| 4 Perform | Picks right, executes wrong | Target size, timing, **constraints**, gesture design |
| 5 Perceive | Misses the response entirely | **Feedback** placement, salience, timing |
| 6 Interpret | Sees it, misreads it | Wording, iconography, conceptual model |
| 7 Compare | Reads it right, can't tell if the goal is met | Goal-level confirmation, verification |

Real behaviour is opportunistic — it loops back and often starts mid-cycle from an
environmental cue rather than a formed goal.

*For physical products, stages 5–7 may be separated from 1–4 by hours (set a washing
machine now, evaluate tomorrow), so evaluation defects go unreported in short lab
sessions — use a diary study.*

---

# 4. Human-centered design

IxDF: designers `"focus on people and their context"` and `"seek to understand and solve
the right problems, the root problems."` The cycle is observation → ideation →
prototyping → testing.

## Humanity-centered design — Norman's later position

*Design for a Better World* (2023). His four HCD principles become five:

| Human-centered | Humanity-centered |
|---|---|
| `"Solve the core, root issues, not just the problem as presented"` | unchanged |
| `"Focus on the people."` | `"Focus on the entire ecosystem of people, all living things, and the physical environment."` |
| `"Take a systems point of view"` | `"Take a **long-term**, systems point of view… many of the most damaging implications only reveal themselves years or decades later"` |
| Continually test and refine | essentially unchanged |
| — | **New:** `"Design with the community… The professional designer community should serve as enablers, facilitators, and resources"` |

*Three concrete moves in a research plan: recruit **affected non-users** alongside users;
add a long-horizon synthesis question ("what does this look like at scale, in ten years,
for people who never chose it?"); shift participants from subjects to co-designers where
the project allows.* Apply proportionately — on a narrow internal tool this becomes
performative.

## Solve the right problem

The principle Norman keeps verbatim across both frameworks. What changed his mind about
design thinking was watching `"students and professionals who jump to solutions and who
fail to question assumptions."` The mechanism he credits is unglamorous — `"the ability
to ask stupid questions."` Ask *why* repeatedly until you reach the underlying issue.

**Practical test for every intake:** if you cannot state the problem in a form that
admits several fundamentally different solutions, you have been handed a solution, not a
problem.

## The WEIRD critique

**Western, Educated, Industrialized, Rich, Democratic.** Behavioural findings from WEIRD
samples are routinely generalised to humanity and should not be.

**Attribution — be precise.** Norman's page is a *review of Joseph Henrich's book*, not
original research. ⚠ The frequently cited "~96% of samples from ~12% of the population"
statistic belongs to **Henrich, Heine & Norenzayan (2010) — do not attribute it to
Norman.**

It contaminates exactly the concepts that depend on learned convention: cultural
constraints, natural mapping (NN/g's own caveat that mapping effectiveness `"is largely
dependent on cultural and social conventions"` — "green is go" is Western-specific),
imported mental models, and Jakob's Law, which really means "users prefer your site to
work like *the other sites they* know" — a different set in Lagos than in London.

*At recruitment and at the generalisation step: state the population your sample
supports, not the population your stakeholder wants. Treat convention-dependent findings
as lower-confidence outside the sampled culture. "Intuitive" is a claim about a
population, never about a design.* For AI products, the training data, the annotator
pool, and the eval set are additional WEIRD filters *upstream* of your study.

## Complexity vs. complication

⚠ The popular aphorism "simplicity is in the mind, complexity is in the world" is **not**
verifiable as a Norman quotation. Verified: "Simplicity Is in the Mind" is a chapter
title in *Living with Complexity*, and jnd.org says `"The world is complex; our tools
need to match that complexity."`

His actual position: `"It's not complexity that's the problem, it's bad design."` And
`"One person's simplicity is another person's complexity."`

*This reframes a very common and usually wrong recommendation. When a study surfaces
"users found it complicated," resist "simplify / remove features." Ask whether the task
is genuinely complex — if so the defect is comprehensibility, and the fixes are
conceptual models, progressive disclosure, and better defaults. Removing necessary
complexity just relocates it into the user's head. Always segment simplicity findings by
expertise.*

---

# 5. Process models

## Design thinking

Five stages (Stanford d.school): **Empathize · Define · Ideate · Prototype · Test.**
NN/g adds *Implement* and groups them as Understand / Explore / Materialize. IDEO's own
model is three phases: Inspire, Ideate, Implement.

**Non-linearity is definitional, not a footnote** — `"these stages are not always
sequential."` Organisations nonetheless run them as a linear gated pipeline, which is the
most common failure of adoption.

**Norman's critique and his reversal — present both or you misrepresent him.** In 2010 he
called it `"a useful myth"`, rejecting the idea that designers hold `"some mystical,
creative thought process."` He later reversed the conclusion, saying the essay should be
titled **"Design Thinking: An Essential Tool"** — while standing by the argument that it
`"is not an exclusive property of designers."`

**Empathize is contested by Norman himself** — he considers empathy in design
`"impossible, and even if possible, wrong."` Treat the stage as *observe and understand*,
not *feel what they feel*.

*Its real organisational value: it makes "we have not defined the problem yet" a
legitimate project state.* The failure mode is workshop theatre — if an engagement
produced no new evidence about users, it produced nothing.

## The Double Diamond

Design Council, created 2003; expanded 2019 as the Framework for Innovation.

1. **Discover** — `"helps people understand, rather than simply assume, what the problem
   is."` *Divergent.*
2. **Define** — `"define the challenge in a different way."` *Convergent.*
3. **Develop** — `"give different answers to the clearly defined problem."` *Divergent.*
4. **Deliver** — `"testing out different solutions at small-scale, rejecting those that
   will not work."` *Convergent.*

**The first diamond is the problem space; the second is the solution space.**

**Why Define is the hinge:** it is the only point where the *problem itself* is decided,
and everything downstream inherits it. A brilliant second diamond on a bad Define produces
an excellent solution to the wrong problem.

*Use it as a negotiating instrument. When a stakeholder wants to start at Develop, the
diamond shows what is being skipped. Make Define a **named deliverable with a date** — a
written problem statement everyone signs.* For AI work, technical capability spikes belong
*inside* diamond one, since capability constrains the problem space.

The 2021 **Systemic Design Framework** renames the stages Explore, Reframe, Create,
Catalyse — "Reframe" being the systemic version of Define.

## ISO 9241-210

*Ergonomics of human-system interaction — Part 210: Human-centred design for interactive
systems.* The formal, auditable statement of HCD — what you cite when a client asks
whether user research is a standard or an opinion.

**Six principles:** design based on explicit understanding of users, tasks and
environments · users involved throughout · driven and refined by user-centred evaluation ·
the process is iterative · addresses the whole user experience · multidisciplinary teams.

**Four activities:** understand and specify the context of use → specify user requirements
→ produce design solutions → evaluate against requirements. These iterate.

Principle 5 puts support, documentation, and offboarding formally in scope. Principles 2
and 3 together are why "we asked internal stakeholders" is not compliance.

⚠ ISO's full text is paywalled and returned 403 to automated access. The six principles
are verbatim from IxDF citing the standard. **Obtain the standard before quoting clause
numbers in a formal deliverable.** It predates generative AI and says nothing about
non-determinism or automation bias.

---

# 6. Cognitive foundations

**Mental vs. conceptual models** — `"Conceptual models are devised as tools for the
understanding or teaching of physical systems. Mental models are what people really have
in their heads."`

**Jakob's Law** — users spend most of their time on other sites, so they prefer yours to
work the same way. Culture-bound (see WEIRD).

**Cognitive load** — intrinsic (the task), extraneous (the interface), germane (learning).
Over-feedback becomes extraneous load.

**Recognition vs. recall** — Nielsen's Heuristic 6; recognition is far cheaper.

**Slips vs. mistakes — opposite remedies.** A **slip** is the right intention executed
wrongly; fix with **constraints**, better targets, and undo. A **mistake** is the wrong
intention formed from a faulty conceptual model; fix with **the model, labelling, and
feedforward.** Recommending a warning dialog for a slip, or a bigger button for a mistake,
is the classic misdiagnosis.

**Emotional design** — visceral, behavioural, reflective. Norman notes in the revised DOET
that `"different emotions arise at the different stages"` of action, joining the action
cycle to the three-level model.

---

# 7. Where this theory bites hardest: AI interfaces

Worth its own note, since it inverts several defaults.

- **The execution gulf nearly closes; the evaluation gulf opens wide.** Nielsen frames
  generative AI as *intent-based outcome specification* — `"the user tells the computer
  what outcome they want."` The cost: output is fluent regardless of correctness, so
  **fluency becomes a false signal of state.** Citations, diffs, and showing the work are
  evaluation-gulf instruments.
- **The empty prompt box is a signifier vacuum** — it signifies "type anything" and
  therefore signifies nothing specific. Suggested prompts, capability chips, and worked
  examples are the signifier layer.
- **Discoverability is the hardest documented case.** NN/g found users `"failed to expect
  or search for AI capabilities"` and `"overlooked AI features even when encountering them
  directly"` — yet `"often found these features helpful once researchers guided them."`
- **Users hold no correct conceptual model.** Anthropomorphic ("it understands me") and
  database ("it looks things up") are both wrong and produce distinct, predictable
  failures. *Eliciting which wrong model a participant holds is high-value AI research.*
- **Understanding is structurally hard** because behaviour is non-deterministic — users
  cannot build a predictive model by repetition. Expect understanding findings to dominate.
- **Seven-stage extension:** for agentic products, add a concern the classic model does not
  cover — **supervision of actions taken on the user's behalf**, between Perform and
  Perceive. Frame it as an extension, never as Norman's model.

---

# 8. Do not present these as verified

1. "Simplicity is in the mind, complexity is in the world" as a single Norman quotation.
2. "Affordances suggest the range of possibilities, constraints limit the number of
   alternatives" — widely attributed to DOET, unverified.
3. The compact seven-stage labels (Goal/Plan/Specify/Perform/Perceive/Interpret/Compare).
4. The four-way constraint taxonomy as a named set.
5. The "~96% of samples from ~12% of the population" statistic — **Henrich et al., not
   Norman.**
6. Norman's "seven fundamental design principles" as an ordered enumeration.
7. ISO 9241-210:2019 clause numbers and exact 2019 wording.
8. Norman's full empathy argument — jnd.org hosts only the opening paragraph.
9. **Feedforward is Vermeulen et al. (CHI 2013), not Norman's coinage.**
10. **The ten usability heuristics are Nielsen's, with Molich — not Norman's.**
