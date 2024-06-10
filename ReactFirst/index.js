let myName = "정윤구";
let address = "서울시 동작구 흑석동";

let introduce = `${myName}는 ${address}에 살고 있습니다`;

console.log(introduce);
//console.log("제 이름은 "+myName+"이고, 주소는 "+address+"입니다");

//3. Boolean Type
let isEmpty = false;
let isOver = true;

// 4. Null Type
let empty = null;
console.log(empty);

//5. Undefined Type
let none;
console.log(none);

let num = 10;
console.log(num++);
console.log(num);
num += 1;
console.log(num);
console.log(++num);
num++;
console.log(num);

// 미션 1 이름 받아서 화면에 출력하기
// 1) 사용자 이름 입력받기
// 2) 이름을 웹 브라우저 화면에 표시
// 3) 콘솔창에도 표시하기

/*
let yourName = prompt("이름을 입력하세요");
document.write(yourName);
console.log(yourName);
*/

// 미션 2 : 두 수를 입력받아 +,-,*,/,% 결과 출력하기

/*
let firstNum = prompt("첫번째 숫자를 입력하세요");
let secondNum = prompt("두번째 숫자를 입력하세요");

firstNum = parseInt(firstNum);
secondNum = parseInt(secondNum);

let plusNum = firstNum+secondNum;
let minusNum = firstNum-secondNum;
let multyNum = firstNum*secondNum;
let divideNum = firstNum/secondNum;
let perNum = firstNum%secondNum;

document.write(plusNum + "<br>");
document.write(minusNum + "<br>");
document.write(multyNum + "<br>");
document.write(divideNum + "<br>");
document.write(perNum+ "<br>");

console.log(plusNum);
console.log(minusNum);
console.log(multyNum);
console.log(divideNum);
console.log(perNum);
*/

/*
alert(1 && 0);
alert(1 && 5);
alert(1 && 2 && null && 3);
alert(1 && 2 && 3);
alert(null && 5);
alert(0 && "아무거나 와도 상관없습니다");
*/

// 미션 3 입력된 숫자가 3의 배수인지 판단하기

/*
let writeNum = Number(prompt("숫자를 입력하세요."));

if(writeNum%3 === 0){
    console.log("3의 배수입니다.")
} 
else if(writeNum%3 !==0){
    console.log("3의 배수가 아닙니다")
}
else if(!writeNum){
    alert("취소 버튼을 누르셨습니다")
};
*/

const number = prompt("숫자를 입력해주세요.")
if(number === null){
    alert("취소를 눌렀습니다.")
}else{
   let inputNumber = Number(number);
  (inputNumbers % 3 === 0) ? alert("3의 배수입니다") : alert("3의 배수가 아닙니다");
}

// if(number % 3 === 0){
   //     alert("3의 배수입니다.")
   // }else{
   //     alert("3의 배수가 아닙니다.")
   // }