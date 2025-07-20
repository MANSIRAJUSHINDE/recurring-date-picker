'use client';

import { useRecurrenceStore } from '@/store/useRecurrenceStore';

const weeks = ['First', 'Second', 'Third', 'Fourth', 'Last'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function MonthlyPatternSelector() {
  const { monthlyPattern, setMonthlyPattern } = useRecurrenceStore();

  const handleChange = (key: 'week' | 'day', value: string) => {
    setMonthlyPattern({
      ...monthlyPattern,
      [key]: value,
    });
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Repeat on:</label>
      <div className="flex gap-4">
        <select
          value={monthlyPattern.week}
          onChange={(e) => handleChange('week', e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        >
          <option value="">Select week</option>
          {weeks.map((week) => (
            <option key={week} value={week}>
              {week}
            </option>
          ))}
        </select>

        <select
          value={monthlyPattern.day}
          onChange={(e) => handleChange('day', e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        >
          <option value="">Select day</option>
          {days.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
