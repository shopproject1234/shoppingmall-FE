import "./Register.css";
import Header from "../components/common/Header";
import Input from "../components/common/Input";
import { useNavigate } from "react-router-dom";
import InterestBox from "../components/common/InterestBox";
import CertifyInput from "../components/common/CertifyInput";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const nav = useNavigate();

  const [selectedInterests, setSelectedInterests] = useState([]); // 선택된 관심사들을 배열로 관리

  const handleGenderChange=(e)=>{
    setForm({
      ...form,
      ["gender"]: e.target.value,
  });
  }

  const [form, setForm] = useState({
    password: "",
    verifyPassword: "",
    nickname: "",
    phoneNumber: "",
    email: "",
    certifyEmailCode: "",
    date: "",
    gender: "",
  });

  async function fetchEmailAuth() {
    console.log("fetchEmailAuth");
    try {
      //응답 성공
      const response = await axios.post(
        "http://3.35.4.8:8080/user/email/auth",
        {
          //보내고자 하는 데이터
          email: form["email"],
        }
      );
      console.log(response);
    } catch (error) {
      //응답 실패
      console.error(error);
    }
  }

  async function fetchEmailVerify() {
    try {
      //응답 성공
      const response = await axios.post(
        "http://3.35.4.8:8080/user/email/verify",
        {
          //보내고자 하는 데이터
          email: form["email"],
          code: form["certifyEmailCode"],
        }
      );
      console.log(response);
    } catch (error) {
      //응답 실패
      console.error(error);
    }
  }

  async function fetchRegister() {
    try {
      //응답 성공
      const response = await axios.post("http://3.35.4.8:8080/user/register", {
        //보내고자 하는 데이터
        password: form["password"],
        nickname: form["nickname"],
        phoneNumber: form["phoneNumber"],
        email: form["email"],
        birth: form["date"],
        gender: form["userSex"],
        category: selectedInterests
      });
      console.log(response);
    } catch (error) {
      //응답 실패
      console.error(error);
    }
  }

  return (
    <>
      <Header />
      <div className="Register">
        <div className="Register-image">
          <img src={"/shoppingmall.png"} />
        </div>
        <div className="Register-title">회원가입</div>
        <div className="Input-style">
          <Input
            form={form}
            setForm={setForm}
            name={"nickname"}
            label={"닉네임"}
            placeholder={"닉네임을 입력하세요."}
          />
          <CertifyInput
            form={form}
            setForm={setForm}
            name={"email"}
            label={"이메일"}
            placeholder={"이메일을 입력하세요."}
            buttonName={"인증 전송"}
            onClickFunc={fetchEmailAuth}
          />
          <CertifyInput
            form={form}
            setForm={setForm}
            name={"certifyEmailCode"}
            label={"인증번호"}
            placeholder={"인증번호를 입력하세요."}
            buttonName={"인증 확인"}
            onClickFunc={fetchEmailVerify}
          />
          <Input
            form={form}
            setForm={setForm}
            name={"password"}
            type="password"
            label={"비밀번호"}
            placeholder={"비밀번호를 입력하세요."}
          />
          <Input
            form={form}
            setForm={setForm}
            name={"verifyPassword"}
            type="password"
            label={"비밀번호 확인"}
            placeholder={"다시 한번 비밀번호를 입력하세요."}
          />
          <Input
            form={form}
            setForm={setForm}
            name={"phoneNumber"}
            label={"전화번호"}
            placeholder={"전화번호를 입력하세요."}
          />
          <Input
            form={form}
            setForm={setForm}
            name={"date"}
            type="date"
            label={"생년월일"}
          />

          <label htmlFor="userSex" className="form-label">
            성별
          </label>
          <div className="gender">
            <div className="form_radio_btn radio_female">
              <input onChange={handleGenderChange} id="radio-1" type="radio" name="userSex" value="female" />
              <label htmlFor="radio-1">여성</label>
            </div>

            <div className="form_radio_btn">
              <input onChange={handleGenderChange} id="radio-2" type="radio" name="userSex" value="male" />
              <label htmlFor="radio-2">남성</label>
            </div>
          </div>
        </div>

        <div className="line"></div>

        <div className="interest">
          <h3>관심사</h3>
          <span>회원님의 관심사를 선택해 주세요! (필수)</span>
          <InterestBox selectedInterests={selectedInterests} setSelectedInterests={setSelectedInterests} setForm={setForm} name={"catecory"} />
        </div>

        <div className="btn">
          <button
            onClick={() => {
              nav(-1);
            }}
          >
            뒤로가기
          </button>
          <button onClick={() => fetchRegister()}>가입하기</button>
        </div>
      </div>
    </>
  );
};

export default Register;