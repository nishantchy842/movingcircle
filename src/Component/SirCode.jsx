// import './App.css';
import React, { useState } from 'react';

const ClassCode=()=>{
 const [positionY, setPositionY] = useState(300)
 const [positionX, setPositionX] = useState(500)
  const moveX = (action)=> {
    setPositionY(300)
      if(action==='left'){
        setPositionX(300)
      }else if(action==='right'){
        setPositionX(700)
      }
  }

  const moveY = (action)=> {
    setPositionX(500)
    if(action==='up'){
      setPositionY(100)
    }else if(action==='down'){
      setPositionY(500)
    }
}
  return (
    <>
    <button onClick={()=>moveX('left')}>left</button>
    <button onClick={()=>moveX('right')}>right</button>
    <button onClick={()=>moveY('up')}>up</button>
    <button onClick={()=>moveY('down')}>down</button>
    <div style={{
      backgroundColor: 'red',
       padding: '32px',
      width:'30px',
      marginTop: positionY+'px',
      marginLeft: positionX+'px'
    }}>
    </div>
    </>
  );
}
export default ClassCode;
