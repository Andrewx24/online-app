import React from 'react';
import anton from '@/lib/fonts';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      <section className="text-center">
        <h1 className={`${anton.className} text-4xl font-bold mb-4`}>CEO PAGE</h1>
        <p className="text-lg text-gray-700 mb-8">
          Welcome to the CEO page. Here you can find information about our CEO, their vision, and their journey.
        </p>
      </section>
      <section className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl mx-4">
        <h2 className={`${anton.className} text-2xl font-semibold mb-4`}>About Our CEO</h2>
        <p className="text-md text-gray-600">
          Our CEO, <span className={anton.className}>John Doe</span>, has been at the helm of the company for 4 years, driving innovation and growth.
        </p>
      </section>
    </main>
  );
}
