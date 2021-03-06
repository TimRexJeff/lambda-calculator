import React, { useState } from "react";
import OperatorButton from 'src\components\ButtonComponents\OperatorButtons\OperatorButton.js'
import { operators } from 'src\data.js'

const Operators = () => {
  // ***DONE*** STEP 2 - add the imported data to state
  const [operatorState, setOperatorState] = useState(operators)

  /* ***DONE*** STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
      it any props needed by the child component*/
  return (
    <div>
      {operators.map(operator => (
        <OperatorButton operator={operator}/>
      ))}
    </div>
  );
};
