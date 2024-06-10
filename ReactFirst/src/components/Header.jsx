function Header(){
    const user = {
        name : "Jeong",
        isLogin : false,
    };
    return <div>
        {user.isLogin ?
        <div>로그아웃</div> :
        <div>로그인</div>}
    </div>;

    // if (user.isLogin) {
    //    return <div>로그아웃</div>;
    //    } else {
    //        return <div style={{ backgroundColor: "red"}}>로그인</div>;
    //    }
    // }
  }

  // const Header = () => {
  //  
  //} 식도 가능
  
export default Header;  