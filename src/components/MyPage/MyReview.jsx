import "./MyReview.css";

const MyReview = () => {
    return (
        <div className="MyReview">
            <div className="MyReview-image"></div>
            <div className="MyReview-name">상품명</div>
            <div className="MyReview-score">점수: 5</div>
            <div className="MyReview-date">YYYY-MM-DD</div>
            <div className="MyReview-content">리뷰내용</div>
            <div className="MyReview-btn">
                <button>삭제</button>
            </div>
        </div>
    )
}

export default MyReview;