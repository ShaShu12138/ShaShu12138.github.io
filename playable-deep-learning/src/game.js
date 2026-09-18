const canvas = document.querySelector('#lossCanvas');
const ctx = canvas.getContext('2d');
const rateInput = document.querySelector('#learningRate');
const rateValue = document.querySelector('#rateValue');
const trainButton = document.querySelector('#trainButton');
const resetButton = document.querySelector('#resetButton');
const lossValue = document.querySelector('#lossValue');
const stepCount = document.querySelector('#stepCount');
const statusText = document.querySelector('#statusText');
const message = document.querySelector('#message');
const weightValue = document.querySelector('#weightValue');
const gradientValue = document.querySelector('#gradientValue');
const updateNumbers = document.querySelector('#updateNumbers');
const tinyExperiment = document.querySelector('#tinyExperiment');
const middleExperiment = document.querySelector('#middleExperiment');
const hugeExperiment = document.querySelector('#hugeExperiment');

const START_X = -2.45;
const MIN_X = -3.1;
const MAX_X = 3.1;
const MAX_STEPS = 42;
let x = START_X;
let steps = 0;
let running = false;
let timer = null;
let trail = [];
const completedExperiments = { tiny: false, middle: false, huge: false };

// A simple one-parameter loss curve. Its minimum is at x = 0.
function loss(xValue) {
  return xValue * xValue;
}

// The slope (derivative) of x² is 2x. In this one-dimensional demo,
// this plays the role of the gradient of loss with respect to the weight.
function gradient(xValue) {
  return 2 * xValue;
}

function mapX(value) {
  return 70 + ((value - MIN_X) / (MAX_X - MIN_X)) * (canvas.width - 140);
}

