import React from 'react';
import MostPopular from '../components/MostPopular'; // Pastikan path ini sesuai dengan struktur folder Anda

const HomePage: React.FC = () => {
  return (
    <div>
      <header className="bg-gray-800 text-white p-4 text-center">
        <h1 className="text-3xl font-bold">Welcome to the Popular Items</h1>
        <p className="mt-2">Discover the most popular items in our community.</p>
      </header>
      <main className="mt-8">
        <MostPopular />
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center mt-8">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;