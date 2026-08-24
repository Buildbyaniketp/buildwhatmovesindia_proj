# Validation: consensus, debate, and what agreement actually proves

Phase 5 reference. Text in `"quotes"` is verbatim from the cited source. Papers marked
`[preprint]` are not peer-reviewed.

---

# 1. Why consensus runs before debate

**The finding that sets the architecture.** Huang et al. (ICLR 2024) titled a section
*"Multi-Agent Debate Does Not Outperform Self-Consistency."* On GSM8K at matched
response budgets:

| Responses | Debate | Self-consistency |
|---|---|---|
| 6 | 83.2 | **85.3** |
| 9 | 83.0 | **88.2** |

Debate *declines* from round 1 to round 2 while self-consistency gains 2.9. Their
reframing is the design input: debate is best understood `"as a means to achieve
'consistency'"` — majority voting with a noisier, costlier vote-counter.

**The mechanism.** Wang et al. (EMNLP 2024) measured answer entropy falling monotonically
with every debate round: `"dependent sampling can hurt response diversity,"` while
independent sampling increases it. **Debate destroys the very independence that makes
voting work.** Their blunt finding: `"Multi-agent debate and Reflexion often decrease
performances with more budget."`

**The contested reading — reported, not adjudicated.** Smit et al. (ICML 2024), Zhang et
al. (2025), and Chen et al. `[preprint]` argue the failure lies in *protocol design*
rather than in debate itself. Chen's ColMAD beats self-consistency by +4.3 F2 at matched
tokens — **by preserving disagreement instead of resolving it**. What all five groups
agree on: self-consistency is the baseline to beat, naive "here is what the others said,
now revise" rounds are the failure case, and **disagreement is information**.

This is why the gate samples independently first, debates only what splits, and carries
the minority forward.

---

# 2. Documented failure modes

Each is quantified, and each maps onto a countermeasure in the protocol.

| Failure | Measurement | Countermeasure |
|---|---|---|
| **Stance homogenization** | 29% strict conformity; **57–77% of those flips turn correct answers wrong** | Independent verdicts before any cross-exposure |
| **Factual attrition** | up to **72% of issue-critical facts erased** across rounds — *"agents agree more while knowing less"* | Judge runs an explicit attrition check round 1 → round 2 |
| **Problem drift** | **76–89% on generative/subjective tasks** — the exact shape of UX synthesis; −4.65% accuracy after 7 turns | Hard 2-round cap; judge runs a drift check |
| **Confidence–accuracy decoupling** | confidence rises **+10.34pp** across rounds; in 61.7% of debates *both* sides claim ≥75% win probability | Confidence comes from agreement rate, never from self-report |

The problem-drift number deserves emphasis: it is worst on **generative and subjective**
tasks, which is precisely what qualitative UX synthesis is. Assume drift is likely here,
not hypothetical.

---

# 3. The reliability statistics

**Cohen's κ** — exactly two raters, nominal categories. Known weakness: the *kappa
paradox* — high agreement with skewed category prevalence can still yield a low κ.

**Fleiss' κ** — more than two raters.

**Krippendorff's α** — handles multiple coders, any measurement scale, and missing data.
Usually the methodologists' preference.

