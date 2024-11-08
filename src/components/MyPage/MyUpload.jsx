import "./MyUpload.css";

const MyUpload = () => {
    return (
        <div className="MyUpload">
            <div className="MyUpload-image"></div>
            <div className="MyUpload-name">상품명</div>
            <div className="MyUpload-catagory">카테고리</div>
            <div className="MyUpload-date">YYYY-MM-DD</div>
            <div className="MyUpload-count">현재 남은 재고: 2개</div>
            <div className="MyUpload-price">가격</div>
            <div className="MyUpload-btn">
                <button>수정</button>
            </div>
        </div>
    )
}

export default MyUpload;