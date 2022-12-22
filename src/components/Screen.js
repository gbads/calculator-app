import React from 'react';


const Screen = (display) => {
  return (
    <div style={{ minHeight:'40px', border:'1px solid black', marginBottom:'13px'}}>{display.textToDisplay}</div>
  )
}

export default Screen;