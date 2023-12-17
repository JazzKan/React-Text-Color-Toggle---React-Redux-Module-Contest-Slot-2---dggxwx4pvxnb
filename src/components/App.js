import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
//code here
  const [isBlue, setIsBlue] = useState(false);

  const toggleStyles = () => {
    setIsBlue(!isBlue);
  }
    
  return (
    <div id="main">
      <p className={isBlue ? 'blueText' : 'redText'} >Newton School</p>
      <button id='button' onClick={toggleStyles}>Change Style</button>
    </div>
  )
}


export default App;
