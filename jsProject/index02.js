/*
switch (조건) {
    case 1 : console.log('1')
    break;
    default :
}
*/

/*
let num = Number(prompt("숫자를 입력하세요"));

switch (num%2) {
    case 0 : console.log('짝수입니다')
    break;
    case 1 : console.log('홀수입니다')
    break;
    default : console.log('제대로 된 값을 입력하세요')
}
*/

// 태어난 연도를 입력받고 연도에 따라 띠를 출력해준다 + switch 사용

/*
const birthYear = Number(prompt("태어난 년도를 입력하세요."));

 switch (birthYear%12){
    case 0 : console.log("원숭이띠 입니다.")
    break;
    case 1 : console.log("닭띠 입니다.")
    break;
    case 2 : console.log("개띠 입니다.");
    break;
    case 3 : console.log("돼지띠 입니다.");
    break;
    case 4 : console.log("쥐띠 입니다.");
    break;
    case 5 : console.log("소띠 입니다.");
    break;
    case 6 : console.log("호랑이띠 입니다.");
    break;
    case 7 : console.log("토끼띠 입니다.");
    break;
    case 8 : console.log("용띠 입니다.");
    break;
    case 9 : console.log("뱀띠 입니다.");
    break;
    case 10 : console.log("말띠 입니다.");
    break;
    case 11 : console.log("양띠 입니다.");
    break;
    default : console.log("제대로 된 값을 입력하세요.");
 }
*/

/*
let sum=0;
for (let i=0;i<=1000;i++){
    sum+=i;
}
console.log(sum);
*/

/*
let star = "";
let starFloor = 1;

while(true){
    star+="*";
    starFloor++;

    if(starFloor === 10){
        break;
    }
    console.log(star);
}
*/

/*
let star = ""

for(let i = 1 ; i < 10 ; i++){

    for(let j = 10 ; j > i ; j--){

        star += "*"

    }

    star += "\n"

}

console.log(star)

let star = ""

for(let i = 1 ; i < 15 ; i++){

    for(let j = 15 ; j > i ; j--){

        star += " "

    }

    for(let j = 0 ; j < i ; j++){

        star += "*"

    }

    for(let j = 1 ; j < i ; j++){

        star += "*"

    }

    star += "\n"

}

console.log(star)
*/

/*
const fruitData = ["참외", "사과", "수박", "귤", "배"];
console.log(fruitData[fruitData.length-1]);
fruitData.push("포도");
console.log(fruitData);

const a = fruitData.indexOf("귤"); // 원하는 요소의 index값 가져오기
fruitData.splice(a,1); // 배열에서 값 제거하기 (뒤의 숫자는 거기서 부터 하나를 없앤다는 의미)
fruitData.splice(2, 0, "애플망고"); // splice 메서드 꼭 복습하기
console.log(fruitData);

for(let i=0;i<fruitData.length;i++){
    console.log(fruitData[i]);
}
*/

/*
const yearData = ["원숭이","닭","개","돼지","쥐","소","호랑이","토끼","용","뱀","말","양"];

let bYear = Number(prompt("태어난 연도를 입력하세요."));

let resultNum = bYear%12;
console.log(bYear+"년도에 태어나셨고,"+yearData[resultNum]+"띠 이십니다");
*/

/*
function showMessage(from, text){ // 누가 어떤 메시지를 보냈는지의 파라미터
    console.log(from + " : " + text);
}

showMessage('chris','Hello');
showMessage('john','Hi');
*/

/*
function sum(a,b){
    return a+b;
}

let sumNum;
sumNum = sum(3,4);
console.log(sumNum);
*/

// 더하기, 빼기, 곱하기, 나누기, 나머지 함수 만들기
/*
function addNumber(a,b){
    return a+b;
}

function minusNumber(a,b){
    return a-b;
}

function multyNumber(a,b){
    return a*b;
}

function divideNumber(a,b){
    return a/b;
}

function remainderNum(a,b){
    return a%b;
}

let firNum = Number(prompt("첫번째 숫자를 입력하세요"));
let secNum = Number(prompt("두번째 숫자를 입력하세요"));

console.log("두 수의 합은 "+addNumber(firNum,secNum)+"입니다.");
console.log("두 수를 뺀 값은 "+minusNumber(firNum,secNum)+"입니다.");
console.log("두 수의 곱은 "+multyNumber(firNum,secNum)+"입니다.");
console.log("두 수를 나눈 몫은 "+divideNumber(firNum,secNum)+"입니다.");
console.log("두 수를 나눈 나머지는 "+remainderNum(firNum,secNum)+"입니다.");
*/

// 윤년을 확인하는 함수 만들기

// 4로 나누어 떨어지는 해가 윤년
// 그러나 100으로 나누어 떨어지는 해는 윤년이 아님
// 근데도 400으로 나누어 떨어지는 해는 윤년임

/*
function isLeapYear(promYear){
    if(promYear%4 === 0 && promYear%100 !==0 || promYear%400 === 0){
        return true;
    } else {
        return false;  
    }
         
}

console.log(`2022년은 윤년일까? === ${isLeapYear(2022)}`);
console.log(`2010년은 윤년일까? === ${isLeapYear(2010)}`);
console.log(`2000년은 윤년일까? === ${isLeapYear(2000)}`);
console.log(`1900년은 윤년일까? === ${isLeapYear(1900)}`);
*/

let addNumber = (a,b) => a+b;

let minusNumber = (a,b) => a-b;
    
let multyNumber = (a,b) => a*b;

let divideNumber = (a,b) => a/b;

let remainderNum = (a,b) => a%b;


let firNum = Number(prompt("첫번째 숫자를 입력하세요"));
let secNum = Number(prompt("두번째 숫자를 입력하세요"));

console.log("두 수의 합은 "+addNumber(firNum,secNum)+"입니다.");
console.log("두 수를 뺀 값은 "+minusNumber(firNum,secNum)+"입니다.");
console.log("두 수의 곱은 "+multyNumber(firNum,secNum)+"입니다.");
console.log("두 수를 나눈 몫은 "+divideNumber(firNum,secNum)+"입니다.");
console.log("두 수를 나눈 나머지는 "+remainderNum(firNum,secNum)+"입니다.");