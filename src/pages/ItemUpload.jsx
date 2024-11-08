import "./ItemUpload.css";
import MainHeader from "../components/common/MainHeader";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBox } from '@fortawesome/free-solid-svg-icons'
import Input from "../components/common/Input";
import { useState } from "react";
import ItemCount from "../components/common/ItemCount";
import { useNavigate } from "react-router-dom";
import { fetchItemUpload } from "../service/api";
import ImageInput from "../components/common/ImageInput";


const ItemUpload = () => {

    async function doUpload () {
        const response = await fetchItemUpload(form, itemCount);
        console.log(response);
    }

    const handlePrcieChange = (e) => {
        setForm({
            ...form,
            ["price"] : e.target.value,
        });
    }

    const handleCategorySelect = (e) => {
        setForm({
            ...form,
            ["category"] : e.target.value,
        });
    }

    const handleItemInfo = (e) => {
        setForm({
            ...form,
            ["itemInfo"] : e.target.value,
        });
    }

    const nav = useNavigate();

    const [itemCount, setItemCount] = useState(0);

    const [form, setForm] = useState({
        image: [""],
        itemName: "",
        itemCount: itemCount,
        itemInfo: "",
        price: "",
        category: ""
    });

    return (
        <div className="ItemUpload">
            <MainHeader />
            <div className="ItemUploading">
                <div className="title">
                    <FontAwesomeIcon className="icon" icon={faBox} />
                    <h1>상품 등록</h1>
                </div>
                <div className="upload-image">
                    <ImageInput />
                    <ImageInput />
                    <ImageInput />
                </div>
                <div className="itemName">
                    <Input form={form} setForm={setForm} type="text" name="itemName" label={"상품 이름"} placeholder={"상품 이름을 입력해 주세요!"} />
                </div>

                <div className="itemCount">
                    <div className="itemCount-title">상품 개수</div>
                    <ItemCount itemCount={itemCount} setItemCount={setItemCount} />
                </div>

                <div className="itemPrice">
                    <div className="price-title">가격</div>
                    <input onChange={handlePrcieChange} type="text" />
                </div>

                <div className="itemcatecory">
                    <div className="category-title">카테고리</div>
                    <select onChange={handleCategorySelect} name="category" >
                        <option value="">카테고리</option>
                        <option value="FURNITURE">가구</option>
                        <option value="FABRIC">패브릭</option>
                        <option value="DECO">데코</option>
                        <option value="LIGHTING">조명</option>
                        <option value="KIDS">아동</option>
                        <option value="CAMPING">캠핑</option>
                        <option value="APPLIANCE">가전</option>
                        <option value="KITCHENWARE">주방용품</option>
                        <option value="STORAGE">수납</option>
                        <option value="DAILYITEM">생활용품</option>
                    </select>
                </div>

                <div className="itemExplain">
                    <div className="itemExplain-title">상품 설명</div>
                    <textarea onChange={handleItemInfo} placeholder="상품을 설명해 주세요!"></textarea>
                </div>

                <div className="upload-button">
                    <button>뒤로가기</button>
                    <button onClick={()=>{doUpload(), nav("/")}}>등록하기</button>
                </div>

            </div>
        </div>
    )
}

export default ItemUpload;