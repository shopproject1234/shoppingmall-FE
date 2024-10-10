import axios from "axios";

const config = {
    publicUrl: import.meta.env.VITE_SERVER,
    lang: 'ko-KR',
  };

const axiosBaseURL = axios.create({
    baseURL: config.publicUrl,
    withCredentials: true,
});

async function fetchLogin (form) {

    console.log("fetchLogin");
    try {
      //응답 성공 
      const response = await axiosBaseURL.post('user/login',{
            //보내고자 하는 데이터 
            email: form['userId'],
            password: form['password'],
      });
      console.log(response);
    } catch (error) {
      //응답 실패
      console.error(error);
    }
}

export {
    fetchLogin,
}

