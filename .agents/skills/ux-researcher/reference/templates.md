# Deliverable templates

Formats for what the skill writes into `research/`. Match any convention the repo
already uses in preference to these.

Suggested layout:

```
research/
├── 00-brief.md
├── 01-plan.md
├── 02-codebook.md
├── 03-findings.md          ← the main deliverable
├── 04-validation.md        ← panel record; makes confidence auditable
├── artifacts/              ← personas, journey maps, JTBD
└── raw/                    ← de-identified data
```

---

## Research brief — `00-brief.md`

```markdown
# Research brief — <study name>
**Date** · **Researcher** · **Stakeholders**

## The decision
<What will be done differently depending on the answer, and who decides.>

## Problem statement
<The problem, and the assumptions inside it.>

## Research questions
1. <question> — informs <which part of the decision>

## Scope
In scope: <segments, platforms, flows>
Out of scope: <and why>

## What we already know
<Prior findings with sources; open questions they left.>

## Success criteria
<What makes this research useful rather than merely complete.>

## Constraints
<Time, budget, access, legal.>
```

## Research plan — `01-plan.md`

```markdown
# Research plan — <study name>

## Method
**Recommended:** <method>
**Why:** <justified on the three dimensions and the product phase>
**Answers:** <which research questions>
**Cannot answer:** <the limits — the more useful half>

## Options considered
| Option | Effort | Confidence it yields | Best when |
|---|---|---|---|
| Scrappy: <method> | <days> | <level> | <situation> |
| Rigorous: <method> | <days> | <level> | <situation> |

## Participants
Target n: <n> — **why this number:** <reasoning>
Segments: <n per segment>
Screening criteria: <qualify / disqualify>
Recruitment: <source, and the bias it introduces>

## Protocol
<Session length, structure, tasks or topics, materials.>

## Analysis
<Frameworks to be applied, and the codebook approach.>

## Timeline
| Phase | Duration | Output |

## Risks
| Risk | Impact | Mitigation |

## Panel critique of this plan
<The 3 validators' assessment, dissent included, before approval.>
```

## Codebook — `02-codebook.md`

The single source of truth for parallel analysts. Passed verbatim into every brief.

```markdown
# Codebook — <study name>
**Version** <n> · **Locked** <date>

| Code | Definition | Applies when | Does not apply when | Example |
|---|---|---|---|---|
| <CODE> | <meaning> | <inclusion rule> | <exclusion rule> | <real excerpt> |

## Changes
| Version | Change | Reason | Re-coding needed |
```

---

## Findings — `03-findings.md`

The main deliverable. Answer first.

```markdown
# <Study name> — findings
**Date** · **Method** · **Participants** n=<n> · **Analyst**

## What we learned
<Three to five sentences. If someone reads only this, they should be able to act.>

## Recommendations
| # | Recommendation | Based on | Confidence | Effort | Owner |
|---|---|---|---|---|---|
| 1 | <specific and actionable> | F1, F3 | High | M | <team> |

## Findings

### F1 — <finding as a sentence, not a topic>
**Confidence:** High (panel agreement 1.00) · **Participants:** 6 of 8

<What we found and what it means.>

> "<verbatim quote>" — [P03 · 12:45]
> "<verbatim quote>" — [P07 · 08:12]

**Evidence:** [P01 · 04:10], [P03 · 12:45], [P07 · 08:12]
**Contradicting evidence:** <what complicates this, or "none found">
**Minority report:** <the dissenting reading, or omit if none>
**So what:** <the implication for the decision>

### F2 — <finding>
**Confidence:** Moderate (agreement 0.72) — <what the disagreement was about>
...

## Hypotheses — not yet findings
Below the confidence floor. Stated as open questions, not conclusions.

| # | Hypothesis | Why it fell short | Study that would resolve it |
|---|---|---|---|
| H1 | <statement> | Single mention; panel split 2–3 | <method, n> |

## Limitations
- **Sample:** <who this represents, and who it excludes>
- **Method:** <what the method structurally cannot show>
- **Analysis:** <where interpretation carried the most weight>

## Human review needed
<Judgment calls, ethical questions, and strategy that need the researcher.>

## Open questions
<What the next study should answer.>

## Method appendix
<Protocol, recruitment, dates, materials, and what AI did versus what a human did.>
```

