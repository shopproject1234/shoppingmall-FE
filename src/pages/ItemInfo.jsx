import "./ItemInfo.css";
import MainHeader from "../components/common/MainHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import ItemCount from "../components/common/ItemCount";
import ReviewList from "../components/ItemInfoPage/ReviewList";

const ItemInfo = () => {
  return (
    <>
      <MainHeader />
      <div className="ItemInfo">
        <div className="title">
          <FontAwesomeIcon className="icon" icon={faBox} />
          <h1>상품 상세</h1>
        </div>
        <div className="InfoImage"></div>
        <section>
          <div className="InfoName">
            <div>상품 이름</div>
            <div>상품 이름</div>
          </div>
          <div className="InfoCategory">
            <div>카테고리</div>
            <div>카테고리</div>
          </div>
          <div className="InfoContent">
            <div>상품 설명</div>
            <textarea />
          </div>
          <div className="InfoCount">
            <div>상품 개수</div>
            <ItemCount />
          </div>
        </section>
        <div className="InfoPrice">
          <div>가격</div>
          <div>총 15,000 원</div>
        </div>
        <div className="Info-button">
          <button>장바구니 담기</button>
          <button>구매하기</button>
        </div>
      </div>
      <ReviewList />
    </>
  );
};

export default ItemInfo;
