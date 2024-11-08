import "./MyPage.css";
import MyUpload from "../components/MyPage/MyUpload";
import MainHeader from "../components/common/MainHeader";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import TabButton from "../components/MyPage/TabButton";
import MyPay from "../components/MyPage/MyPay";
import MyReview from "../components/MyPage/MyReview";
import MyInfo from "../components/MyPage/MyInfo";

const MyPage = () => {

    const TabData = [
        { id: 1, button: "내가 올린 상품", content: <MyUpload /> },
        { id: 2, button: "구매 내역", content: <MyPay /> },
        { id: 3, button: "내가 쓴 리뷰", content: <MyReview /> },
        { id: 4, button: "회원 정보", content: <MyInfo /> },
      ];

      const [activeTab, setActiveTab] = useState(TabData[0].id);

    return (
        <>
            <MainHeader />
            <div className="MyPage">
                <div className="title">
                    <FontAwesomeIcon className="icon" icon={faCircleUser} />
                    <h1>마이페이지</h1>
                </div>
                <div className="TabBox">
                    <div className="Tabmenu">
                        {TabData.map((tab) => <TabButton key={tab.id}
                        TabButton={tab.button}
                        isSelected={tab.id === activeTab}
                        onClick={() => setActiveTab(tab.id)} />)}
                    </div>
                    <div className="Contentmenu">
                        {TabData.find((a) => a.id === activeTab)?.content}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyPage;