export type Frequency = 'daily' | 'weekly' | 'monthly' | 'yearly';

export interface MonthlyPattern {
  week: string;
  day: string;
}

export interface RecurrenceState {
  startDate: string;
  endDate: string;
  frequency: Frequency;
  interval: number;
  selectedDays: string[];
  monthlyPattern: MonthlyPattern;
}

export interface RecurrenceActions {
  setStartDate: (date: string) => void;
  setEndDate: (date: string) => void;
  setFrequency: (freq: Frequency) => void;
  setInterval: (val: number) => void;
  setSelectedDays: (days: string[]) => void;
  setMonthlyPattern: (pattern: MonthlyPattern) => void;
}

export interface CalendarPreviewProps {
  repeatEvery: number;
  recurrence: Frequency;
  startDate: string;
  endDate: string;
  selectedDays: string[];
  monthlyPattern: MonthlyPattern;
}
