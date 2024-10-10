import { Routes, Route } from 'react-router-dom';
import LogIn from "./pages/LogIn";
import Main from "./pages/Main";
import Register from "./pages/Register";
import MyPage from './pages/myPage';
import ItemUpload from './pages/ItemUpload';
import ItemInfo from './pages/itemInfo';
import ItemUpdate from './pages/itemUpdate';
import ItemDelete from './pages/itemDelete';
import ItemCart from './pages/itemCart';
import ItemReview from './pages/itemReview';



function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/ItemUpload" element={<ItemUpload />} />
        <Route path="/ItemInfo" element={<ItemInfo />} />
        <Route path="/ItemUpdate" element={<ItemUpdate />} />
        <Route path="/ItemDelete" element={<ItemDelete />} />
        <Route path="/ItemCart" element={<ItemCart />} />
        <Route path="/ItemReview" element={<ItemReview />} />
      </Routes>
    </>
  )
}

export default App;