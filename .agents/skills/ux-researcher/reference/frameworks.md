# Analysis and synthesis frameworks

Phase 4 reference. Sourced from Nielsen Norman Group, the Interaction Design
Foundation, and the originators of Jobs To Be Done.

**Verification convention — carry it into deliverables.** Text in `"quotes"` is
verbatim from the cited source. **[INFERENCE]** marks practitioner reasoning that
extends a source rather than a claim the source makes — never attribute it to NN/g,
IxDF, or a named author. **[UNVERIFIED]** marks what could not be traced to a
primary source; do not present it as established.

---

# 1. Nielsen's 10 usability heuristics

Developed by Nielsen with Rolf Molich in 1990, refined in 1994 via factor analysis
of 249 usability problems, and `"unchanged since 1994"`.
Source: https://www.nngroup.com/articles/ten-usability-heuristics/

Use these names exactly.

**1. Visibility of System Status** — `"The design should always keep users informed
about what is going on, through appropriate feedback within a reasonable amount of
time."`

**2. Match Between the System and the Real World** — `"The design should speak the
users' language. Use words, phrases, and concepts familiar to the user, rather than
internal jargon. Follow real-world conventions, making information appear in a
natural and logical order."`

**3. User Control and Freedom** — `"Users often perform actions by mistake. They need
a clearly marked 'emergency exit' to leave the unwanted action without having to go
through an extended process."` Support undo and redo.

**4. Consistency and Standards** — `"Users should not have to wonder whether different
words, situations, or actions mean the same thing. Follow platform and industry
conventions."` Both internal (within your product family) and external (industry).

**5. Error Prevention** — `"Good error messages are important, but the best designs
carefully prevent problems from occurring in the first place. Either eliminate
error-prone conditions, or check for them and present users with a confirmation
option before they commit to the action."`

**6. Recognition Rather than Recall** — `"Minimize the user's memory load by making
elements, actions, and options visible. The user should not have to remember
information from one part of the interface to another."`

**7. Flexibility and Efficiency of Use** — `"Shortcuts — hidden from novice users —
may speed up the interaction for the expert user so that the design can cater to both
inexperienced and experienced users. Allow users to tailor frequent actions."`

**8. Aesthetic and Minimalist Design** — `"Interfaces should not contain information
that is irrelevant or rarely needed. Every extra unit of information in an interface
competes with the relevant units of information and diminishes their relative
visibility."`

**9. Help Users Recognize, Diagnose, and Recover from Errors** — `"Error messages
should be expressed in plain language (no error codes), precisely indicate the
problem, and constructively suggest a solution."`

**10. Help and Documentation** — `"It's best if the system doesn't need any additional
explanation. However, it may be necessary to provide documentation to help users
understand how to complete their tasks."`

## Running the evaluation

`"Ideally, three to five people should independently evaluate the same interface."`
The reason is empirical: single evaluators find a given **major** problem only **42%**
of the time, and a given minor problem **32%** of the time.

1. **Prepare** — evaluators learn the heuristics; scope is fixed to a task, section,
   user group, or device. Enforce independence: evaluators `"should not see each
   other's evaluations until their own evaluation is complete."`
2. **Evaluate in two passes**, ~1–2 hours each. First pass `"just to learn the
   system, without attempting to evaluate anything."` Second pass hunts violations.
3. **Consolidate** — cluster issues via affinity diagramming, then discuss
   disagreements, severity, and business impact.

Reviewers should be people `"not involved in creating the design."` Heuristic
evaluation is not a substitute for user testing — `"combining these methods results
in the best overall design."`

## Severity ratings

Collected **after** evaluation, independently per evaluator, then averaged.
`"Severity ratings from a single evaluator are too unreliable to be trusted."`
The mean of three evaluators `"is satisfactory for many practical purposes."`

