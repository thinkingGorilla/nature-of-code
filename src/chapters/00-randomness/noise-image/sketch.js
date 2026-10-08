import { NoiseImage } from './NoiseImage.js';

export const noiseImageSketch = (p) => {
  let noiseImage;
  let incrementSlider;
  let incrementOutput;
  let zToggle;

  p.setup = () => {
    p.pixelDensity(1);
    p.createCanvas(640, 240);
    p.frameRate(15);
    noiseImage = new NoiseImage(p);

    const controls = p.createDiv();
    controls.addClass('canvas-controls');

    const label = p.createElement('label', 'XY offset');
    label.attribute('for', 'noise-increment');
    label.parent(controls);

    incrementSlider = p.createSlider(0.001, 0.1, 0.01, 0.001);
    incrementSlider.id('noise-increment');
    incrementSlider.parent(controls);

    incrementOutput = p.createSpan('0.010');
    incrementOutput.addClass('control-value');
    incrementOutput.parent(controls);

    zToggle = p.createCheckbox('Z offset animation', true);
    zToggle.addClass('toggle-control');
    zToggle.parent(controls);
  };

  p.draw = () => {
    const increment = Number(incrementSlider.value());
    noiseImage.setIncrement(increment);
    noiseImage.setZEnabled(zToggle.checked());
    incrementOutput.html(increment.toFixed(3));
    noiseImage.draw();
  };
};
