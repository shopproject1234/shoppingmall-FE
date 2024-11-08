import "./MyInfo.css";
import InterestBox from "../common/InterestBox";
import Input from "../common/Input";
import { useState } from "react";

const MyInfo = () => {
  const [selectedInterests, setSelectedInterests] = useState([]); // 선택된 관심사들을 배열로 관리

  const [form, setForm] = useState({
    nickname: "",
  });

  return (
    <div className="MyInfoPage">
      <div className="MyInfo-interest">
        <div className="MyInfo-interest-name">이한주님의 관심사</div>
        <div className="MyInfo-interestBox">
          <InterestBox
            selectedInterests={selectedInterests}
            setSelectedInterests={setSelectedInterests}
          />
        </div>
      </div>
      <div className="MyInfo">
        <div className="MyInfo-title">회원 정보 변경</div>
        <div className="MyInfo-box">
          <div className="MyInfo-nickName">
            <Input
              form={form}
              setForm={setForm}
              label={"닉네임"}
              placeholder={"닉네임을 입력해 주세요."}
            />
          </div>
          <div className="MyInfo-password">
            <Input
              form={form}
              setForm={setForm}
              label={"비밀번호"}
              placeholder={"비밀번호를 입력해 주세요."}
            />
          </div>
          <div className="MyInfo-verifyPassword">
            <Input
              form={form}
              setForm={setForm}
              label={"비밀번호 확인"}
              placeholder={"다시 한번 비밀번호를 입력해 주세요."}
            />
          </div>
        </div>
        <div className="MyInfo-btn">
            <button>수정하기</button>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
