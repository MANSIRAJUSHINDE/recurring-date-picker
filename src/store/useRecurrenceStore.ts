import { create } from 'zustand';
import { RecurrenceState, RecurrenceActions, Frequency, MonthlyPattern } from '@/types/recurrence';

export const useRecurrenceStore = create<RecurrenceState & RecurrenceActions>((set) => ({
  startDate: '',
  endDate: '',
  frequency: 'daily',
  interval: 1,
  selectedDays: [],
  monthlyPattern: {
    week: '',
    day: '',
  },

  setStartDate: (date: string) => set({ startDate: date }),
  setEndDate: (date: string) => set({ endDate: date }),
  setFrequency: (freq: Frequency) => set({ frequency: freq }),
  setInterval: (val: number) => set({ interval: val }),
  setSelectedDays: (days: string[]) => set({ selectedDays: days }),
  setMonthlyPattern: (pattern: MonthlyPattern) => set({ monthlyPattern: pattern }),
}));
