export class NoiseWalker {
  constructor(p) {
    this.p = p;
    this.tx = 0;
    this.ty = 10000;
  }

  draw() {
    const x = this.p.map(this.p.noise(this.tx), 0, 1, 0, this.p.width);
    const y = this.p.map(this.p.noise(this.ty), 0, 1, 0, this.p.height);
    this.p.background(255, 10);
    this.p.noStroke();
    this.p.fill(0, 80);
    this.p.circle(x, y, 16);
    this.tx += 0.01;
    this.ty += 0.01;
  }
}