**Terminology worth keeping straight** (O'Connor & Joffe 2020): *intercoder reliability*
properly applies to nominal categorization; *interrater reliability* to ordinal or
interval ratings. The two are routinely conflated.

## Landis & Koch (1977) bands

| κ | Label |
|---|---|
| < 0.00 | Poor |
| 0.00–0.20 | Slight |
| 0.21–0.40 | Fair |
| 0.41–0.60 | Moderate |
| 0.61–0.80 | Substantial |
| 0.81–1.00 | Almost perfect |

**The caveat nearly every citation omits:** the authors called these divisions
`"clearly arbitrary"`, offered as benchmarks for discussing *their own worked example*.
They were not derived from distributional theory. Cite them as shared vocabulary, never
as a criterion.

## Krippendorff's α thresholds

| α | Decision |
|---|---|
| **≥ 0.800** | Rely on the data; acceptable for published conclusions |
| **0.667 – 0.800** | **Tentative conclusions only**, reported with explicit caveats |
| **< 0.667** | Discard — not reliable enough to support conclusions |

**Two corrections that make you more accurate than most citations** (Artstein & Poesio
2008, who traced the provenance): the 0.667 floor was originally described as
`"highly tentative and cautious"`; and Krippendorff himself later held that
`"even a cutoff point of α = .800 … is a pretty low standard."` **0.800 is the floor for
publishable work, not the target.** Do not present α = 0.81 as a strong result.

**On per-subjectivity thresholds:** the tidy tiered tables circulating online
("0.90+ objective / 0.60–0.75 subjective") **could not be traced to any primary
methodological source** — do not quote them. The leading methodologists reject a single
cutoff outright: `"we doubt that a single cutoff point is appropriate for all purposes."`
Their substitute for a threshold is **disclosure** — report the number of coders, whether
they coded independently, and the full agreement table so readers can see whether
aggregate figures hide disagreement on less common categories.

**For highly subjective judgments, lower the claim, not the threshold.** An α of 0.55 on
an interpretive question means "we could not establish reliability here" — not "0.55 is
fine for subjective work."

---

# 4. Honest limits — quote this, do not soften it

**Agreement among independent model runs measures how stable an output is under
resampling. It does not measure whether the output is true, and it is not equivalent to
agreement between independent human coders.**

## What it genuinely does tell you

- **Stability.** The finding is not an artifact of one lucky sample. Most single-shot AI
  analysis has no evidence of this at all.
- **Calibrated uncertainty.** Consistency is `"highly correlated with accuracy"`, and
  answers occurring more often are more likely correct. **Low agreement is a genuinely
  informative danger signal — arguably the most useful output of the exercise.**
- **Ambiguity detection.** A split often means the *question* was underspecified.
- **Triage.** It shows where to spend scarce human attention.

## What it does not tell you

**Agreement is not validity.** `"Consistent agreement among coders who share the same
interpretive limitations, or who apply incorrect codes with high consistency, can produce
high reliability figures without valid analysis"` (Gwet 2014).

**Model runs are not independent raters — the disqualifying difference.** IRR draws its
evidential force from raters whose errors are *uncorrelated*. Runs of one model violate
this at the root: `"Because contemporary LLMs share similar pretraining corpora, their
errors are strongly correlated, causing the majority to systematically suppress correct
minority opinions."` Two human coders bring different priors; two samples from one model
bring **the same priors with different random seeds**. Unanimity can mean the panel shares
one blind spot, and the statistic cannot tell that apart from consensus on truth.
**Measured: roughly one in four divergent cases has the minority correct.** That number is
the entire justification for carrying minority reports forward.

**The Condorcet precondition is violated, so the mathematics does not transfer.** Majority
voting beats individual accuracy *only when errors are independent*. Correlated errors
break the guarantee — so even a perfect α across model runs does not license the inference
that the majority is probably right.

**Errors are structured, so aggregate agreement hides the worst failures.** In one audit,
the hardest category was the same for **13 of 14 models**. Needs `"expressed through
implication, narrative subtext, or culturally specific framing present systematically
greater challenges"` than directly stated ones. **Translated: a panel agrees most readily
on obvious literal findings and fails together on implied, emotionally loaded, or
culturally framed ones — which are usually the findings that matter most.**

**Deductive and inductive work are not comparable, and the gap is enormous.** Applying a
fixed codebook: GPT-4o reached 96% agreement, **mean κ = 0.71 (SD 0.26)**. Generating
codes inductively: only **31% matched human-generated codes**, 26% were reasonable
alternatives, and **42% were judged not reasonable**. *Synthesis generates themes
inductively* — so the gate is validating the weakest stage of the pipeline. Weight the
panel's verdict on a **theme** far below its verdict on **codebook application**.

**LLM judges are not reliably self-consistent.** `"LLM judges have low intra-rater
reliability in their assigned scores across different runs."` Intra-rater reliability is a
*precondition* for inter-rater reliability meaning anything.

**Be skeptical of "matches human performance" claims** that never establish what human
performance was — many evaluations never report the human coders' own reliability.

---

# 5. The protocol

**1 — Independent panel of 3.** Cold, parallel, identical briefs. Each receives the
evidence corpus, the codebook, and the claims — never another validator's verdict, and
never the synthesis agent's reasoning. Verdicts: supported / partially supported /
unsupported, with evidence IDs.

**2 — Compute agreement per claim** and map to the band. Report the **raw verdict
distribution alongside** any coefficient, per the disclosure principle above.

| Agreement | Status | Treatment |
|---|---|---|
| ≥ 0.80 | Finding, high confidence | State plainly |
| 0.667–0.80 | Finding, moderate confidence | State with a matching hedge |
| < 0.667 | **Hypothesis** | Demote; ship with the study that would resolve it |

**3 — Escalate only where split.** Unanimous claims are settled. Contested claims go to a
5-validator panel and then to debate.

**4 — Debate, 2 rounds maximum.** Proponent and challenger, every argument citing evidence
IDs; uncited assertions are discarded rather than weighed. The cap is not arbitrary —
drift runs 76–89% on generative tasks and accuracy drops 4.65% by turn 7.

**5 — Judge on evidence.** A poorly-argued cited claim beats a well-argued uncited one.
Run both integrity checks: **attrition** (did round-1 evidence survive?) and **drift** (is
this still the original claim?).

**6 — Carry the minority report.** Always, labelled, with its evidence. One in four splits
has the minority right.

## Reporting template

> Validated by a panel of N independent agents; M claims escalated to debate.
> Agreement is measured across independent runs of one model and mapped onto published
> inter-rater-reliability conventions. Because these runs share pretraining, their errors
> are correlated — unlike independent human coders — so agreement indicates **stability
> under resampling, not truth**. Panels agree most readily on literal findings and can
> fail together on implied or culturally framed ones. Minority positions are reported
> rather than averaged away. This supplements human review; it does not replace it.

---

# Sources

Huang et al., ICLR 2024 · Wang et al., EMNLP 2024 · Wang et al. 2022 (self-consistency) ·
Du et al. 2023 (multi-agent debate) · Liang et al. 2023 · Chan et al. 2023 · Smit et al.,
ICML 2024 · Zhang et al. 2025 · Chen et al. `[preprint]` (ColMAD) · He et al. (correlated
errors, minority-correct rate) · Landis & Koch 1977, *Biometrics* 33(1):159–174 ·
Krippendorff 2004, *Content Analysis*, 2nd ed. · Artstein & Poesio 2008, *Computational
Linguistics* 34(4):555–596 · Neuendorf 2002 · Carletta 1996 · Gwet 2014, *Handbook of
Inter-Rater Reliability* · O'Connor & Joffe 2020 · Jennings et al. 2025 · Marston et al. ·
Haldar & Hockenmaier
