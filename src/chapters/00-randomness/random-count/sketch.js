import { RandomCount } from './RandomCount.js';

export const randomCountSketch = (p) => {
  let randomCount;

  p.setup = () => {
    p.createCanvas(640, 240);
    randomCount = new RandomCount(p);
    p.background(255);
  };

  p.draw = () => {
    randomCount.update();
    randomCount.show();
  };
};
