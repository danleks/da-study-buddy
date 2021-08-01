export const setAverageColor = (average) => {
  let averageNumber = +average;
  let color = null;

  if (averageNumber > 0 && averageNumber <= 3) {
    color = 'error';
  } else if (averageNumber > 3 && averageNumber <= 4) {
    color = 'warning';
  } else {
    color = 'success';
  }

  return color;
};
