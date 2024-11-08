import "./Main.css";
import MainHeader from "../components/common/MainHeader";

import { useEffect, useState } from "react";
import ItemList from "../components/MainPage/itemList";

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
            <ItemList />
        </div>
    )
}

export default Main;