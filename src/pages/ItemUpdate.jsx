import "./ItemUpdate.css";
import MainHeader from "../components/common/MainHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import Input from "../components/common/Input";
import { useState } from "react";
import ItemCount from "../components/common/ItemCount";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { fetchItemUpdate } from "../service/api";
import ImageInput from "../components/common/ImageInput";
import AWS from "aws-sdk";

const ItemUpdate = () => {
  const { itemId } = useParams();
  const location = useLocation();

  const itemInfo = location.state.itemInfo;
  const [ItemUpdate, setItemUpdate] = useState();

  async function getItemUpdate() {
    const response = await fetchItemUpdate(form, itemCount, itemId); // itemId를 전달
    setItemUpdate(response);
    console.log(response);
  }

  const [selectedFile, setSelectedFile] = useState(itemInfo.image);

  const handlePrcieChange = (e) => {
    setForm({
      ...form,
      ["price"]: e.target.value,
    });
  };

  const handleCategorySelect = (e) => {
    setForm({
      ...form,
      ["category"]: e.target.value,
    });
  };

  const handleItemInfo = (e) => {
    setForm({
      ...form,
      ["itemInfo"]: e.target.value,
    });
  };

  /*const updateS3File = async (selectedFile) => {
    // AWS S3 설정
    AWS.config.update({
      accessKeyId: import.meta.env.VITE_ACCESS_KEY, // IAM 사용자 엑세스 키 변경
      secretAccessKey: import.meta.env.VITE_SECRET_ACCESS_KEY, // IAM 엑세스 시크릿키 변경
      region: "ap-northeast-2", // 리전 변경
    });

    const s3 = new AWS.S3();
    const file = selectedFile;
  
    const params = {
      Bucket: import.meta.env.VITE_S3_BUCKET_NAME,
      Key: "upload/" + `${Date.now()}_${file.name}`,
      Body: file,
    };
  
    try {
      // 파일 업로드 함수를 호출하여 기존 파일을 덮어쓸 수 있습니다.
      const { Location } = await s3.upload(params).promise();
      setImageView(Location);
      alert("파일이 업데이트되었습니다.");
    } catch (error) {
      console.error("파일 업데이트 중 오류 발생:", error);
    }
  };*/

  const nav = useNavigate();

  const [itemCount, setItemCount] = useState(itemInfo.itemCount);

  const [form, setForm] = useState(itemInfo);

  return (
    <div className="ItemUpdate">
      <MainHeader />
      <div className="ItemUpdating">
        <div className="title">
          <FontAwesomeIcon className="icon" icon={faBox} />
          <h1>상품 수정</h1>
        </div>
        <div className="update-image">
          <ImageInput
            name="image"
            number={"one"}
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
            image={itemInfo.image[0]}
          />
          <ImageInput
            name="image"
            number={"two"}
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
            image={itemInfo.image[1]}
          />
          <ImageInput
            name="image"
            number={"three"}
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
            image={itemInfo.image[2]}
          />
        </div>
        <div className="itemName">
          <Input
            form={form}
            setForm={setForm}
            type="text"
            name="itemName"
            label={"상품이름"}
            placeholder={"상품 이름을 입력해 주세요!"}
          />
        </div>

        <div className="itemCount">
          <div className="itemCount-title">상품 개수</div>
          <ItemCount itemCount={itemCount} setItemCount={setItemCount} />
        </div>

        <div className="itemPrice">
          <div className="price-title">가격</div>
          <input onChange={handlePrcieChange} value={form.price} type="text" />
        </div>

        <div className="itemcatecory">
          <div className="category-title">카테고리</div>
          <select onChange={handleCategorySelect} name="category" value={form.category}>
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
          <textarea
            onChange={handleItemInfo}
            placeholder="상품을 설명해 주세요!"
            value={form.itemInfo}
          ></textarea>
        </div>

        <div className="update-button">
          <button>뒤로가기</button>
          <button
            onClick={() => {
              getItemUpdate(), nav("/");
            }}
          >
            등록하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemUpdate;