import React from 'react';
import 'tailwindcss/tailwind.css';

const Loader: React.FC = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin" />
  </div>
);

export default Loader;
