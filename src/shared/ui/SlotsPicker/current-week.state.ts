import { DateTime, Interval } from 'luxon';
import { makeAutoObservable } from 'mobx';

export class CurrenWeekState {
  private weekNumber = 0;
  private MAX_WEEK_NUMBER: number;
  private from: string;
  private to: string;

  constructor(from: string, to: string) {
    this.from = from;
    this.to = to;
    this.MAX_WEEK_NUMBER = Interval.fromDateTimes(DateTime.fromISO(from), DateTime.fromISO(to)).length('weeks') - 1;

    makeAutoObservable(this);
  }

  next() {
    if (this.isLast()) {
      return;
    }
    this.weekNumber++;
  }

  prev() {
    if (this.isFirst()) {
      return;
    }
    this.weekNumber--;
  }

  isFirst() {
    return this.weekNumber === 0;
  }

  isLast() {
    return this.weekNumber === this.MAX_WEEK_NUMBER;
  }

  getDaysList() {
    const daysList = [];

    for (let i = 0; i < 7; i++) {
      daysList.push(DateTime.fromISO(this.from).plus({ days: this.weekNumber * 7 + i }).toISODate() as string);
    }

    return daysList;
  }

  getInterval() {
    const daysList = this.getDaysList();
    return Interval.fromDateTimes(DateTime.fromISO(daysList[0]), DateTime.fromISO(daysList[6]));
  }
}
