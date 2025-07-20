'use client';

import { useRecurrenceStore } from '@/store/useRecurrenceStore';
import { Frequency } from '@/types/recurrence';

const frequencies: Frequency[] = ['daily', 'weekly', 'monthly', 'yearly'];

export default function FrequencySelector() {
  const { frequency, setFrequency } = useRecurrenceStore();

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Frequency</label>
      <select
        value={frequency}
        onChange={(e) => setFrequency(e.target.value as Frequency)}
        className="border border-gray-300 rounded-md p-2 w-full"
      >
        {frequencies.map((freq) => (
          <option key={freq} value={freq}>
            {freq.charAt(0).toUpperCase() + freq.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}
