import "./TodoItem.css"
import { memo, useContext } from "react";
import { TodoContext } from "../App";

const TodoItem = ({id, isDone, content, date}) =>{
   const {onUpdate, onDelete} = useContext(TodoContext); 

   const onChangeCheckBox = () => {
    onUpdate(id);
   };

   const onClickDeleteButton = () => {
    onDelete(id);
   }

   return (
   <div className="TodoItem">
    <input onChange={onChangeCheckBox} checked={isDone} type="checkbox" />
    <div className="content">{content}</div>
    <div className="date">{date}</div>
    <button onClick={onClickDeleteButton}>삭제</button>
    </div>
    );
};

// export default memo(TodoItem, (preProps, nextProps)=>{
//     if(preProps.id !== nextProps.id)  return false;
//     if(preProps.isDone !== nextProps.isDone) return false;
//     if(preProps.content !== nextProps.content) return false;
//     if(preProps.date !== nextProps.date) return false;

//     return true;
// });

export default memo(TodoItem);