import { useNavigate } from "react-router-dom";
import Header from "../components/common/Header";
import Input from "../components/common/Input";
import "./LogIn.css";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin } from "../service/api";
import { login } from '../redux/user';


const LogIn = () => {
    const dispatch = useDispatch();
    const nav = useNavigate();

    const [form, setForm] = useState({
        useId: "",
        password: "",
    });

    async function doLogin () {
        const response = await fetchLogin(form);
        dispatch(login(response));
        console.log(response);
    }

    return (
        <>
            <Header />
            <div className="Login">
                <div className="login-box">
                    <div className="login-image">
                        <img src={"/shoppingmall.png"} />
                    </div>
                    <div className="login-title">
                        로그인
                    </div>
                    <div className="login login-id">
                        <Input form={form} setForm={setForm} name={"userId"} type="text" label={"아이디"} placeholder={"아이디를 입력하세요."} />
                    </div>
                    <div className="login login-password">
                        <Input form={form} setForm={setForm} name={"password"} type="password" label={"비밀번호"} placeholder={"비밀번호를 입력하세요."} />
                    </div>
                    <div className="button-login">
                        <button onClick={() => doLogin()}>로그인</button>
                    </div>
                    <div className="button-register">
                        <button onClick={()=>{nav("/Register")}}>회원가입</button>
                    </div>
                </div>
            </div>
        </>
        
        
    )
}

export default LogIn;