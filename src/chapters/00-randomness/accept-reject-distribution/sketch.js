import { AcceptRejectDistribution } from './AcceptRejectDistribution.js';

export const acceptRejectDistributionSketch = (p) => {
  let distribution;

  p.setup = () => {
    p.createCanvas(640, 240);
    distribution = new AcceptRejectDistribution(p);
  };

  p.draw = () => {
    distribution.update();
    distribution.show();
  };
};
