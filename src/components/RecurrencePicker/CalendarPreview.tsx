// src/components/RecurrencePicker/CalendarPreview.tsx

'use client';

import React from 'react';

interface CalendarPreviewProps {
  recurringDates: string[];
}

const CalendarPreview: React.FC<CalendarPreviewProps> = ({ recurringDates }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 mt-6">
      <h2 className="text-xl font-semibold mb-2">📅 Calendar Preview</h2>
      {recurringDates.length === 0 ? (
        <p className="text-gray-500">No dates generated yet.</p>
      ) : (
        <ul className="list-disc list-inside space-y-1">
          {recurringDates.map((date, index) => (
            <li key={index}>{date}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CalendarPreview;