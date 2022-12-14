import React from 'react';


const Screen = (display) => {
  return (
    <div style={{ minHeight:'40px', border:'2px solid black'}}>{display.textToDisplay}</div>
  )
}

export default Screen;