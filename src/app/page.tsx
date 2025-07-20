'use client';

import RecurrenceWrapper from '@/components/RecurrencePicker/RecurrenceWrapper';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center p-4">
      <RecurrenceWrapper />
    </main>
  );
}
