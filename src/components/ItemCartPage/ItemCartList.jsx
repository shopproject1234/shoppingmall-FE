import { useState } from "react";
import ItemCount from "../common/ItemCount";
import "./ItemCartList.css";

const ItemCartList = () => {

    const [itemCount, setItemCount] = useState(0);

    return (
        <div className="ItemCartList">
            <input type="checkbox" />
            <div className="itemImage"></div>
            <div className="itemName">상품명</div>
            <div className="itemPrice">가격</div>
            <ItemCount itemCount={itemCount} setItemCount={setItemCount} />
            <button>삭제</button>
        </div>
    )
}

export default ItemCartList;