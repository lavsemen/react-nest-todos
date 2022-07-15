import axios, {AxiosRequestConfig} from "axios";

class ApiAbstract {
    private baseUrl = 'http://localhost:3000/api'
    protected $axios = axios.create({
        baseURL: this.baseUrl
    })
}

export default ApiAbstract