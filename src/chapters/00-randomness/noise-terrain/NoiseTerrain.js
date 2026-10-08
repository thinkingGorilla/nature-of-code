export class NoiseTerrain {
  constructor(
    p,
    {
      columns = 41,
      rows = 31,
      spacingX = 7,
      spacingY = 4,
      noiseScale = 0.08,
      heightScale = 80,
    } = {},
  ) {
    this.p = p;
    this.columns = columns;
    this.rows = rows;
    this.spacingX = spacingX;
    this.spacingY = spacingY;
    this.noiseScale = noiseScale;
    this.heightScale = heightScale;
  }

  getHeight(column, row) {
    const noiseValue = this.p.noise(
      column * this.noiseScale,
      row * this.noiseScale,
    );

    return this.p.map(noiseValue, 0, 1, -this.heightScale, this.heightScale);
  }

  getPoint(column, row) {
    return {
      x: (column - row) * this.spacingX,
      y: (column + row) * this.spacingY - this.getHeight(column, row),
    };
  }

  draw() {
    this.p.background(245);
    this.p.translate(this.p.width / 2, 70);
    this.p.stroke(25, 65, 50);
    this.p.strokeWeight(1);
    this.p.noFill();

    for (let row = 0; row < this.rows; row += 1) {
      this.p.beginShape();

      for (let column = 0; column < this.columns; column += 1) {
        const point = this.getPoint(column, row);
        this.p.vertex(point.x, point.y);
      }

      this.p.endShape();
    }

    for (let column = 0; column < this.columns; column += 1) {
      this.p.beginShape();

      for (let row = 0; row < this.rows; row += 1) {
        const point = this.getPoint(column, row);
        this.p.vertex(point.x, point.y);
      }

      this.p.endShape();
    }
  }
}
