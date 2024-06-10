import './App.css'
import { useState, useEffect, useRef } from 'react';
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import Even from './components/Even';

// 저 밑에 <Viewer count = {count}/>가 props기법

function App() {
const [count, setCount] = useState(0);
const [input, setInput] = useState("");
const isMount = useRef(false);
/*
useEffect(()=>{
    console.log(`count: ${count}, input: ${input}`);
},[count, input]); // useEffect (콜백함수, 의존성배열)
*/

//1.마운트
useEffect(()=>{
  console.log("마운트 되었음");
},[]); // 의존성배열에 빈 값인채로 두면 마운트 시점에서만 실행

//2. 업데이트
useEffect(()=>{
  if(!isMount.current){
    isMount.current=true;
    return; 
  }
  console.log("업데이트 되었음");
}); 


//3. 언마운트

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
    <input value={input} onChange={(e)=>
      {setInput(e.target.value);}}/>
    </section> 
    <section>
   <Viewer count ={count}/> 
   {count %2 === 0? <Even />: null}
   </section>
   <section>
   <Controller onClickButton={onClickButton}/>
   </section>
   </div> 
  );
}

export default App;
