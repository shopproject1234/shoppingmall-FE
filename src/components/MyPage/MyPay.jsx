import "./MyPay.css";

const MyPay = () => {
    return (
        <div className="MyPay">
            <div className="MyPay-image"></div>
            <div className="MyPay-name">상품명</div>
            <div className="MyPay-catagory">카테고리</div>
            <div className="MyPay-date">YYYY-MM-DD</div>
            <div className="MyPay-count">총 구매 개수: 2개</div>
            <div className="MyPay-price">가격</div>
            <div className="MyPay-btn">
                <button>리뷰 작성</button>
            </div>
        </div>
    )
}

export default MyPay;