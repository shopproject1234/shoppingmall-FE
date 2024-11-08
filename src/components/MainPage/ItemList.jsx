import { useEffect, useState } from "react";
import { fetchItemList } from "../../service/api";
import Item from "./Item";
import "./ItemList.css";

const ItemList = () => {

    const [itemList, setItemList] = useState([]);

    useEffect(()=> {
        getItemList();
    },[]);

    async function getItemList(){
        const response = await fetchItemList();
        setItemList(response);
    }
    

    return (
        <div className="Itemlist">
                <select name="category" >
                    <option>최신순</option>
                    <option>추천순</option>
                    <option>리뷰순</option>
                    <option>리뷰많은순</option>
                </select>
                
                <div className="Itemlistbox">
                    {itemList && itemList.map((item)=>(<Item item={item} key={item.id}/>))}
                </div>
            </div>
    )
}

export default ItemList;