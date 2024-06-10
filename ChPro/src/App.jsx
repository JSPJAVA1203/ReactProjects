import './App.css'
import { useState, useRef, useReducer, useCallback, createContext } from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import Test from './components/test';

const testData = [{
  id:0,
  isDone: false,
  content: "React 공부하기",
  date: new Date().getTime(),
},
{
  id:1,
  isDone: false,
  content: "밥먹기",
  date: new Date().getTime(),
},
{
  id:2,
  isDone: false,
  content: "운동하기",
  date: new Date().getTime(),
}];

function reducer(state, action) {
  switch(action.type){
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item)=> item.id === action.targetID? {...item, isDone: !item.isDone}
    : item);
    case "DELETE":
      return state.filter((item)=> item.id !== action.targetID);
    default :
      return state;  
  }
}

export const TodoContext = createContext();


function App(){
  //const [todos, setTodos] = useState(testData);
  const [todos, dispatch] = useReducer(reducer, testData);
  const idRef = useRef(3);

  // const onCreate = (content) =>{
    
  //   // const newTodo = {
  //   //   id: idRef.current++,
  //   //   isDone: false,
  //   //   content: content,
  //   //   date: new Date().getTime(),
  //   // };

  //   // setTodos([newTodo,...todos]);
  //   dispatch({type: "CREATE", data: {
  //   id: idRef.current++,
  //   isDone: false,
  //   content: content,
  //   date: new Date().getTime(),
  //   },
  //  });
  // };

  const onCreate = useCallback((content)=>{
    dispatch({type: "CREATE", data: {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    },
  }); 
  },[]);

  //const onUpdate = (targetID) => {
    // setTodos(todos.map((todo)=>{
    //   if(todo.id === targetID){
    //     return {...todo, isDone: !todo.isDone};
    //   }
    //   return todo;
    // }));
  //  dispatch({type: "UPDATE", targetID: targetID});
  //}

  const onUpdate = useCallback((targetID)=>{
    dispatch({type: "UPDATE", targetID: targetID});
  },[])

 // const onDelete = (targetID) => {
    // setTodos(todos.filter((todo)=>
    // todo.id !== targetID
    // ));
 //   dispatch({type: "DELETE", targetID: targetID});
 // };

  //const func = useCallback(()=>{}, [])

  const onDelete = useCallback((targetID)=>{
    dispatch({type : "DELETE", targetID: targetID});
  }, []);

  return (<div className='App'>
    <Header />
    <TodoContext.Provider value={{todos, onCreate, onDelete, onUpdate}}>
    <Editor />
    <List />
    </TodoContext.Provider>
   </div>);
}

export default App;