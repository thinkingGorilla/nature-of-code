import { GaussianDistribution } from './GaussianDistribution.js';

export const gaussianDistributionSketch = (p) => {
  let distribution;

  p.setup = () => {
    p.createCanvas(640, 240);
    distribution = new GaussianDistribution(p);
    p.background(255);
  };

  p.draw = () => {
    distribution.show();
  };
};
