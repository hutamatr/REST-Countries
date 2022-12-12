export const populationFormat = (value: number) => {
  return new Intl.NumberFormat().format(value);
};
