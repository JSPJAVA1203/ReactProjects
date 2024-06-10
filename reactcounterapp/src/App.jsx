import './App.css'
import { useState } from 'react';
import Viewer from './components/Viewer';
import Controller from './components/Controller';

// 저 밑에 <Viewer count = {count}/>가 props기법

function App() {
const [count, setCount] = useState(0);

const onClickButton = (value) => {
  if(value){
  setCount(count+value);
  }
  else{  
  setCount(0)
  }
};

  return (
   <div className="App">
    <h1>React Counter App</h1>
    <section>
   <Viewer count ={count}/> 
   </section>
   <section>
   <Controller onClickButton={onClickButton}/>
   </section>
   </div> 
  );
}

export default App;
