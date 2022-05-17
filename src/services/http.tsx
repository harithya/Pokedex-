import axios from "axios";

const http = axios.create({
    baseURL: "http://192.168.0.171:8080/api",
})

export default http