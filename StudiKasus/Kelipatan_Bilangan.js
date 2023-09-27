function run(n) {
  if (n < 1) {
    return null;
  }

  if (n % 2 === 0) {
    return n;
  } else {
    return 2 * n;
  }
}
