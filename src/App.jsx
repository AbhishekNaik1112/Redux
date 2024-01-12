import React from 'react';
import Counter from './components/Counter';

const App = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4 text-center">React-Redux Counter</h1>
      <div className="bg-gray-200 p-4 rounded-lg">
        <Counter />
      </div>
    </div>
  );
};

export default App;
