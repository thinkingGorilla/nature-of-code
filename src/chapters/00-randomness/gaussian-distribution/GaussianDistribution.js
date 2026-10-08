export class GaussianDistribution {
  constructor(
    p,
    {
      mean = p.width / 2,
      standardDeviation = 60,
      y = p.height / 2,
      diameter = 16,
    } = {},
  ) {
    this.p = p;
    this.mean = mean;
    this.standardDeviation = standardDeviation;
    this.y = y;
    this.diameter = diameter;
  }

  show() {
    const x = this.p.randomGaussian(this.mean, this.standardDeviation);

    this.p.noStroke();
    this.p.fill(0, 10);
    this.p.circle(x, this.y, this.diameter);
  }
}
