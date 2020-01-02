export function getDecimalSize(...numbers) {
  let x = numbers
    .map(x => String(x))
    .map(x => x.split("."))
    .map(x => x[1])
    .filter(x => !!x)
    .map(x => x.length);

  return Math.max(...x, 1);
}

export function format(n: number, d: number) {
  let x = Number(1 + "0".repeat(d));

  return Math.round(n * x) / x;
}
