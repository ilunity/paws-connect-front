export const ageToStringFormat = (age: number) => {
  const lastDigit = age % 10;
  let suffix = ' лет';

  const secondFromEndDigit = Math.floor(age % 100 / 10);

  if (secondFromEndDigit !== 1) {
    if (lastDigit === 1) {
      suffix = ' год';
    } else if (lastDigit >= 2 && lastDigit <= 4) {
      suffix = ' года';
    }
  }

  return age + suffix;
};
