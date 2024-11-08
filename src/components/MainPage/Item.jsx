import { fetchItemList } from "../../service/api";
import "./Item.css";

const Item = (props) => {


    return (
        <div className="Item">
            <div className="img_section"></div>
            <div className="title_section">{props.item.itemName}</div>
            <div className="price_section">{props.item.price}</div>
        </div>
        
    )
};

export default Item;