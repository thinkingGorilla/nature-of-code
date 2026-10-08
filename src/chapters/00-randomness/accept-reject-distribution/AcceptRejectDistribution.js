import { acceptReject } from '../shared/acceptReject.js';

export class AcceptRejectDistribution {
  constructor(p, total = 20) {
    this.p = p;
    this.counts = Array(total).fill(0);
  }

  update() {
    const value = acceptReject(this.p);
    const index = this.p.floor(value * this.counts.length);

    this.counts[index] += 1;
  }

  show() {
    const barWidth = this.p.width / this.counts.length;
    const maxBarHeight = this.p.height - 20;
    const maxCount = Math.max(...this.counts);
    const scale = Math.max(1, maxCount / maxBarHeight);

    this.p.background(255);
    this.p.stroke(0);
    this.p.fill(127);

    for (let index = 0; index < this.counts.length; index += 1) {
      const barHeight = this.counts[index] / scale;

      this.p.rect(
        index * barWidth,
        this.p.height - barHeight,
        barWidth - 1,
        barHeight,
      );
    }
  }
}
