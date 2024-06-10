function changeBg(color){
    let result = document.querySelector("#result");
    result.style.backgroundColor = color;
}
 /*
const number=document.getElementById("number");
const increase=document.getElementById("increase");
const decrease=document.getElementById("decrease");

increase.addEventListener('click', ()=> {
    number.innerText = Number(number.innerText) + 1
    console.log('increase가 클릭됨')
})
decrease.addEventListener('click', ()=> {
    number.innerText = Number(number.innerText) - 1
    console.log('decrease 클릭됨')
})

*/

const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
let num = Number(number.innerText);
const increaseNum = () => {
    console.log("increase가 클릭됨");
    num += 1;
    number.innerText = num;
}
const decreaseNum = () => {
    console.log("decrease가 클릭됨");
    num -= 1;
    number.innerText = num;
}
increase.addEventListener("click", increaseNum);
decrease.addEventListener("click", decreaseNum);
