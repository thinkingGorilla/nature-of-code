import { NoiseTerrain } from './NoiseTerrain.js';

export const noiseTerrainSketch = (p) => {
  let terrain;

  p.setup = () => {
    p.createCanvas(640, 400);
    terrain = new NoiseTerrain(p);
  };

  p.draw = () => {
    terrain.draw();
    p.noLoop();
  };
};
