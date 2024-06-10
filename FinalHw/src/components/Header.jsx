import "./Header.css";
import { memo } from "react";
import { useState, useEffect } from "react";

const Header = () =>{

    const date = new Date();
    const options = {year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    const DateToKr = new Intl.DateTimeFormat('ko-KR', options).format(date);

    // Intl.DateTimeFormat()은 여러 언어와 지역 형식을 지원하여 국제화(i18n)를 쉽게 구현할 수 있고, 기본으로 제공하는 라이브러리라 유지보수 용이
    // options는 연도:year, 월:month, 일:day, 요일:weekday, 시간:hour, 분:minute, 초:second, 시간대:timeZoneName (시간뒤에 붙는 GMT <-- 바로 요것)를 설정 가능

    // 현재 시간 (1초마다 갱신되게) 타이머 설정
    const [nowTime, setNowTime] = useState(new Date());

    useEffect(()=>{
        const effectTime = setInterval(()=>{
            setNowTime(new Date());
        }, 1000); // 1초마다 시간 업데이트

        return () => clearInterval(effectTime); // useEffect를 언마운트하여 정리시키는 정리 함수
    },[]); // 의존성 배열 (-> 타이머 useEffect가 처음 마운트될시에만 실행, 그 이후엔 실행되지 않게 함)

    // 매 렌더링 때마다 타이머가 중첩되게 실행되는 것을 방지하는 로직 적용 -> 메모리 누수 관리 & 유지보수 용이 

    const formattedTime = new Intl.DateTimeFormat('ko-KR', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
      }).format(nowTime);
    // const options로 객체를 선언한 것과는 다르게 이번엔 직접 풀어서 작성.


    return (
    <div className="Header">
        <h3>오늘은... 📃</h3>
        <h1>{DateToKr}</h1>
        <h2>현재시간: {formattedTime}</h2>  
    </div>);
};

//const memorizedHeader = memo(Header);

export default memo(Header);