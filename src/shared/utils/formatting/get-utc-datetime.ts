import { DateTime } from 'luxon';

export const getUtcDateTime = (text: string) => {
  return DateTime.fromISO(text, { zone: 'utc' });
};
