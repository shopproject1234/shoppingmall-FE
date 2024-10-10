import "./Main.css";
import MainHeader from "../components/common/MainHeader";
import { useEffect, useState } from "react";

const Main = () => {
    const [dropdownValue, setDropdownValue] = useState();

    useEffect(() => {
        // api 호출하는 로직
    }, [dropdownValue])

    return (
        <div className="Main">
            <MainHeader />
            <div className="MainImage">
                <img src={"/MainImage.png"} />
            </div>
            <div className="itemlist">
                <select name="category" >
                    <option>최신순</option>
                    <option>추천순</option>
                    <option>리뷰순</option>
                    <option>리뷰많은순</option>
                </select>
                
                <div className="itemlistbox">

                </div>
            </div>
        </div>
    )
}

export default Main;