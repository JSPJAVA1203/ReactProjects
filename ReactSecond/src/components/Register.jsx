import { useState, useRef } from "react";


const Register = () => {
//    const  [name, setName] = useState("");
//    const [birth, setBirth] = useState("");
//    const [gender, setGender] = useState("");
//    const [bio, setBio] = useState("");

const [input, setInput] = useState({
    name: "",
    birth: "",
    gender: "",
    bio: "",
});

const countRef = useRef(0);
//console.log("WOW"); // 리렌더링이 되지 않음
const inputRef = useRef();
//    console.log(input);

  /*
    const onChangeName = (e) => {
       // console.log(e.target.value);
       // setName(e.target.value);
       setInput({...input, name: e.target.value});
    };
    const onChangeBirth = (e) => {
        // console.log(e.target.value);
        setInput({...input, birth: e.target.value});
     };
     const onChangeGender = (e) => {
        // console.log(e.target.value);
        setInput({...input, gender: e.target.value});
     };
     const onChangeBio = (e) => {
        // console.log(e.target.value);
        setInput({...input, bio: e.target.value});
     };
     */

     const onChange = (e) => {
        countRef.current++;
        console.log(countRef.current++);
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
     };

     const onSubmit = () => {
        if(input.name === ""){
          //  console.log(inputRef.current);
          inputRef.current.focus();
        }
     };


    return (
    <div>
        <div>
        <input 
        ref={inputRef}
        name="name" value={input.name} onChange={onChange} 
        placeholder={"이름"}/>
        </div>
        <div>
        <input name="birth" value={input.birth} onChange={onChange} 
        type="date" />
        </div>
        <div>
          <select name="gender" value={input.gender} onChange={onChange}>
            <option>---</option>
            <option>남자</option>
            <option>여자</option>
            <option>논바이너리</option>
            </select>  
        </div>
        <div>
           <textarea name="bio" value={input.bio} onChange={onChange}/> 
        </div>
        <button onClick={onSubmit}>제출</button>
    </div>    
    );
};

export default Register;