function getRangeArray(from, to, step = 1) {
  let start = from;
  let end = to;
  const arr = [];
  while (start <= end) {
    arr.push(start);
    start += step;
  }
  return arr;
}

export const createTransparencyPaletteFromColor = (
  colorName,
  r,
  g,
  b,
  to,
  from,
  step
) => {
  const rangeAlpha = getRangeArray(to, from, step).reduce(
    (map, a) => ({
      ...map,
      [`${colorName}${a}`]: `rgba(${r},${g},${b},${a / 100})`,
    }),
    {}
  );

  return rangeAlpha;
};
