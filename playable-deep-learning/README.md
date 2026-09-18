# Loss Valley — Playable Deep Learning

## What this material explains

Loss Valley is a small interactive website about **learning rate in gradient descent**. The learner changes one control — the step size — and watches a simplified model parameter move down a one-dimensional loss curve.

The intended takeaway is that a very small learning rate can make progress slow, while an excessively large learning rate can produce bad updates instead of reliably moving toward lower loss.

## Book source

The factual basis is *Deep Learning with Python* by François Chollet, Chapter 2, section **“The engine of neural networks: Gradient-based optimization”**, especially the subsection **“Stochastic gradient descent.”**

The site deliberately uses a one-parameter loss curve as a teaching simplification. Chapter 2 explicitly notes that real neural networks use gradient descent in high-dimensional parameter spaces.

## Public URL

Add the deployed URL here after publishing.

## How to run locally

No installation is required. Open `index.html` in a current desktop browser.

You can also serve the folder with any static local web server if preferred.

## How to play

1. Choose a **Step Size (learning rate)** with the slider.
2. Press **TRAIN**.
3. Watch the weight move down the loss curve.
4. Reset and compare a tiny, medium, and huge step size.
5. Read the explanation below the interaction to connect the game metaphor to the deep-learning terms.

## AI use

I used ChatGPT to help me understand gradient descent and learning rate in simpler language, brainstorm the Loss Valley interaction, and generate an initial HTML/CSS/JavaScript implementation. I checked the deep-learning claims against Chapter 2 of *Deep Learning with Python*, especially “The engine of neural networks: Gradient-based optimization.”

Before submission, I will personally review, run, test and modify the final implementation so that I can explain every line I ship. The final README should be updated if my actual AI use or implementation changes before hand-in.
