'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRecurrenceStore } from '@/store/useRecurrenceStore';

const daysOfWeek = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];

const WeeklySelector = () => {
  const { selectedDays, setSelectedDays } = useRecurrenceStore();

  const toggleDay = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter(d => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  return (
    <div className="grid grid-cols-4 gap-2 mt-2">
      {daysOfWeek.map((day, index) => (
        <motion.button
          key={day}
          onClick={() => toggleDay(day)}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className={`px-3 py-1 rounded-md text-sm font-medium border transition-all duration-300 ${
            selectedDays.includes(day)
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white'
          }`}
        >
          {day.charAt(0).toUpperCase() + day.slice(1)}
        </motion.button>
      ))}
    </div>
  );
};

export default WeeklySelector;
