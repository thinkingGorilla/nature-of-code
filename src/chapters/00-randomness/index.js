import { walkerSketch } from './walker/sketch.js';
import { randomCountSketch } from './random-count/sketch.js';
import { gaussianDistributionSketch } from './gaussian-distribution/sketch.js';
import { acceptRejectDistributionSketch } from './accept-reject-distribution/sketch.js';
import { noiseWalkerSketch } from './noise-walker/sketch.js';
import { noiseImageSketch } from './noise-image/sketch.js';
import { noiseTerrainSketch } from './noise-terrain/sketch.js';

export const randomnessChapter = {
  id: '00-randomness',
  title: 'Chapter 0 · Randomness',
  examples: [
    {
      id: 'walker',
      title: 'Random Walker',
      sketch: walkerSketch,
    },
    {
      id: 'random-count',
      title: 'Random Count',
      sketch: randomCountSketch,
    },
    {
      id: 'gaussian-distribution',
      title: 'Gaussian Distribution',
      sketch: gaussianDistributionSketch,
    },
    {
      id: 'accept-reject-distribution',
      title: 'Accept-Reject Distribution',
      sketch: acceptRejectDistributionSketch,
    },
    {
      id: 'noise-walker',
      title: 'Noise Walker',
      sketch: noiseWalkerSketch,
    },
    {
      id: 'noise-image',
      title: 'Noise Image',
      sketch: noiseImageSketch,
    },
    {
      id: 'noise-terrain',
      title: 'Noise Terrain',
      sketch: noiseTerrainSketch,
    },
  ],
};
