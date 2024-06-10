// input에 글자를 입력하고, 추가하기 버튼을 클릭시 listBox div 영역에 체크박스 - 입력값 - 제거하기 순으로 표시되게 한다
// 빈 값이 입력될경우 '텍스트를 입력하세요!'라는 경고창이 뜨게 하도록 한다 (유효성 검사)
// 추가하기 버튼 + 제거하기 버튼에 대한 클릭 이벤트를 생성시킨다.

document.addEventListener('DOMContentLoaded', function() { // DOMContentLoaded -> 웹 브라우저가 문서 객체를 모두 읽고 나서 실행하는 이벤트
    // input에 입력받은 값에 대한 변수 선언
    const textList = document.getElementById("todolist");
    // 추가하기 버튼 클릭에 대한 변수 선언
    const addButton = document.getElementById("add");
    // 할 일 목록이 나올 div 영역에 대한 변수 선언
    const seeTodo = document.getElementById("listBox");
    // 입력값들을 저장할 Map 선언 -> 중복 체크 목적
    const inputMap = new Map();
    addButton.addEventListener('click', ()=> { // 추가하기 버튼을 누르면 실행될 이벤트 함수
        // input칸에 적힌 입력값 가져오기
        const textVal = textList.value.trim(); // 앞뒤 공백을 제거하는 로직 -> 중복 체크를 확실히 하기 위한 로직
        if(inputMap.has(textVal)){ // 중복된 값을 입력하고 추가하기를 누를경우 -> Map안에서 입력한 값과 중복된 요소를 확인하는 has 메서드
            alert("입력하신 할 일은 이미 리스트에 존재합니다!");
        } 
        else {
        if(textVal !== null && textVal !== ""){ // 공백 문자 입력까지 막는 조건식 (아예 시각적으로 공란인 것을 차단하는 조건)
            inputMap.set(textVal,"여기는 value 자리"); // inputMap에 입력값 넣기 (key, value) 
            console.log(inputMap.keys()); // inputMap 값 로그로 몰아보기 편하게

            // 체크박스 - 입력값 - 제거하기 버튼을 감쌀 영역 생성 (seeToDo의 하위 div 영역)
            const newItem = document.createElement("div");
            newItem.classList.add("todoItem");

            // 체크박스 생성
            const checkBox = document.createElement("input");
            checkBox.setAttribute("type","checkbox");

            // 입력값 생성
            const textSpan = document.createElement("span"); // span 태그를 생성하여 텍스트를 표시
            textSpan.textContent = textVal; // 텍스트 내용 설정


            // 제거하기 버튼 생성
            const delButton = document.createElement("button");
            delButton.textContent = "제거하기";
            delButton.classList.add("delete");

            // appendChild로 부모 노드(newItem) 에 각각의 자식 노드 (체크박스, 입력값, 제거버튼) 추가
            newItem.appendChild(checkBox);
            newItem.appendChild(textSpan);
            newItem.appendChild(delButton);

            // 그리고 listBox가 seeTodo를 감싸는 div영역이기에, seeTodo에 appendChild 또 해주기 
            seeTodo.appendChild(newItem);

            // 체크박스 클릭시 줄 그이게 하는 이벤트 추가
            checkBox.addEventListener('click', (event) => {
                // 체크박스의 부모 요소 -> 외부의 const newItem이다, 다만 const라 내부에서 따로 선언을 해준다.
                const parentDiv = event.target.parentElement;
                if (event.target.checked) { // 체크박스에 체크가 됬다면
                    const spanText = parentDiv.querySelector('span').textContent.trim(); // <span>태그 내 텍스트를 공백문자 까지 제거한 텍스트
                    parentDiv.querySelector('span').innerHTML = `<s>${spanText}</s>`;
                } else { // 체크박스에 체크가 안되어있다면
                    const spanText = parentDiv.querySelector('span').textContent.trim(); // <span>태그 내 텍스트를 공백문자 까지 제거한 텍스트
                    parentDiv.querySelector('span').innerHTML = spanText; // 원래의 디폴트 텍스트
                }
            });
        } else {
            // 공란인 상태에서 추가하기 버튼 막기
            alert('텍스트를 입력하세요!');
        }  
      }  
    });

    /* 해당 코드는 체크박스 부분에서 조금 비효율적이라 주석처리
    seeTodo.addEventListener('click', (event) => {
        if (event.target.classList.contains("delete")) { // 상단에 제거하기 버튼에 "delete" class를 추가한 이유
            const confirmDelete = confirm("진짜로 삭제하시겠어요?");
            if (confirmDelete) { // 선택창에서 "예"를 눌렀을 경우
                const todoItem = event.target.closest(".todoItem"); // 상단에 체크박스-입력값-제거버튼을 감싸는 div 영역에 "todoItem" class를 추가한 이유
                if (todoItem) {
                    const chBoxChecked = todoItem.querySelector("input[type='checkbox']");
                    if (chBoxChecked.checked) {
                        todoItem.remove();
                    } else {
                        alert("체크박스를 선택하세요!");
                    }   
                } else {
                    console.error("할 일 목록 요소를 찾을 수 없습니다.");
                }               
            }
            else {
                console.log("제거하기 취소됨");
            } 
        }
    });
    */

    seeTodo.addEventListener('click', (event) => { // event 객체를 파라미터로 받기
        if (event.target.classList.contains("delete")) { // 상단에 제거하기 버튼에 "delete" class를 추가한 이유
            const todoItem = event.target.closest(".todoItem"); // 상단에 체크박스-입력값-제거버튼을 감싸는 div 영역에 "todoItem" class를 추가한 이유
            // 해당 로직을 통해 "todoItem" class 요소를 찾는 것! 이 요소는 DOM 요소이다.
            //const todoItem = event.target.classList.contains("todoItem"); -> 이걸 쓰면 querySelector를 쓸 수가 없다, DOM 요소가 아닌 이벤트가 발생한 요소이기 때문!
            const chBoxChecked = todoItem.querySelector("input[type='checkbox']"); // 체크박스에 체크 여부를 판단하기 위한 로직 선언
            const itemText = todoItem.querySelector("span").textContent.trim(); // <span>태그에 감싸진 텍스트 추출 + 공백 및 따옴표 제거하는 메서드 
            console.log(itemText); // 제거하기 누를때 따옴표나 공백이 포함되서 나오는지 디버깅
            if(chBoxChecked.checked){ // 체크박스에 체크가 되어있는 경우
                const confirmDelete = confirm("진짜로 삭제하시겠어요?"); // 확인창 띄우기 (확인, 취소)
                if (confirmDelete) { // 선택창에서 "예"를 눌렀을 경우
                    if (todoItem) { // closest 메서드가 todoItem 요소를 찾았을 경우 -> true로 반환됨
                        inputMap.delete(itemText); // -> 삭제할 때 inputMap에서도 삭제를 해줘야하기 때문에, key와 동일한 값이어야 삭제가 완전히 되서
                        // 나중에 입력할 때 문제가 되지 않는다!
                        todoItem.remove(); // 해당 요소 제거
                    }
                    else { // closet 메서드가 todoItem 요소를 못찾았을 경우 -> null로 반환 -> JS에선 false로 처리됨
                        console.error("삭제할 일이 없을 경우 접근되는 로그");
                    }         
                   }
                 else { // 확인창에서 취소를 눌렀을 경우
                 console.log("제거하기 취소됨");
            } 
         }
         else{ // 체크박스에 체크를 하지 않은채 삭제를 누를경우
            alert("삭제하려면 체크박스에 체크해주십쇼~");
         }
    }
    });
});
