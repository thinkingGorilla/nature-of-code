export class NoiseImage {
  constructor(p, increment = 0.01, zIncrement = 0.01) {
    this.p = p;
    this.increment = increment;
    this.zIncrement = zIncrement;
    this.zOffset = 0;
    this.zEnabled = true;
  }

  setIncrement(increment) {
    this.increment = increment;
  }

  setZEnabled(enabled) {
    this.zEnabled = enabled;
  }

  draw() {
    this.p.loadPixels();
    let xOffset = 0;

    for (let x = 0; x < this.p.width; x += 1) {
      let yOffset = 0;

      for (let y = 0; y < this.p.height; y += 1) {
        const index = (x + y * this.p.width) * 4;
        const brightness = this.p.map(
          this.p.noise(xOffset, yOffset, this.zOffset),
          0,
          1,
          0,
          255,
        );

        this.p.pixels[index] = brightness;
        this.p.pixels[index + 1] = brightness;
        this.p.pixels[index + 2] = brightness;
        this.p.pixels[index + 3] = 255;
        yOffset += this.increment;
      }

      xOffset += this.increment;
    }

    this.p.updatePixels();
    if (this.zEnabled) {
      this.zOffset += this.zIncrement;
    }
  }
}