## Validation record — `04-validation.md`

Makes every confidence number auditable rather than asserted.

```markdown
# Validation record — <study name>

**Panel:** 3 validators, independent and cold (escalated to 5 on <n> claims)
**Debate:** <n> claims, 2 rounds maximum

## Agreement summary
| Claim | Panel split | Agreement | Band | Outcome |
|---|---|---|---|---|
| F1 | 3–0 supported | 1.00 | High | Upheld |
| F2 | 2–1 partial | 0.72 | Moderate | Upheld, scope narrowed |
| H1 | 2–3 split | 0.40 | Below floor | Demoted to hypothesis |

## Debated claims

### F2 — <claim>
**Contested because:** <the disagreement>
**Proponent:** <argument, with IDs>
**Challenger:** <argument, with IDs>
**Judge:** <verdict and the evidence that decided it>
**Rewritten to:** <exactly what the evidence supports>
**Minority report:** <carried into findings>
**Attrition check:** <pass / what was lost>
**Drift check:** <pass / where it wandered>

## What the panel caught
<Claims the synthesis overstated. This section is the gate's audit trail — if it is
ever empty across a whole study, the panel is rubber-stamping and needs harder briefs.>

## Limits of this method
Agreement here is measured across independent model runs mapped onto published IRR
bands — not a kappa computed over human coders. It shows whether a conclusion is
stable under resampling. It does not replace human coding on high-stakes work.
```

---

## Persona — `artifacts/persona-<name>.md`

```markdown
# <Name> — <role in one line>
**Based on:** <n> participants — [P01], [P04], [P07]
**Type:** Evidence-based | Proto-persona (directional only)

## Goals
- <goal> — [P01 · 03:20]

## Behaviours
- <observed behaviour, not claimed> — [P04 · 11:05]

## Pain points
| Pain | Severity | Evidence |

## Context
<Environment, devices, constraints, who else is involved.>

## Quotes
> "<verbatim>" — [P07 · 15:33]

## Not observed
<What we do not know about this person. Keeps the next reader from inventing it.>
```

## Journey map — `artifacts/journey-<flow>.md`

```markdown
# <Flow> journey
**Scope:** <start> → <end> · **Based on:** <n> participants

| Stage | Doing | Thinking | Feeling | Pain | Opportunity | Evidence |
|---|---|---|---|---|---|---|
| <stage> | <action> | "<quote>" | 😐 neutral | <friction> | <idea> | [P03 · 07:14] |

## Emotional low point
<Where the experience breaks down, and why it matters most there.>

## Moments of truth
<Stages that decide whether the user continues.>

## Gaps
<Stages with thin evidence. Marked so nobody reads confidence into a blank.>
```

## JTBD — `artifacts/jtbd.md`

```markdown
# Jobs to be done

## J1 — <job statement>
**Format:** When <situation>, I want to <motivation>, so I can <expected outcome>.

**Functional:** <the practical task>
**Emotional:** <how they want to feel>
**Social:** <how they want to be seen>

**Current solution:** <what they do today, including workarounds>
**Forces:** Push <away from current> · Pull <toward new> · Anxiety <about switching>
· Habit <holding them>

**Evidence:** [P02 · 09:41], [P05 · 22:10]
```

---

## Chat summary

What the user reads in the terminal. Keep it short — the files hold the detail.

```markdown
**<Study name>** — <method>, n=<n>

**What we learned:** <2–3 sentences.>

**Top recommendations**
1. <recommendation> — confidence <level>
2. ...

**Watch out:** <the most important limitation or minority report.>

**Validation:** <n> claims reviewed · <n> upheld · <n> narrowed · <n> demoted.

**Files:** `research/03-findings.md` · `research/04-validation.md`

**Needs you:** <what requires the user's judgment.>
```
