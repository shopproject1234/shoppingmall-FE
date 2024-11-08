import "./TabButton.css";

const TabButton = ({TabButton, onClick, isSelected}) => {
    return (
        <div className={`TabButton ${isSelected ? `TabButton_on` : ""}`} onClick={onClick}>
            <button >{TabButton}</button>
        </div>
    )
}

export default TabButton;