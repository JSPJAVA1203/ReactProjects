//let arr = [1,2,3];

/*
let one = arr[0];
let two = arr[1];
let three = arr[2];
*/

//let [one, two, three, four] = arr;

//console.log(one, two, three, four);

/*
let obj = {name:"정윤구", age:29, job:"개발자"};
let {name, age, job, hobby="축구"} = obj;

console.log(name, age, job, hobby); // name -> @deprecated 뭐냐;;
*/

/*
let arr = {a:1, b:2};

function print(obj){
   console.log(obj.a);
   console.log(obj.b);
}

print(arr);
*/

/*

let {a, b} = arr;
function print(a, b){
   console.log(a);
   console.log(b);
}

print(a,b);
*/

/*

function print({a, b}){
   console.log(a);
   console.log(b);
}

print(arr);
*/

// print({a,b} = arr);

/*
const person = {
    name : "정윤구"
};

const person2 = {
    //name: "정윤구",
    ...person,
    hobby : "축구",
};

const person3 = {
    //name: "정윤구",
    //hobby: "축구",
    ...person2,
    age: 29,
};

console.log(person);
console.log(person2);
console.log(person3);

let arr1= [1,2,3];
let arr2 = [4, ...arr1, 5,6];

console.log(arr2);

const numbers = [0,1,2,3,4,5,6];


const [one, ...rest] = numbers;
// 바꿔서 쓸경우 ...rest는 무조건 마지막 요소가 되어야한다는 에러가 뜬다.
console.log(one);
console.log(rest);
*/
function sum(...rest){ // 어떤식으로 아규먼트가 넘어가서 파라미터를 받았을 때 어떻게 받아지는지 먼저 디버깅 해보기!
    //let result=0;
    //for(let i=0; i<rest.length;i++){
    //    result += rest[i];
    //}
    //return result;
    return rest.reduce((acc, current) => acc + current, 0);
}

// result=sum(1,2);
// result sum(1,2,3);
const numbers2 = [1,2,3,4,5,6];
const result = sum(...numbers2);

console.log(result);

/*
function work(){

    setTimeout(()=>{
    const start = Date.now();
    for(let i=0; i<1000000; i++) {}
    const end = Date.now();
    console.log(end - start + "ms");
    callback();
    }, 0)
    
}

console.log("작업 시작");
work(() => {
    console.log("work 작업 끝!");
});
console.log("작업 끝");
*/

/*
function work(n, callback) {
    setTimeout(() => {
        const num= n+1;
        console.log(num);
        callback(num);
    }, 1000);
}

console.log("작업 시작");
work(0, (n) => {
    work(n, (n)=>{})
});
console.log("다음 작업");
*/

const myPromise=()=>// promise => 콜백함수를 인자로 받음
    new Promise((resolve, reject)=>{
        // 성공 - resolve // 실패 - reject
    //let a=5;
    //if(a===2){
    //    resolve("success")
    //} else{
    //    reject("failed");
    //}
    setTimeout(()=>{
        reject(1);
    }, 3000);    
    }); 
    


myPromise().then((message) => {
    console.log("This is in the then "+message);
})

.catch((message) => {
    console.log("This is in the catch "+message);
});

function work2(n){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const value = n+1;
            if(value > 5) {
                const error = new Error();
                error.name="ValueIsFiveOver";
                reject(error);
                return;
            }
            console.log(value);
            resolve(value);
        }, 1000);
    });
}

work2(0).then((n)=>{
    return work2(n);    
})
.then((n)=>{
    return work2(n);
})
.then((n)=>{
    return work2(n);
})
.then((n)=>{
    return work2(n);
})
.catch((e)=>{
    console.error(e);
});

/*
const myPromise = (n) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const num = n+1
            if(num>5){
                reject("error")
            }else{
                console.log(num)
                resolve(num)
            }
        }, 1000)
    }).then((num)=>myPromise(num))
    .catch((message)=>console.log(message))
}
*/

function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/*
async function process(){
    console.log("안녕하세요.");
    await sleep(1000);
    console.log("반갑습니다.");
}
process();
*/

const Dog = async () => {
    await sleep(1000);
    return '멍멍';
}

const Rabbit = async () => {
    await sleep(500);
    return '깡총';
}

const Turtle = async () => {
    await sleep(3000);
    return '엉금';
}

async function process(){
   // const dog = await Dog();
   // console.log(dog);
   // const rabbit = await Rabbit();
   // console.log(rabbit);
   // const turtle = await Turtle();
   // console.log(turtle);
   const result = await Promise.all([Dog(), Rabbit(), Turtle()]);
   console.log(result);
}
process();