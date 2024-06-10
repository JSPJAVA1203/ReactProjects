import "./Editor.css"
import { useState, useRef } from "react";

const Editor = ({onCreate}) =>{
    const [content, setContent] = useState("");
    const [date, setDate] = useState("");
    const contentRef = useRef();
    const dateRef = useRef();

    const onChangeContent = (e) =>{
        setContent(e.target.value);
    };

    const onChangeDate = (e) => {
        setDate(e.target.value); 
    };

    const onKeyDown = (e) =>{
        if(e.keyCode === 13){
            onSubmit();
        }
    }

    const onSubmit = () => {
        if(content === ""){
          contentRef.current.focus();  
            return;
        }
        if(date === ""){
            dateRef.current.focus();
            return;
        }
        onCreate(content, date);
        setContent("");
        setDate("");
    };

    return (
    <div className="Editor">
        <input
        ref={contentRef}
        value={content}
        onKeyDown={onKeyDown}
        onChange={onChangeContent} placeholder="새로운 할일..."/>
        <input
        type="date"
        ref={dateRef} 
        value={date}
        onChange={onChangeDate}
        placeholder="날짜 선택"
        />
        <button onClick={onSubmit}>추가</button>
    </div>);
};

export default Editor;