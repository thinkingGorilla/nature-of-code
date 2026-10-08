import { NoiseWalker } from './NoiseWalker.js';

export const noiseWalkerSketch = (p) => {
  let walker;

  p.setup = () => {
    p.createCanvas(640, 240);
    walker = new NoiseWalker(p);
    p.background(255);
  };

  p.draw = () => {
    walker.draw();
  };
};
