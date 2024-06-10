import { useState } from "react";


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

    console.log(input);

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
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
     };

    return (
    <div>
        <div>
        <input name="name" value={input.name} onChange={onChange} 
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
    </div>    
    );
};

export default Register;