| | Definition (verbatim) |
|---|---|
| **0** | `"I don't agree that this is a usability problem at all"` |
| **1** | `"Cosmetic problem only: need not be fixed unless extra time is available"` |
| **2** | `"Minor usability problem: fixing this should be given low priority"` |
| **3** | `"Major usability problem: important to fix, so should be given high priority"` |
| **4** | `"Usability catastrophe: imperative to fix this before product can be released"` |

Four factors set severity: **frequency** (common or rare), **impact** (easy or hard
to overcome), **persistence** (one-time or repeated), and **market impact**. NN/g also
sanctions a simple High / Medium / Low scale.

Source: https://www.nngroup.com/articles/how-to-rate-the-severity-of-usability-problems/
· https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/

**Caveats.** [INFERENCE] Heuristic 4 is platform-relative — evaluate against iOS,
Android, or web conventions, not a generic ideal. [INFERENCE] Heuristic 7 maps
differently on touch; do not log "no keyboard shortcuts" against a phone UI.
[INFERENCE] The set is GUI-oriented; heuristics 1 and 6 need reinterpretation for
voice, conversational, and agentic interfaces with no persistent visual surface.
[INFERENCE] Expert-found issues are *hypotheses* about user difficulty, not observed
difficulty — label them so in a readout. [INFERENCE] Averaged severity hides
disagreement: 4/0/4 and 3/2/3 both average ~2.7, but the first is a live dispute.
Report the spread.

---

# 2. Thematic analysis

`"A systematic method of breaking down and organizing rich data from qualitative
research by tagging individual observations and quotations with appropriate codes, to
facilitate the discovery of significant themes."` Codes are the input; themes are the
output.

**NN/g's six steps:**

1. **Gather all data.** Transcripts preferred over memory-based notes.
2. **Read everything start to finish** before analyzing — even if you ran the sessions.
3. **Code by what the text is *about*.** Ask `"What is this about?"`
4. **Create codes encapsulating themes** — examine causal links, similarities,
   differences, and contradictions between codes.
5. **Take a break for a day.**
6. **Evaluate themes for fit** — well-supported? saturated? validated by an
   independent reviewer? If not, iterate 4–6.

**Time budget:** `"budget at least as much time as you had for the data collection to
complete the analysis."`

**The six obstacles NN/g names:** pattern blindness from data volume; superficial
fixation on memorable quotes; confusion about relevance; description without analysis;
unreconciled contradictions; losing the research goals in the detail. Countermeasures:
a fresh reviewer checking for bias, and keeping the research questions visible.

[INFERENCE] Thematic analysis does not quantify. "5 of 8 participants mentioned X"
describes a small non-random sample — never convert it to a percentage of users.

Source: https://www.nngroup.com/articles/thematic-analysis/

---

# 3. Coding and codebooks

A code is `"a word or phrase that acts as a label for a segment of text."` A codebook
holds each code's name, definition, and fit / non-fit examples.

