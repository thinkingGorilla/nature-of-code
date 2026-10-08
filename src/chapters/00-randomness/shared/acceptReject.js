export function acceptReject(p) {
  while (true) {
    const candidate = p.random(1);
    const probability = candidate;

    if (p.random(1) < probability) {
      return candidate;
    }
  }
}
