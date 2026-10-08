import { acceptReject } from '../shared/acceptReject.js';

export class Walker {
  constructor(p) {
    this.p = p;
    this.x = p.width / 2;
    this.y = p.height / 2;
  }

  show() {
    this.p.stroke(0);
    this.p.point(this.x, this.y);
  }

  step() {
    const stepSize = acceptReject(this.p) * 5;
    const angle = this.p.random(this.p.TWO_PI);

    this.x += this.p.cos(angle) * stepSize;
    this.y += this.p.sin(angle) * stepSize;
  }
}
