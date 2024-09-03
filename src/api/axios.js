import axios from "axios";

const instance = axios.create({
    baseURL:"http://api.themoviedb.org/3",
    params: {
        api_key: "a49278de99c302dd09d7f1e1c4af15ca",
        language: "ko-KR"
    }
})

export default instance;