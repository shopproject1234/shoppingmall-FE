import MainHeader from "../components/common/MainHeader";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBox } from '@fortawesome/free-solid-svg-icons'
import "./ItemUpload.css";
import Input from "../components/common/Input";
import { useState } from "react";


const ItemUpload = () => {

    const [form, setForm] = useState({
        itemName: "",
    });

    return (
        <div className="ItemUpload">
            <MainHeader />
            <div className="ItemUploading">
                <div className="title">
                    <FontAwesomeIcon className="icon" icon={faBox} />
                    <h1>상품등록</h1>
                </div>
                <div className="upload-image">

                </div>
                <div className="itemName">
                    <Input form={form} setForm={setForm} type="text" name="itemName" label={"상품 이름"} placeholder={"상품 이름을 입력해 주세요!"} />
                </div>
                <div className="itemCount">
                    
                </div>
            </div>
        </div>
    )
}

export default ItemUpload;