import React, { useState } from "react";
import SpecialButton from 'src\components\ButtonComponents\SpecialButtons\SpecialButton.js'
import { specials } from 'src\data.js'

const Specials = () => {
  // ***DONE*** STEP 2 - add the imported data to state
  const [specialState, setSpecialState] = useState(specials)

  /* ***DONE*** STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
      it any props needed by the child component*/
  return (
    <div>
      {specials.map(special => (
        <SpecialButton special={special}/>
      ))}
    </div>
  );
};