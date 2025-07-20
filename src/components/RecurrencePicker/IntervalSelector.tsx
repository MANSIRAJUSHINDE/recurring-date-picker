'use client';

import { useRecurrenceStore } from '@/store/useRecurrenceStore';

export default function IntervalSelector() {
  const { interval, setInterval } = useRecurrenceStore();

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Repeat every:</label>
      <input
        type="number"
        min={1}
        value={interval}
        onChange={(e) => setInterval(parseInt(e.target.value, 10))}
        className="border border-gray-300 rounded-md p-2 w-full"
      />
    </div>
  );
}
