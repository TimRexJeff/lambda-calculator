import React, { useState } from "react";
import NumberButton from 'src\components\ButtonComponents\NumberButtons\NumberButton.js'
import { numbers } from 'src\data.js'

const Numbers = () => {
  // ***DONE*** STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers)

  return (
    <div>
      {numbers.map(number => (
        <button />
      ))
        
        /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
