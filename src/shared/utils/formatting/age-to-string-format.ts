export const ageToStringFormat = (age: number) => {
  const lastDigit = age % 10;
  let suffix = ' лет';

  if (lastDigit === 1) {
    suffix = ' год';
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    suffix = ' года';
  }

  return lastDigit + suffix;
};
