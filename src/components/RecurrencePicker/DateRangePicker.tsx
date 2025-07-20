'use client';

import { useRecurrenceStore } from '@/store/useRecurrenceStore';

export default function DateRangePicker() {
  const {
    startDate,
    endDate,
    setStartDate,
    setEndDate,
  } = useRecurrenceStore();

  return (
    <div className="flex flex-col gap-2 mb-4">
      <div className="flex flex-col">
        <label htmlFor="start-date" className="text-sm font-medium">
          Start Date
        </label>
        <input
          id="start-date"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border p-2 rounded-md"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="end-date" className="text-sm font-medium">
          End Date
        </label>
        <input
          id="end-date"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border p-2 rounded-md"
        />
      </div>
    </div>
  );
}
