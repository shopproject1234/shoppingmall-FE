import "./ItemReview.css";
import MainHeader from "../components/common/MainHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import ItemCount from "../components/common/ItemCount";
import { useState } from "react";

const ItemReview = () => {
  const [itemCount, setItemCount] = useState(0);

  return (
    <>
      <MainHeader />
      <div className="ItemReview">
        <div className="title">
          <FontAwesomeIcon className="icon" icon={faPenNib} />
          <h1>리뷰 작성</h1>
        </div>
        <div className="Review">
          <div className="ReviewImage"></div>
          <div className="ReviewName">상품명</div>
          <div className="ReviewScore">
            <div className="Score">점수</div>
            <ItemCount itemCount={itemCount} setItemCount={setItemCount} />
          </div>
        </div>
        <textarea placeholder="구매한 상품에 대한 리뷰를 남겨 주세요." />
        <div className="Review-button">
          <button>뒤로가기</button>
          <button>등록하기</button>
        </div>
      </div>
    </>
  );
};

export default ItemReview;
