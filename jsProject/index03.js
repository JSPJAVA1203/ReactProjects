function main(value){ // value라는 이름으로 인자를 받는다
    console.log('main start');
    value();
    console.log('main end');
}

//function sub(){
//    console.log('sub');
//}

//main(function (){
//    console.log('sub');
//});

//main( ()=> {
//   console.log('sub');
//})

/*
function show(count, callback) {
    for (let i=1;i<=count;i++){
        callback(i);
    }
}
*/

//function showDouble(count) {
//    for (let i=1;i<=count;i++){
//        console.log(i*2);
//    }
//}

//function showTriple(count) {
//    for (let i=1;i<=count;i++){
//        console.log(i*3);
//    }
//}

/*
show(5, (i)=>{console.log(i)});
show(5, (i)=>{console.log(i*2)}); // 2배
show(5, ()=>{console.log(i*3)}); // 3배
*/

//showDouble(5);
//showTriple(5);

let my = {
    name: "정윤구",
    age: 29,
    hobby : "축구",
}; // 객체 리터럴

console.log(my.name);
console.log(my["hobby"]);

delete my.hobby;
console.log(my);
//let my1 = new Object();  객체 생성자

let mySchedule = {};

function isEmpty(object){
    for(let key in object){
       return false;
    }
    return true;
    
}



console.log(isEmpty(mySchedule));
// 객체가 비어있니? isEmpty() // true
mySchedule["9:00"] = "react";
console.log(isEmpty(mySchedule));

let salary = {
    선미: 100,
    희원: 150,
    지민: 200,
}

//월급의 총합을 출력

function totalSum(arr) {

    let sum = 0;
  
    for (let key in arr) {
  
      sum += arr[key];
  
    }
  
    console.log(sum, "총 합");
  
  }
  
  totalSum(salary);

/*

  const fruit = ['사과','바나나','망고','딸기'];

  for(let i=0;i<fruit.length;i++){
    console.log(fruit[i])
  };

  fruit.forEach((fru)=>{ // fru로 arg 던져주기
    console.log(fru);
  });

  */

  /*
  const array = [1,2,3,4,5,6,7,8];
  const squared = [];
  // 모든 요소들을 제곱해서 새로운 배열 만들기 구현
  array.forEach((arr)=>{
    let squaredNum = arr*arr;
    squared.push(squaredNum);
  })

  console.log(array.map((n)=> n * n));
  map에서는 {} 사용안함

  console.log(squared);
  */

  let arr = [
    {name: "chris", job: "개발자"},
    {name: "john", job: "강사"},
    {name: "merry", job: "교수"},
  ];

  arr.forEach((obj) => {
    if(obj.job==="교수"){
        console.log(obj.name)
    }
});

const proPeople = arr.filter((item) => {
    if(item.job === "교수") return true;
});