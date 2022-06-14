import React, { useState } from 'react';
import AnimatedBackground from './AnimatedBackground';
import InputShortner from './InputShortner';
import LinkResult from './LinkResult';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className="app-container">
      <InputShortner setInputValue={setInputValue} />
      <AnimatedBackground />
      <LinkResult inputValue={inputValue} />
    </div>
  );
};

export default App;
