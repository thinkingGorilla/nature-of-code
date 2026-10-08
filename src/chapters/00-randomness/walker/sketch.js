import { Walker } from './Walker.js';

export const walkerSketch = (p) => {
  let walker;

  p.setup = () => {
    p.createCanvas(640, 240);
    walker = new Walker(p);
    p.background(255);
  };

  p.draw = () => {
    walker.step();
    walker.show();
  };
};
