import React, { useState } from 'react';
import validCard from './ValidCard';
function TextInput() {
  const [inputValue, setInputValue] = useState('');

  const formatCardNumber = (value) => {
    // Remove any non-numeric characters from the input
    const numericValue = value.replace(/\D/g, '');

    // Split the numericValue into groups of four digits
    const formattedValue = numericValue.replace(/(\d{4})(?=\d)/g, '$1 ');

    // Limit the formattedValue to 19 characters (16 digits + 3 spaces)
    return formattedValue.slice(0, 19);
  };


  const handleChange = (event) => {
    // handle changes from input info and update the value of {state}
    setInputValue(formatCardNumber(event.target.value));
  };

  const handleSubmit = () => {
    // handle changes from input info.
     /*
  Ternary Operator
  condition ? expression1 : expression2
  */
    validCard(inputValue)==false? alert('Your Card Number is invalid!'):
    alert('Your Card Number is valid.');
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
