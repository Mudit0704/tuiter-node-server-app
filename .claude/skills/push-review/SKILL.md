---
name: push-review
description: Gate for `git push` in this repo. Use whenever the user asks to push code (e.g. "push it", "push this", "git push"). Runs Code-Review-Sub-Agent over the commits not yet on the remote before pushing.
---

# Push review gate

Before running `git push` in this repository:

1. Launch the `Code-Review-Sub-Agent` agent to review the commits that are about to be pushed (the diff between the remote tracking branch and `HEAD`, e.g. `git log origin/<branch>..HEAD -p`).
2. If the review finds any issues, do **not** push. Report the issues to the user and wait for them to be resolved.
3. If the review finds no issues, proceed with the push.
