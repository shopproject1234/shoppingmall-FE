import "./ReviewForm.css";

const ReviewForm  = () =>{
    return (
        <div className="ReviewForm">
            <div className="ReviewForm-name">작성자: 작성자</div>
            <div className="ReviewForm-score">점수: 점수</div>
            <div className="ReviewForm-date">YYYY-MM-DD</div>
            <div className="ReviewForm-content">
                <div>리뷰내용</div>
                <textarea></textarea>
            </div>
        </div>
    )
}

export default ReviewForm;