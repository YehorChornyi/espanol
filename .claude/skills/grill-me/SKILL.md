---
name: grill-me
description: Interview the user relentlessly about a plan or design until reaching shared understanding, resolving each branch of the decision tree. Use when user wants to stress-test a plan, get grilled on their design, or mentions "grill me".
---

Interview me relentlessly about every aspect of this plan until we reach a shared
understanding. Walk down each branch of the design tree, resolving dependencies
between decisions one-by-one.

**Always ask through the AskUserQuestion tool, never as prose.** Every question
gets 2–4 concrete proposed answers to pick from, with the recommended one first
and the trade-off stated in each option. Do not ask an open question that leaves
the framing work to the user — framing the options is the job.

Where the options differ in structure (folder layouts, file shapes, URLs, code),
put a short preview on each option so they can be compared side by side.

Prefer one decision per question, but ask several questions in one call when
they are independent and the user is moving fast.

If a question can be answered by exploring the codebase, explore the codebase
instead of asking.
