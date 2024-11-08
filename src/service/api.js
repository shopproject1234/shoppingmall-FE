import axios from "axios";
import Cookies from "js-cookie"; 

const config = {
  publicUrl: import.meta.env.VITE_SERVER,
  lang: "ko-KR",
};

const axiosInstance = axios.create({
  baseURL: config.publicUrl,
  withCredentials: true,
});

async function fetchLogin(form) {
  try {
    const response = await axiosInstance.post("user/login", {
      email: form["userId"],
      password: form["password"],
    });

    if (response.status === 200) {
      // 서버에서 받은 jsessionid를 쿠키에 저장
      const setCookieHeader = response.headers["jsessionid"];
      if (setCookieHeader) {
        //const cookieValue = setCookieHeader.split(';').find(c => c.startsWith('jsessionid')).split('=')[1]; // jsessionid 값 추출
        Cookies.set('jsessionid', setCookieHeader); // 쿠키 설정
        console.log("jsessionid set:", setCookieHeader);
        return response.data;
      } else {
        console.warn("No set-cookie header found in response");
      }
    }
  } catch (error) {
    console.error("Login failed:", error);
  }
}

async function fetchItemUpload(form, itemCount) {
  try {
    console.log("Item upload response:", form);
    const response = await axiosInstance.post("item/upload", {
      image: form["image"],
      itemName: form["itemName"],
      itemCount: itemCount,
      itemInfo: form["itemInfo"],
      price: form["price"],
      category: form["category"],
    });
    
  } catch (error) {
    console.error("Item upload failed:", error);
  }
}

async function fetchItemList() {
  try {
    const response = await axiosInstance.get("item/list?page=1&sortType=latest&keyword=a&category=furniture");
    return response.data.content;
  } catch (error) {
    console.error("Fetching item list failed:", error);
  }
}

export { fetchLogin, fetchItemUpload, fetchItemList };