**Code types:** *descriptive* (close to the participant's words, low interpretation)
and *interpretive* (applies an analytical lens).

**Directions:** *inductive* (codes emerge from data) and *deductive* (a pre-existing
frame is applied). Routinely hybridized. Note on sourcing: the inductive/deductive
distinction is standard qualitative methodology and appears in NN/g's course syllabus,
but NN/g publishes no free article defining the terms — attribute it to the field, not
to NN/g.

**Practical guidance:** `"create some starter codes"`, `"start broad"`, `"use short,
clear labels"`, and write definitions plus examples — which matter `"especially...if
more than one person is responsible for coding the data or if coding is done over a
longer period of time."` That is the argument for a codebook over coding from memory.

**A good code** is short-labelled, describes what a segment is *about* rather than
what you conclude, carries a written definition with fit and non-fit examples, recurs
across participants, and is applied consistently by every coder.

**Caveats.** [INFERENCE] Codebook drift is the main failure — coders quietly widen a
code's meaning over a long study; re-read definitions each session and date-stamp
changes. [INFERENCE] Check inter-coder consistency rather than assuming it: two people
code the same subset early, then reconcile the codebook before coding the rest.
[INFERENCE] Deductive-only coding can discover nothing new — always reserve capacity
for inductive codes. [INFERENCE] Keep behavioural observations and verbal statements
distinguishable; they are different evidence classes.

Source: https://www.nngroup.com/videos/coding-thematic-analysis/

---

# 4. Affinity diagramming

`"Organizing related observations, ideas, concepts, or findings into distinct
clusters."` Most useful for large volumes of unstructured qualitative data.

1. **Generate notes** — 5–10 minutes, **independently, to avoid bias**.
2. **Cluster and label** collaboratively. The label you write *is* the candidate theme.
3. **Prioritize clusters**, document actions, assign accountability. Dot voting breaks
   deadlocks.

IxDF adds a hierarchy discipline: repeat the grouping at two or more levels, with all
levels except the top maintaining `"the voice of the customer"` and the top tier using
an abstract category descriptor. IxDF's raw unit — an **affinity note** — is written in
first person.

Works best as a team activity. **Document the final diagram**; this is the step teams
skip, and it is why the wall gets torn down and the insight is lost.

**Caveats.** NN/g's own: do not dismiss small clusters, do not force unrelated ideas
together, and expect it to be `"less thorough with large or varied datasets."`
[INFERENCE] It skips familiarization — whoever wrote the notes already did the
interpreting, so pair it with transcript review on high-stakes work. [INFERENCE] Group
clustering is socially biased toward the loudest voice; cluster silently first.
[INFERENCE] Infinite digital canvas encourages over-splitting — cap top-level clusters
around 7–10 to force real synthesis.

Source: https://www.nngroup.com/articles/affinity-diagram/

---

# 5. The rainbow spreadsheet

Tomer Sharon's method: `"a spreadsheet with which all of the data collected during a
UX study is centrally and simultaneously documented by a team of people."` Named for
the colors representing each participant.

**Structure:** sheets for Participants, **Observations** (the centerpiece — rows are
behavioural observations, columns are participants, each a different color), Metrics,
Raw, and a Summary added after the study.

**The marking rule:** `"color a participant's cell when a certain behavior occurs. If
a particular behavior repeats in sessions with other participants, ask team members to
color the relevant participants' cells, rather than add one more line."` A row with
many colored cells *is* a recurring behaviour — the pattern becomes literally visible.

**Discipline:** `"everyone should be entering only things that participants do or
say."` Conclusions, inferences, and proposed solutions get stripped in debriefs.

**Best for** live moderated sessions with observers watching. Sharon's stated non-fits:
unmoderated research, automated online studies, fieldwork without live broadcast.

**Caveats.** [INFERENCE] Rows must stabilize early — participant 1 is scored against a
shorter list than participant 8, so re-check earlier participants against later rows.
[INFERENCE] It captures presence, not magnitude; pair with severity before
prioritizing. [INFERENCE] It is a capture tool, not an analysis method.

Source: https://www.smashingmagazine.com/2013/04/rainbow-spreadsheet-collaborative-ux-research-tool/

---

# 6. Jobs To Be Done

Not one framework. Four lineages with materially different mechanics — pick one
deliberately rather than blending them.

## Christensen — circumstance over customer

People "hire" products to make progress in a circumstance. Three dimensions:
**functional** (`"the tasks people seek to accomplish"`), **emotional/personal**
(`"the way people want to feel"`), **social** (`"how people want to be perceived by
others"`).

The central claim: `"The critical unit of analysis is the circumstance, and not the
customer."` Target the circumstance, not buyer characteristics.

**Use when** demographic segmentation has stopped predicting behaviour, or when
defining a competitive set that includes non-obvious substitutes.

Sourcing note: christenseninstitute.org returns 403 to automated fetch; quotes come
from HBR-side material. Verify before external publication.
Source: https://hbr.org/2016/09/know-your-customers-jobs-to-be-done

## Ulwick — job statements and Outcome-Driven Innovation

Three principles: `"Jobs are stable; products are not."` · `"Customer needs are
measurable."` · products getting the job done `"20% better or more"` tend to win.

**Job statement syntax:** `"verb + object of the verb (noun) + contextual clarifier"`
— e.g. "listen to music while on the go". Rules: solution-free and purely functional,
one-dimensional, excluding desired outcomes, defining the action rather than the
situation, written from the customer's perspective.

Good: "Prepare a hot beverage for consumption." Bad: "Boil water" (too narrow).

**Desired outcome syntax:** direction of improvement + metric + object of control +
optional clarifier. Ulwick reports 50–150 outcomes for a core job.

**The Opportunity Algorithm:** `"market opportunity = (importance + max,0 (importance –
satisfaction))"`.

**[UNVERIFIED]** The widely-repeated 0–20 scale with >15 underserved / <10 overserved
thresholds is *not* stated in Ulwick's own article. Treat as convention, not doctrine.
**[UNVERIFIED]** The eight-step Universal Job Map (define, locate, prepare, confirm,
execute, monitor, modify, conclude) appears in secondary summaries only.

Strategyn's claimed "86% success rate" is a vendor claim on a vendor site — cite as
such or not at all. [INFERENCE] ODI is heavy: 50–150 outcomes plus a survey is weeks
of work, usually disproportionate for a small team. The qualitative job statement
alone captures most of the value.

Source: https://strategyn.com/jobs-to-be-done/ ·
https://www.marketingjournal.org/the-path-to-growth-the-opportunity-algorithm-anthony-ulwick/

## Moesta — the Four Forces of Progress

A model of demand, not competitive position.

| Force | Definition | Direction |
|---|---|---|
| **Push** | `"the problem with the current situation"` — friction that starts the search | Drives change |
| **Pull** | `"the magnetism of the new way"` — imagined progress | Drives change |
| **Anxiety** | `"the fear of the unknown"` — what if it fails, what about my data | Blocks change |
| **Habit** | `"the comfortable inertia of what people already know and do"` | Blocks change |

`"Push + Pull > Anxiety + Habit → the switch happens."` When reversed, customers stay
`"regardless of product quality."`

**Use for** onboarding, activation, migration, and churn — the right lens when the
product is objectively better and people still won't move.

[INFERENCE] Teams over-invest in Pull and under-invest in Anxiety, though the equation
values them equally and anxiety reduction is usually cheaper (trials, import tooling,
reversibility). [INFERENCE] Requires retrospective interviews with people who actually
switched; speculation about future switching yields nothing. [INFERENCE] Inapplicable
to first-time-in-category adoption, where no incumbent generates push or habit.

Source: https://jobstobedone.org/the-four-forces/

## Klement — the job story

`"When ____, I want to ____, so I can ____."` Triggering situation, motivation,
expected outcome. Example: *"When an important new customer signs up, I want to be
notified, so I can start a conversation with them."*

His critique of user stories: they `"contain excessive assumptions while ignoring
causality."`

[INFERENCE] A job story with a weak "When" clause is just a user story with the
persona deleted — the triggering situation is the whole point. [INFERENCE] Dropping
the persona is a real tradeoff, not a free win, for products with sharply different
user types.

## NN/g's reconciliation

The two are complementary. JTBD captures problems, outcomes, and success criteria;
good personas add behavioural and attitudinal depth, mental models, and a narrative
that `"promotes empathy."` JTBD's limitation is that it tends to `"generalize
emotional and social context among the entire user base."` Combine by referencing
JTBD inside persona artifacts, or reformatting persona goals as jobs.

Source: https://www.nngroup.com/articles/personas-jobs-be-done/

---

# 7. Personas

`"A persona is a fictional, yet realistic, description of a typical or target user of
the product."` NN/g's non-negotiable: `"personas must be based on user research."`

**Contents:** name, age, gender, photo; a descriptive tagline; experience level; usage
context (voluntary vs. required, frequency, device); goals and concerns; representative
quotes. **The editing rule:** include only what affects design decisions or aids
memorability.

| | **Proto** | **Qualitative** | **Statistical** |
|---|---|---|---|
| Basis | No new research — team assumptions | 5–30 interviews, ~5 per segment until insights plateau | Qual themes → survey of 100+ (ideally 500+) → clustering |
| Effort | One 2–4 hour workshop → 3–6 personas | Small, parallelizable | Highest; needs a statistician |
| Strength | Makes implicit assumptions explicit | Accurate motivations and needs; cost-effective | Quantifies what % each persona represents |
| Weakness | `"Often inaccurate"`; risks `"an echo chamber for incorrect assumptions"` | Cannot size the population | Expensive; often duplicates the qualitative result |
| NN/g verdict | Gateway for low-maturity teams | **`"For most teams, the best approach"`** | Generally `"not recommended"` |

**Build sequence:** research → collaborate with stakeholders → identify characteristics
→ cluster attributes → refine and merge → add purposeful detail.

**The five failure modes:** created but never used (`"A failed persona effort is often
the largest barrier to future success"`); no leadership buy-in — counter by presenting
them as an `"alignment tool rather than a research deliverable"`; created in a silo and
imposed; nobody understands what they are for; or fundamentally flawed because they
served a different purpose. Reusing personas built for another goal is `"like trying to
put a square peg in a round hole."`

**Caveats.** [INFERENCE] Personas describe people; jobs describe circumstances. For
switching and competitive-set questions a persona will mislead — use JTBD. For empathy,
prioritization among user types, and recruiting criteria, the persona wins.
[INFERENCE] Demographics are usually decoration; if a design decision rests on a
persona's age, check the research actually supports an age effect. [INFERENCE]
Enterprise products usually need role-based personas, since permissions and workflow
position genuinely change what the interface must do.

Source: https://www.nngroup.com/articles/persona-types/ ·
https://www.nngroup.com/articles/why-personas-fail/

---

# 8. Journey maps and adjacent artifacts

`"A journey map is a visualization of the process that a person goes through in order
to accomplish a goal."`

**Zone A — the lens:** one **actor** (one per map, for narrative clarity), plus
scenario and expectations.
**Zone B — the experience:** journey phases · **actions** (`"actual behaviors and
steps"`, narrative-level, not clicks) · **mindsets** (`"thoughts, questions,
motivations, and information needs"`) · **emotions** plotted as a line.
**Zone C — the insights:** opportunities, ownership, next steps. Pain points are read
off Zone B's troughs and converted into Zone C opportunities.

**Five steps:** aspiration and allies (scope + buy-in) → internal investigation
(existing data, stakeholder interviews) → assumption formulation (hypothesis map) →
external research (interviews, direct observation, contextual inquiry, diary studies —
**6–8 participants suffice** when budget-constrained) → narrative visualization.

**Three decisions before starting:** current vs. future state · hypothesis vs. research
· low vs. high fidelity.

**Best for** sequential events, transitions over time, and multi-channel experiences.

## Choosing the artifact

| | Empathy map | Journey map | Experience map | Service blueprint |
|---|---|---|---|---|
| Structure | Says / Thinks / Does / Feels | Phases, actions, thoughts, emotions | Same as journey | Customer, frontstage, backstage, support |
| Chronological | No | Yes | Yes | Yes, hierarchical |
| Product-tied | No | Yes | **No** — agnostic | Yes |
| Perspective | One persona | One persona | Generic human | **The organization's** |
| When | Start of the process; organizing interview notes | Any point; finding painful touchpoints | **Before** journey mapping | **After** journey mapping, before process change |

Practical sequence: empathy map (who) → experience map (general behaviour) → journey
map (our product's version) → service blueprint (what to change internally).

**Journey vs. flow:** a journey is macro, spans channels, runs days to months, and
carries emotion. A flow is micro, lives inside one product, runs minutes to hours, and
captures interactions and system responses.

**Caveats.** [INFERENCE] One actor, one scenario, one map — covering every user type
produces something unreadable. [INFERENCE] A hypothesis map presented as a research map
is actively dangerous; label fidelity and evidence basis on the artifact. [INFERENCE]
The emotion line is the most-quoted and least-evidenced element — anchor every peak and
trough to a quote or delete it. [INFERENCE] Date the map; it documents one product
version and will be cited as truth two redesigns later.

Source: https://www.nngroup.com/articles/journey-mapping-101/ ·
https://www.nngroup.com/articles/ux-mapping-cheat-sheet/

---

# 9. Empathy maps

`"A collaborative visualization used to articulate what we know about a particular type
of user."` Four quadrants around the user:

- **Says** — vocalized during research, including verbatim quotes
- **Thinks** — internal, *including what they hesitate to voice aloud*
- **Does** — physical actions, from observation
- **Feels** — an emotional adjective plus the context for it

The **Says/Thinks gap is often the finding**.

Individual maps document one user; **aggregated** maps synthesize several similar users
into a segment and `"can serve as a foundational step toward persona creation."`
Generate notes individually, then cluster as a team. Version and date the result.

**Reach for it over a persona when** you have raw interview data and no synthesized
model yet, or when you need to expose what you *don't* know — an empty quadrant
`"strongly indicates additional user research is necessary before proceeding with
design work."` [INFERENCE] Reach for a persona instead when the artifact must persist
as a decision reference or distinguish multiple user types; reach for a journey map
when the question is sequential, since empathy maps are explicitly non-chronological.

**Caveats.** NN/g: empathy maps do not replace personas, and do not agonize over
quadrant placement. [INFERENCE] Built without research, it is a proto-persona in a
different shape — same echo-chamber risk. [INFERENCE] "Thinks" is the quadrant most
often fabricated; ground it in observed behaviour or something said elsewhere.

Source: https://www.nngroup.com/articles/empathy-mapping/

---

# 10. The Kano model

Developed by Noriaki Kano and colleagues in 1984. Classifies features by how presence
or absence affects satisfaction.

| Category | Behaviour |
|---|---|
| **Basic / must-be** | Expected. Presence adds nothing; absence causes complaints |
| **Satisfier / performance** | Wanted. Satisfaction scales linearly with fulfilment |
| **Delighter / attractive** | Unexpected. Absence costs nothing; presence has `"the biggest influence"` |
| **Indifferent** | No effect either way |
| **Reverse** | Presence actively dissatisfies |
| **Questionable** | Not a real category — a contradictory answer pair signalling a bad question |

Sourcing note: IxDF's article covers only the first four. Reverse and Questionable come
from the standard Berger et al. (1993) evaluation table — cite as standard practice, not
as IxDF's account. NN/g has no Kano article.

**The decay rule** — the model's most strategically important claim: `"users'
perceptions of satisfaction with a feature will shift from delight to expectation over
time."` Delighter → performance → basic.

**Survey mechanics.** Per attribute, ask a **pair**: functional (`"if the product has
this attribute?"`) and dysfunctional (`"if the product did not have this attribute?"`).
Five options each: like it that way / must be that way / neutral / can live with it /
dislike it. Cross-reference in a 5×5 evaluation table to assign A, O, M, I, R, or Q.

**[UNVERIFIED]** The Berger aggregation rule — if (A+O+M) > (I+R+Q) take the highest of
A/O/M, else the highest of I/R/Q — comes from secondary literature. Verify against
Berger et al. (1993) before relying on it.

[INFERENCE] Ship every Must-be, compete on a few Performance attributes, invest
selectively in Delighters, cut Indifferent items.

**Caveats.** [INFERENCE] Delighters expire — a Kano study has a short shelf life.
[INFERENCE] It measures stated preference, not behaviour. [INFERENCE] Categories differ
by segment; aggregating a mixed sample averages real signal into mush. [INFERENCE] A
high Questionable count is a data-quality alarm about question wording. [INFERENCE] It
says nothing about effort — pair with an impact–effort view.

Source: https://ixdf.org/literature/article/the-kano-model-a-tool-to-prioritize-the-users-wants-and-desires

---

# 11. Prioritization

Two distinct layers: **severity** rates the problem (§1), **priority** ranks the work
and also weighs effort and business value.

**Prioritization matrix** — `"A 2D-visual that shows the relative importance of a set of
items based on two weighted criteria."` Use silent colored-dot voting by expertise, then
`"discuss and negotiate placement."` Breaks down past two criteria; use paired matrices
instead. Private voting counters `"group think or the HIPPO effect."`

| Method | Mechanics | Best for |
|---|---|---|
| **Impact–Effort** | Value vs. complexity. Quick Wins · Big Bets · Money Pits · Fill-ins | Fast collaborative alignment |
| **Feasibility/Desirability/Viability** | Score each ~1–10, sum, rank | Customizable, goal-specific criteria |
| **RICE** | `(Reach × Impact × Confidence) ÷ Effort`. Impact ~.25–3, Confidence 25–100% | Large backlogs needing a number |
| **MoSCoW** | Must / Should / Could / Won't Have | Clear time boxes; simplicity over precision |
| **Kano** | Score functionality and satisfaction −2 to +2 | Politics-heavy prioritization |

[INFERENCE] **A working sequence:** consolidate findings so duplicates collapse → rate
severity independently with ≥3 raters, averaging and recording spread → add engineering
effort estimates → plot severity against effort → ship Quick Wins, schedule Big Bets,
explicitly kill Money Pits so they stop resurfacing → write each item as a
recommendation, not a complaint.

**Caveats.** [INFERENCE] Frequency-within-sample is not frequency-in-population — never
feed "4 of 5 participants" into a RICE Reach number without an analytics cross-check.
[INFERENCE] Severity and priority *should* diverge; show both columns so the tradeoff is
visible rather than laundered. [INFERENCE] RICE's Confidence term is the honest place to
encode research quality — one unmoderated session earns a low multiplier.

Source: https://www.nngroup.com/articles/prioritization-methods/

---

# 12. The insight ladder

NN/g's levels, verbatim:

| Level | Definition |
|---|---|
| **Data** | `"an unanalyzed collection of observations about users that may include transcripts, notes, metrics, or survey output"` |
| **Findings** | `"patterns in collected data or summaries across it. They lack consideration of background, past research, and organizational factors."` |
| **Insights** | `"focused explanations of opportunities, based on other user research and business context"` |

**Data → Findings** adds a *pattern*. **Findings → Insights** adds *business context,
prior research, and user needs* — insights `"tie specific opportunities to specific user
needs and they relate to valuable business objectives."` With findings alone you cannot
determine *why* a pattern occurred.

**Recommendations** are the fourth level. They should suggest specific changes but not
be positioned as the only solution: `"Label them as such and explain to the team...that
the recommendations are intended to jumpstart thinking."` Insights should **narrow
design possibilities rather than prescribe solutions**.

**Five criteria for an actionable finding:** *specificity* (not "registration was hard"
but "the register button had poor color contrast and faded into the background") ·
*design focus, not user blame* · *bigger-picture recognition* (no band-aids on a broken
leg) · *severity ranking* · *organized presentation*.

The principle: `"If product teams don't know what to do with usability results, they'll
simply ignore them."` NN/g calls this **meta-usability** — the findings must themselves
be usable.

**Self-audit before any readout:** for every bullet, name its level. A deck of level-1
and level-2 items is a data dump.

[INFERENCE] The most common inflation is calling a finding an insight. Test: no *why*
and no business objective means it is a finding. "Users abandoned at payment" is a
finding; "users abandon at payment because the total first appears there, violating the
expectation set on the product page — surfacing shipping earlier should recover most of
this" is an insight. [INFERENCE] The opposite failure is jumping to a solution: every
recommendation should trace back through an insight, a finding, and specific data.

Source: https://www.nngroup.com/articles/data-findings-insights-differences/ ·
https://www.nngroup.com/articles/actionable-usability-findings/
