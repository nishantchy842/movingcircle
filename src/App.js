// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';


function App() {
  const [positionY, setY]= useState(300)
  const [positionX, setX]= useState(500)

  const changePosition=(action)=>{
    if(action==='left'){
      positionX > 10 ? setX(positionX - 50) : alert('Border End')
    }
    else if(action === 'right'){
      positionX < 1350 ? setX(positionX + 50) : alert('Border End')
    }
    else if(action ==='top'){
      positionY > 0 ? setY(positionY - 50) : alert('Border End')
        }    
    else{
      positionY < 1080? setY(positionY + 50) : alert('Border End')
    }

  }
  return (
    <div>
  <div className='container'>
   <div className='btn'>
   <button onClick={()=>changePosition('left')}>Left</button>
   <button onClick={()=>changePosition('right')}>Right</button>
   <button onClick={()=>changePosition('top')}>Top</button>
   <button onClick={()=>changePosition('down')}>Down</button>
   </div>
   <div className="circle" style={{
    backgroundColor:'blue', 
    marginLeft:positionX + 'px',
    marginTop:positionY + 'px',
    width:'100px',
    height:'100px',
    borderRadius:'50px',
    
  }}>
  </div>
   </div>
   </div>
  );
}

export default App;


