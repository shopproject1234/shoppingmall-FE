import "./InterestButton.css";

const InterestButton = ({interestName, isSelected, onClick}) => {
    return(
            <button onClick={onClick} className={`InterestButton ${isSelected ? `InterestButton_on`:""}`}>{interestName}</button>
    )
}

export default InterestButton;