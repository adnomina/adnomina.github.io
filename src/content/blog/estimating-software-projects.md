---
title: "Estimating Software Projects"
description: "A blog post about software estimation"
pubDate: "Feb 15 2026"
---

## Introduction

Developing software is like driving a car in fog. You can't see the horizon and problems may appear out of thin air. Giving exact estimates for a software project even a couple of months in advance is a fiction. Still, we are expected to give estimates, because our clients give us their money and their time. Developers like to add safety buffers for themselves, but inflated estimates are bad for business, since our clients could turn to someone else.

## Less is more

Instead of trying to estimate a project front to end, break up the work into packets. These roughly equal 1–2 months of work and could be a group of tasks like implementing authentication. They are much easier to estimate than the whole project. This way you can work iteratively and reassess. You can even use LLMs to figure out a rough list of tasks for the packets and try to parallelize your work, but you should do the estimations yourself. When it comes to estimation techniques, a nice little abstraction you can use for estimates are t-shirt sizes, like S, M, or L (or even more granular). Or, instead of trying to estimate exactly, specify the best and worst cases and then use them to define the likely case. For anything larger than that, prefer ranges (e.g., 20K–30K) over a precise number. A side note on tests: features should include tests, but it's okay not to cover all tests in the beginning (cover happy paths and common error). Technically we want to write as few tests as possible, because it's dead code that's not used in production, but we need them for confidence.

## It's time for a time box

The more uncertain a project is, the more it calls for a timebox. Give yourself the time to try out whatever you might want. You won't know what happens inside the timebox, but at least you'll know what to build afterwards and be ready to give an estimation.

## When you're still stuck

Keep in mind that you can pass the ball back to the customer. When there are a lot of open questions, a requirements workshop with them is necessary. Every estimation has a conficence interval; when different team members come up with very different estimates, the project is underspecified. You can then use a requirements workshop to clarify open questions by creating proofs of concept and MVPs and getting instant feedback from the customer. In any case, always tell your customer when a task is indeterminate or at risk.

## The final boss: Dependency updates

Dependency updates can't be estimated seriously. They might go over smoothly one time and be done in a week, while another time you might unexpectedly spend several weeks of work on them. Here, again, it's best to use timeboxing and reassess afterwards.

## Final thoughts

Try to get out of thinking that you have to "build software". Your job is to find solutions to problems and sometimes less is more. Try to describe the easiest, most basic implementation possible and go from there. Beware of analysis paralysis: don't get caught up in every tiny little detail right at the start of the project. You don't need to see the entire road ahead. Just keep your headlights on the next stretch. As you move forward, more of the path reveals itself.