function mapY(lossAmount) {
  const maxLoss = loss(MAX_X);
  return canvas.height - 55 - (lossAmount / maxLoss) * (canvas.height - 115);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Grid.
  ctx.strokeStyle = '#20293a';
  ctx.lineWidth = 1;
  for (let gx = 70; gx <= canvas.width - 70; gx += 80) {
    ctx.beginPath(); ctx.moveTo(gx, 40); ctx.lineTo(gx, canvas.height - 55); ctx.stroke();
  }
  for (let gy = 65; gy <= canvas.height - 55; gy += 60) {
    ctx.beginPath(); ctx.moveTo(70, gy); ctx.lineTo(canvas.width - 70, gy); ctx.stroke();
  }

  // Loss curve.
  ctx.strokeStyle = '#d9ff67';
  ctx.lineWidth = 4;
  ctx.beginPath();
  for (let px = 0; px <= 500; px++) {
    const curveX = MIN_X + (px / 500) * (MAX_X - MIN_X);
    const sx = mapX(curveX);
    const sy = mapY(loss(curveX));
    if (px === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
  }
  ctx.stroke();

  // Minimum marker.
  const minScreenX = mapX(0);
  const minScreenY = mapY(0);
  ctx.fillStyle = '#aab4c5';
  ctx.font = '700 12px system-ui';
  ctx.textAlign = 'center';
  ctx.fillText('LOW LOSS', minScreenX, minScreenY + 35);

  // Previous parameter positions.
  for (let i = 0; i < trail.length; i++) {
    const point = trail[i];
    ctx.fillStyle = `rgba(255,141,107,${0.16 + (i / Math.max(1, trail.length)) * 0.48})`;
    ctx.beginPath();
    ctx.arc(mapX(point), mapY(loss(point)), 6, 0, Math.PI * 2);
    ctx.fill();
  }

  // Current parameter / ball.
  const sx = mapX(Math.max(MIN_X, Math.min(MAX_X, x)));
  const sy = mapY(Math.min(loss(x), loss(MAX_X)));
  ctx.shadowColor = '#ff8d6b';
  ctx.shadowBlur = 22;
  ctx.fillStyle = '#ff8d6b';
  ctx.beginPath(); ctx.arc(sx, sy, 12, 0, Math.PI * 2); ctx.fill();
  ctx.shadowBlur = 0;
  ctx.fillStyle = '#f5f7fb';
  ctx.font = '800 12px system-ui';
  ctx.fillText('WEIGHT', sx, sy - 22);
}

function setMessage(title, text) {
  message.innerHTML = `<h2>${title}</h2><p>${text}</p>`;
}

function updateHud() {
  lossValue.textContent = loss(x).toFixed(3);
  stepCount.textContent = steps;
  weightValue.textContent = x.toFixed(3);
  gradientValue.textContent = gradient(x).toFixed(3);
}

function updateExperimentProgress(learningRate) {
  if (learningRate <= 0.08) completedExperiments.tiny = true;
  else if (learningRate < 0.80) completedExperiments.middle = true;
  else completedExperiments.huge = true;
  tinyExperiment.textContent = `${completedExperiments.tiny ? '✓' : '○'} Tiny update`;
  middleExperiment.textContent = `${completedExperiments.middle ? '✓' : '○'} Controlled update`;
  hugeExperiment.textContent = `${completedExperiments.huge ? '✓' : '○'} Huge update`;
}

function stopTraining(status, title, text) {
  running = false;
  clearInterval(timer);
  timer = null;
  trainButton.disabled = false;
  rateInput.disabled = false;
  statusText.textContent = status;
  updateExperimentProgress(Number(rateInput.value));
  setMessage(title, text);
}

function trainingStep() {
  if (!running) return;
  const learningRate = Number(rateInput.value);
  const oldX = x;
  const oldGradient = gradient(oldX);
  trail.push(x);
  if (trail.length > 24) trail.shift();

  // Gradient-descent update: move the weight opposite the gradient.
  x = oldX - learningRate * oldGradient;
  steps += 1;
  updateNumbers.textContent = `${x.toFixed(3)} = ${oldX.toFixed(3)} − ${learningRate.toFixed(2)} × ${oldGradient.toFixed(3)}`;
  updateHud();
  draw();

  if (!Number.isFinite(x) || Math.abs(x) > MAX_X * 2.4) {
    stopTraining('DIVERGED', 'The steps are too large.', 'The learner keeps jumping away from the low-loss point. A larger learning rate does not always mean faster learning.');
    return;
  }
  if (loss(x) < 0.0025) {
    const description = steps <= 10 ? 'Fast — but still controlled.' : steps <= 24 ? 'Nice. The steps were large enough to make progress without losing control.' : 'It worked, but it took many small updates.';
    stopTraining('FOUND', 'Low loss reached!', description);
    return;
  }
  if (steps >= 8 && Math.abs(learningRate - 1) < 0.005) {
    stopTraining('OSCILLATING', 'The learner is stuck bouncing.', 'The updates keep crossing the minimum without getting closer. This step size is too large to settle.');
    return;
  }
  if (steps >= MAX_STEPS) {
    if (loss(x) < 0.08) {
      stopTraining('CLOSE', 'Almost there.', 'These steps are safe, but progress is slow. Try increasing the step size a little.');
    } else {
      stopTraining('TOO SLOW', 'Still walking…', 'A very small learning rate can require many iterations. Try a larger step size.');
    }
  }
}

function reset() {
  clearInterval(timer);
  timer = null;
  running = false;
  x = START_X;
  steps = 0;
  trail = [];
  trainButton.disabled = false;
  rateInput.disabled = false;
  statusText.textContent = 'READY';
  setMessage('Pick a step size.', 'The learner can feel which direction goes downhill. Your job is to decide how far it moves each time.');
  updateNumbers.textContent = 'Choose a step size, then press TRAIN.';
  updateHud();
  draw();
}

rateInput.addEventListener('input', () => {
  rateValue.textContent = Number(rateInput.value).toFixed(2);
});

trainButton.addEventListener('click', () => {
  if (running) return;
  // Each run starts from the same weight so different learning rates are comparable.
  x = START_X;
  steps = 0;
  trail = [];
  running = true;
  trainButton.disabled = true;
  rateInput.disabled = true;
  statusText.textContent = 'TRAINING';
  setMessage('Training…', 'Watch how the same downhill direction behaves differently when the step size changes.');
  updateHud();
  draw();
  timer = setInterval(trainingStep, 300);
});

resetButton.addEventListener('click', reset);
reset();
