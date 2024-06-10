import { useEffect } from "react";

const Even = () => {
    useEffect(()=>{
        console.log("이븐 컴포넌트 마운트");

        const intervalID = setInterval(()=>{
            console.log("깜빡");
        },1000);
        return () => {
            console.log("이븐 컴포넌트 언마운트");
            clearInterval(intervalID);
        };
    }, []);
    return <div>짝수입니다!!</div>;
};

export default Even;