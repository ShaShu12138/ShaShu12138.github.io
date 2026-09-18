# Playtest Notes

Use two testers who have not read chapters 1 and 2. Give each tester the link and one sentence of context, then watch without explaining the interface.

## Tester 1

**Background:** Student

**Hesitations / misclicks / wrong assumptions:**
- The tester understood how to start, but did not clearly understand the relationship between the slider value and the result.
- The tester mainly understood a correct step size as something that would make the process faster.

**What the tester explained afterwards:**
- A correct step size can speed up the process.

**Fixes made because of this test:**
- Changed the slider labels to “tiny updates” and “huge updates.”
- Added an explanation that learning rate changes the distance of each weight update, not the animation speed.
- Added a live calculation showing `new weight = old weight − step size × gradient`.
- Added a three-run checklist to encourage comparison.

## Tester 2

**Background:** Student

**Hesitations / misclicks / wrong assumptions:**
- The tester understood how to start, but found the animation too subtle and was unsure what their action changed or represented.
- The tester interpreted the step as the speed of going downhill.

**What the tester explained afterwards:**
- The step might represent the speed of moving down the hill.

**Fixes made because of this test:**
- Slowed the interval between updates so individual parameter changes are easier to follow.
- Added the current weight and gradient to the HUD.
- Added a live calculation so each movement has an explicit mathematical meaning.
- Added an explanation beside the slider connecting the control to update distance.

## Final changes from playtesting

- Made the meaning of the slider explicit: it scales every parameter update rather than controlling playback speed.
- Slowed the animation from 135 ms to 300 ms per update.
- Added live weight, gradient and update values.
- Added a three-experiment checklist to make comparison part of the activity.
- Added a specific oscillation result for a learning rate of 1.00, where the weight repeatedly crosses the minimum without reducing loss.
