// input에 글자를 입력하고, 추가하기 버튼을 클릭시 listBox div 영역에 체크박스 - 입력값 - 제거하기 순으로 표시되게 한다
// 빈 값이 입력될경우 '텍스트를 입력하세요!'라는 경고창이 뜨게 하도록 한다 (유효성 검사)
// 추가하기 버튼 + 제거하기 버튼에 대한 클릭 이벤트를 생성시킨다.

document.addEventListener('DOMContentLoaded', function() { // 웹 브라우저가 문서 객체를 모두 읽고 나서 실행하는 이벤트
    // input에 입력받은 값에 대한 변수 선언
const textList = document.getElementById("todolist");
// 추가하기 버튼 클릭에 대한 변수 선언
const addButton = document.getElementById("add");
// 제거하기 버튼 클릭에 대한 변수 선언
// 할 일 목록이 나올 div 영역에 대한 변수 선언
const seeTodo = document.getElementById("listBox");

// 체크박스 요소 생성 ==> <input type="checkbox"> 처럼 되게! -> 메인 화면은 공란과 추가하기만 나와야 하기 때문에, 여기서 만들어만 두기
const checkBox = document.createElement("input");
checkBox.setAttribute("type","checkbox");

// 제거하기 요소 생성 ==> <button id="delete">제거하기/<button> 처럼 되게! -> 메인 화면은 공란과 추가하기만 나와야 하기 때문에, 여기서 만들어만 두기
const delButton = document.createElement("button");
delButton.setAttribute("id", "delete");
delButton.textContent = "제거하기";

// 추가하기 버튼 이벤트 생성
addButton.addEventListener('click', ()=> {
    // text의 값 받아오는 코드 작성
    const textVal = textList.value;
    if(textVal !== null && textVal !== ""){
        // [체크박스 + 입력값 + 제거하기 버튼]을 감쌀 영역 생성
        //const listContainer = document.createElement("div");
         /*
        listContainer.innerHTML= `
        <input type="checkbox">
        ${textVal}
        <button class="delete">제거하기</button>`;
        seeTodo.appendChild(listContainer);
        innerHTML은 가급적 쓰지 않기
        */
        const newItem = document.createElement("div");
        newItem.classList.add("todoItem"); // 선택사항: 추가된 요소에 클래스 지정

        // 기존에 선언된 체크박스 요소 복제
        const newCheckBox = checkBox.cloneNode(true);

        // 텍스트 요소 생성
        const textNode = document.createTextNode(textVal);

        // 기존에 선언된 제거하기 버튼 요소 복제
        const newDelButton = delButton.cloneNode(true);

        // 각 요소를 새로운 div 영역에 추가
        newItem.appendChild(newCheckBox);
        newItem.appendChild(textNode);
        newItem.appendChild(newDelButton);

        // seeTodo에 새로운 div 영역 추가
        seeTodo.appendChild(newItem);

        newDelButton.addEventListener('click', () => {
            const confirmDelete = confirm("진짜로 삭제하시겠어요?");
            if (confirmDelete) {
                const todoItem = newDelButton.closest(".todoItem");
                if (todoItem) {
                    const checkBox = todoItem.querySelector("input[type='checkbox']");
                    if (checkBox && checkBox.checked) {
                        todoItem.remove();
                    } else {
                        alert("체크박스를 선택하세요!");
                    }
                } else {
                    console.error("할 일 목록 요소를 찾을 수 없습니다.");
                }
            }
        });
        console.log('추가하기 디버깅 접근 완료')
    } else {
        alert('텍스트를 입력하세요!');
    }   
 });

/* 이 체크박스 이벤트는 제거하기 버튼 클릭 내에서 선언하는게 더 나을듯 하다...
checkBox.addEventListener('click', ()=> {
    if(checkBox.checked === true){
        console.log('클릭됨');
    } else {
        console.log('클릭되지 않음');
    }   
});
*/


});
