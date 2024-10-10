import { useState } from "react";
import "./interestBox.css";
import InterestButton from "./InterestButton";

const interestList = [
    {
        interestName: "FURNITURE",
        interestNameKr: "가구",
    },
    {
        interestName: "FABRIC",
        interestNameKr: "페브릭",
    },
    {
        interestName: "DECO",
        interestNameKr: "데코",
    },
    {
        interestName: "LIGHTING",
        interestNameKr: "조명",
    },
    {
        interestName: "KIDS",
        interestNameKr: "아동",
    },
    {
        interestName: "CAMPING",
        interestNameKr: "캠핑",
    },
    {
        interestName: "APPLIANCE",
        interestNameKr: "가전",
    },
    {
        interestName: "KITCHENWARE",
        interestNameKr: "주방용품",
    },
    {
        interestName: "STORAGE",
        interestNameKr: "수납",
    },
    {
        interestName: "DAILYITEM",
        interestNameKr: "생황용품",
    }
];


const InterestBox = (props) => {

    const handleInterestClick = (interestName) => {
        // 선택된 관심사 목록에 이미 포함되어 있는지 확인
        if (props.selectedInterests.includes(interestName)) {
            // 이미 포함된 경우 배열에서 제거
            props.setSelectedInterests(props.selectedInterests.filter(name => name !== interestName));
        } else {
            // 포함되지 않은 경우 배열에 추가
            props.setSelectedInterests([...props.selectedInterests, interestName]);
        }
    };

    return (
        <div className="interest-box">
            {interestList.map((interest, index) => (
                <InterestButton
                    key={index}
                    interestName={interest.interestNameKr}
                    isSelected={props.selectedInterests.includes(interest.interestName)} // 여러 선택 가능
                    onClick={() => handleInterestClick(interest.interestName)} // 클릭 시 처리
                />
            ))}
        </div>
    );
};

export default InterestBox;
