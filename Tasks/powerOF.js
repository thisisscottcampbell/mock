const pow = (base, power, mag = base) => {
  if (power === 1) return mag;
  mag *= base;
  return pow(base, --power, mag);
}

function pow(base, power) {
  let magnitude = base;

  while (power - 1 > 0) {
    magnitude *= base;
    power--
  }
  return magnitude;
}


console.log(pow(2, 4))