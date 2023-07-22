import React, { useState } from 'react';
import validCard from './ValidCard';
function TextInput() {
  const [inputValue, setInputValue] = useState('');


  const handleChange = (event) => {
    // handle changes from input info and update the value of {state}
    setInputValue((event.target.value));
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
