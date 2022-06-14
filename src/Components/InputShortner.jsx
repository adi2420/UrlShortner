import React, { useState } from 'react';

const InputShortner = ({ setInputValue }) => {
  const [value, setValue] = useState('');

  function handleClick() {
    setInputValue(value);
    setValue('');
  }
  return (
    <div className="input-container">
      <h1>
        URL<span>Shortner</span>
      </h1>
      <div>
        <input
          onChange={(event) => {
            setValue(event.target.value);
          }}
          type="text"
          placeholder="paste a link to shorten"
        />
        <button onClick={handleClick}>Shorten</button>
      </div>
    </div>
  );
};

export default InputShortner;
