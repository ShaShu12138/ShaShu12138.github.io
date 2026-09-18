# Process Note

## Concept choice

I chose learning rate in gradient descent because it was one of the concepts that became much clearer when I imagined it physically instead of only reading the terminology. The idea of moving downhill is simple, but the effect of the step size is important: very small updates can be slow, while very large updates can behave badly.

The project turns that idea into one interaction. The player chooses the step size and watches the same starting weight move on a simplified loss curve. I kept the scope to one parameter and one curve so the interaction explains one idea instead of becoming a general deep-learning overview.

## What I learned

Building and revising the interaction helped me understand that the learning rate does not decide which direction is downhill. The gradient provides that information, and the learning rate scales how far the weight moves. In this simplified example the loss is `x²`, its gradient is `2x`, and the update is `new weight = old weight - learning rate × gradient`.

I also learned that a larger learning rate is not automatically better. Small updates can reduce loss reliably but slowly. A suitable value can reach low loss efficiently. A large value can cross the minimum repeatedly, and a value larger than the stable range can make the loss grow. The one-dimensional curve makes this visible, but it is a teaching simplification: real neural networks have many parameters, and backpropagation computes the gradients used by the optimizer.

## What the playtests changed

Both testers could start the interaction, but neither immediately connected the slider to the distance of each parameter update. One tester mainly understood the correct step size as a way to make training faster. The other found the animation too subtle and interpreted the step as the speed of travelling downhill.

These observations showed that the visual metaphor was understandable, but the learning mechanism behind it was not explicit enough. I changed the slider labels to describe update size, added a sentence distinguishing update distance from animation speed, and added live weight, gradient and update values. I also slowed the animation and added a three-run checklist so that comparing learning rates is an explicit part of the activity.

## What I would build next

Next, I would add a prediction step in which the learner chooses whether a run will converge, oscillate or diverge before training begins. I would also add a second, less symmetrical loss landscape to show that the ideal learning rate depends on the shape of the problem. The current quadratic curve is useful for introducing the mechanism, but it is much simpler than optimization in a real neural network.
