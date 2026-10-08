export class RandomCount {
  constructor(p, total = 20) {
    this.p = p;
    this.counts = Array(total).fill(0);
  }

  update() {
    const index = this.p.floor(this.p.random(this.counts.length));
    this.counts[index] += 1;
  }

  show() {
    const barWidth = this.p.width / this.counts.length;

    this.p.stroke(0);
    this.p.fill(127);

    for (let index = 0; index < this.counts.length; index += 1) {
      const count = this.counts[index];

      this.p.rect(
        index * barWidth,
        this.p.height - count,
        barWidth - 1,
        count,
      );
    }
  }
}
