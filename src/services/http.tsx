import { constant } from "@utils";
import axios from "axios";

const http = axios.create({
    baseURL: constant.baseUrl,
})

export default http