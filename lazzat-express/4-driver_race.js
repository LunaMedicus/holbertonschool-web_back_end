export function driver(name, ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(name), ms);
  });
}

export default function fastestDriver() {
  const d1 = driver('Aydin', 1200);
  const d2 = driver('Kamran', 600);
  const d3 = driver('Elvin', 900);

  return Promise.race([d1, d2, d3]);
}
