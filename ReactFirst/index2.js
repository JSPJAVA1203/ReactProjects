const admin = "Admin";
const adPw = "pwd1234";

let insertProm = prompt("관리자 아이디를 입력하세요");

if (insertProm === admin){
    let insertPw = prompt("비밀번호를 입력하세요");
    if(insertPw === adPw){
        alert("환영합니다!");
    } else if (insertPw === ""|| insertPw === null || insertPw.length === 0) {
        alert("취소되었습니다.");
    } else {
        alert("인증에 실패하였습니다");
    }
} else if (insertProm === "" || insertProm === null || insertProm.length === 0){
    alert("취소되었습니다.");
} else {
    alert("인증에 실패하였습니다.");
}