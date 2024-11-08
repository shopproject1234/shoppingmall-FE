import "./ItemCart.css";
import MainHeader from "../components/common/MainHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import ItemCartList from "../components/ItemCartPage/itemCartList";

const ItemCart = () => {
  return (
    <>
      <MainHeader />
      <div className="ItemCart">
        <div className="title">
          <FontAwesomeIcon className="icon" icon={faBox} />
          <h1>장바구니</h1>
        </div>
        <div className="itemcartlist">
            <ItemCartList />
        </div>

        <div className="control">
            <div className="control-title">
                주문 예상 금액
            </div>
            <div className="control-list">
                <div className="total-price">
                  <p>총 상품 가격 <span>9000원</span></p>
                </div>
                <div className="sale-price">
                  <p>할인 <span>-0원</span></p>
                </div>
                <div className="deliver-price">
                  <p>배송비 <span>+3000원</span></p>
                </div>
                <div className="pay-price">
                  <p>결제금액 <span>12000원</span></p>
                </div>
            </div>
            <div className="control-btn">
                <button>구매하기</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default ItemCart;
