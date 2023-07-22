import React, { useState, useEffect } from 'react';
import validCard from './ValidCard';

function TextInput() {
  const [inputValue, setInputValue] = useState('');
  const [isValidCard, setIsValidCard] = useState(false);

  const handleChange = (event) => {
    // handle changes from input info and update the value of {state}
    setInputValue(event.target.value);
  };

  useEffect(() => {
    // Perform Luhn Algorithm check whenever the inputValue changes
    setIsValidCard(validCard(inputValue));
  }, [inputValue]);

  const handleSubmit = () => {
    // handle changes from input info.
    if (isValidCard) {
      alert('Your Card Number is valid.');
    } else {
      alert('Your Card Number is invalid!');
    }
  };
  
  return (
    <div>
      <input
        className='textinput'
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="type your card number"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default TextInput;
