import ReviewForm from "./ReviewForm";
import "./ReviewList.css";

const ReviewList = () =>{
    return(
        <div className="ReviewList">
            <div className="ReviewList-title">리뷰 <span>(1,221)</span></div>
            <div className="ReviewList-score">평점: <span>4.9</span></div>
            <div className="ReviewList-list">
                <ReviewForm />
            </div>
        </div>
    )
}

export default ReviewList;