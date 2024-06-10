import "./TodoItem.css";
import { useState } from "react";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete, onEdit }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [editContent, setEditContent] = useState(content);
    const [editDate, setEditDate] = useState(date);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric', weekday: 'short' };
        const date = new Date(dateString);
        return date.toLocaleDateString('ko-KR', options);
    };

    const onChangeCheckBox = () => {
        onUpdate(id);
    };

    const onClickDeleteButton = () => {
        onDelete(id);
    };

    const onClickEditButton = () => {
        setIsEditing(true);
    };

    const onClickSaveButton = () => {
        onEdit(id, editContent, editDate);
        setIsEditing(false);
    };

    const onClickCancelButton = () => {
        setIsEditing(false);
        setEditContent(content);
        setEditDate(date);
    };

    return (
        <div className="TodoItem">
            <input onChange={onChangeCheckBox} checked={isDone} type="checkbox" />
            {isEditing ? (
                <>
                    <input 
                        type="text" 
                        value={editContent} 
                        onChange={(e) => setEditContent(e.target.value)} 
                    />
                    <input 
                        type="date" 
                        value={editDate} 
                        onChange={(e) => setEditDate(e.target.value)} 
                    />
                    <button onClick={onClickSaveButton}>저장</button>
                    <button onClick={onClickCancelButton}>취소</button>
                </>
            ) : (
                <>
                    <div className="content">{content}</div>
                    <div className="date">{formatDate(date)}</div>
                    <button onClick={onClickEditButton}>수정</button>
                    <button onClick={onClickDeleteButton}>삭제</button>
                </>
            )}
        </div>
    );
};

export default TodoItem;
