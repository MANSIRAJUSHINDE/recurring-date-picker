import { Frequency, MonthlyPattern } from '@/types/recurrence';
import { addDays, addWeeks, addMonths, addYears, isBefore, parseISO, format } from 'date-fns';

// /src/lib/recurrence.ts
export function generateRecurringDates(
  startDateStr: string,
  endDateStr: string,
  frequency: Frequency,
  interval: number,
  selectedDays: string[],
  monthlyPattern: MonthlyPattern
): string[] 
 {
  const dates: string[] = [];
  const startDate = parseISO(startDateStr);
  const endDate = parseISO(endDateStr);

  if (!startDate || !endDate || isBefore(endDate, startDate)) return dates;

  let current = startDate;

  while (!isBefore(endDate, current)) {
    const dayName = format(current, 'EEEE').toLowerCase(); // e.g., 'monday'

    if (frequency === 'daily') {
      dates.push(format(current, 'yyyy-MM-dd'));
      current = addDays(current, interval);
    }

    else if (frequency === 'weekly') {
      // Add if current day is selected
      if (selectedDays.includes(dayName)) {
        dates.push(format(current, 'yyyy-MM-dd'));
      }
      current = addDays(current, 1); // Move by day and check each
    }

    else if (frequency === 'monthly') {
      const week = monthlyPattern.week.toLowerCase(); // e.g., "first"
      const day = monthlyPattern.day.toLowerCase(); // e.g., "monday"
      const targetDate = getNthWeekdayOfMonth(current, week, day);
      if (targetDate && !isBefore(targetDate, startDate) && !isBefore(endDate, targetDate)) {
        dates.push(format(targetDate, 'yyyy-MM-dd'));
      }
      current = addMonths(current, interval);
    }

    else if (frequency === 'yearly') {
      dates.push(format(current, 'yyyy-MM-dd'));
      current = addYears(current, interval);
    }
  }

  return dates;
}

/**
 * Utility to get the nth weekday (e.g., first Monday) of a month
 */
function getNthWeekdayOfMonth(baseDate: Date, nth: string, dayName: string): Date | null {
  const nthMap: { [key: string]: number } = {
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
    last: -1,
  };

  const weekIndex = nthMap[nth.toLowerCase()];
  if (!weekIndex) return null;

  const firstDayOfMonth = new Date(baseDate.getFullYear(), baseDate.getMonth(), 1);
  const daysInMonth = new Date(baseDate.getFullYear(), baseDate.getMonth() + 1, 0).getDate();

  const matchingDays: Date[] = [];

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(baseDate.getFullYear(), baseDate.getMonth(), day);
    const weekday = format(date, 'EEEE').toLowerCase();
    if (weekday === dayName) {
      matchingDays.push(date);
    }
  }

  if (weekIndex === -1) {
    return matchingDays.at(-1) || null;
  }

  return matchingDays[weekIndex - 1] || null;
}
