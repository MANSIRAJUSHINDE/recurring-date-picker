// src/components/RecurrencePicker/RecurrenceWrapper.tsx

'use client';

import React, { useEffect, useState } from 'react';
import { useRecurrenceStore } from '@/store/useRecurrenceStore';
import { generateRecurringDates } from '@/lib/recurrence';
import CalendarPreview from './CalendarPreview';
import FrequencySelector from './FrequencySelector';
import IntervalSelector from './IntervalSelector';
import WeeklySelector from './WeeklySelector';
import MonthlyPatternSelector from './MonthlyPatternSelector';
import DateRangePicker from './DateRangePicker';

const RecurrenceWrapper: React.FC = () => {
  const {
    startDate,
    endDate,
    frequency,
    interval,
    selectedDays,
    monthlyPattern,
  } = useRecurrenceStore();

  const [recurringDates, setRecurringDates] = useState<string[]>([]);

  useEffect(() => {
    if (!startDate || !endDate || interval <= 0) return;

    const generated = generateRecurringDates(
      startDate,
      endDate,
      frequency,
      interval,
      selectedDays,
      monthlyPattern
    );

    setRecurringDates(generated);
  }, [startDate, endDate, frequency, interval, selectedDays, monthlyPattern]);

  return (
    <div
      className="w-full max-w-4xl mx-auto px-6 py-8 space-y-6 bg-gray-100 dark:bg-gray-900 rounded-xl shadow-lg overflow-y-auto"
      style={{ minHeight: '720px' }}
    >
      <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
        🔁 Simple Recurrence Picker
      </h1>

      <DateRangePicker />
      <FrequencySelector />
      <IntervalSelector />

      {frequency === 'weekly' && <WeeklySelector />}
      {frequency === 'monthly' && <MonthlyPatternSelector />}

      <CalendarPreview recurringDates={recurringDates} />
    </div>
  );
};

export default RecurrenceWrapper;
