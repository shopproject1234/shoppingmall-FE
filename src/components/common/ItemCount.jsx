import "./ItemCount.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

const ItemCount = (props) => {

    const handlePlus = () => {
        props.setItemCount(props.itemCount + 1)
    };

    const handleMinus = () => {
        if(props.itemCount > 0){
            props.setItemCount(props.itemCount -1)
        };
    };

    return (
        <div className="ItemCount">
            <div className="itemCount-viewer">{props.itemCount}</div>
            <div onClick={()=>handlePlus()}>
                <FontAwesomeIcon className="icon iconPlus" icon={faPlus} />
            </div>
            <div onClick={()=>handleMinus()}>
                <FontAwesomeIcon className="icon iconMinus" icon={faMinus} />  
            </div>
        </div>
    )
}

export default ItemCount;