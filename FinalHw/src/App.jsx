import './App.css'
import { useState, useRef, useReducer } from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import Test from './components/test';

const date = new Date(); // 현재 날짜
const getDatetime = date.toISOString().split('T')[0]; // "yyyy-MM-dd" 형식으로 변환

// 여기서 Intl.DateTimeFormat을 사용하지 않은 이유는 시간을 표현할 수 있는 메서드를 각각 다른것으로 써보고 싶어서 사용
// + props에 date를 yyyy--MM--dd 형식으로 통일하고자 함
// ++ 할일을 추가할 때 input type="date"의 값이 yyyy-MM-dd 형식으로 들어가는 것 역시 고려


const testData = [{
  id:0,
  isDone: false,
  content: "React 공부하기",
  date: getDatetime,
},
{
  id:1,
  isDone: false,
  content: "밥먹기",
  date: getDatetime,
},
{
  id:2,
  isDone: false,
  content: "운동하기",
  date: getDatetime,
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
    case "EDIT":
      return state.map((item) =>
        item.id === action.data.id ? { ...item, content: action.data.content, date: action.data.date } : item
      );  
    default :
      return state;  
  }
}

function App(){
  //const [todos, setTodos] = useState(testData);
  const [todos, dispatch] = useReducer(reducer, testData);
  const idRef = useRef(3);

  const onCreate = (content, date) =>{
    
    // const newTodo = {
    //   id: idRef.current++,
    //   isDone: false,
    //   content: content,
    //   date: new Date().getTime(),
    // };

    // setTodos([newTodo,...todos]);
    dispatch({type: "CREATE", data: {
    id: idRef.current++,
    isDone: false,
    content: content,
    date: date,
    },
   });
  };

  const onUpdate = (targetID) => {
    // setTodos(todos.map((todo)=>{
    //   if(todo.id === targetID){
    //     return {...todo, isDone: !todo.isDone};
    //   }
    //   return todo;
    // }));
    dispatch({type: "UPDATE", targetID: targetID});
  }

  const onDelete = (targetID) => {
    // setTodos(todos.filter((todo)=>
    // todo.id !== targetID
    // ));
    dispatch({type: "DELETE", targetID: targetID});
  };

  const onEdit = (id, content, date) => {
    dispatch({ type: "EDIT", data: { id, content, date },
    });
  };

  return (<div className='App'>
    <Header />
    <Editor onCreate={onCreate}/>
    <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} onEdit={onEdit} />
    </div>);
}

export default App;