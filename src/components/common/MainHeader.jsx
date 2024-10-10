import "./MainHeader.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';

const MainHeader = () => {
    const userInfo = useSelector((state) => state.user.userInfo);

    const nav = useNavigate();

    return (
        <>
            <div className="MainHeader">
                <div className="logo" onClick={() => {nav("/")}}>
                    Shopping Mall
                </div>
                {userInfo?.userId === '' ? (
                    <>
                        <div onClick={()=>nav("/Login")} className="login-btn">로그인</div>
                        <div onClick={()=>nav("/Register")} className="register-btn">회원가입</div>
                    </>
                ) : (
                    <>
                        <div>반갑습니다 {userInfo.nickname}님</div>
                    </>
                )}
               
            </div>
            <div className="menu">
                <div className="mypage">
                    <FontAwesomeIcon onClick={()=>nav("/MyPage")} className="icon" icon={faUser} />
                </div>
                <div className="cart">
                    <FontAwesomeIcon onClick={()=>nav("/ItemCart")} className="icon" icon={faCartShopping} />
                </div>
            </div>
        </>
        
        
    )
}

export default MainHeader;