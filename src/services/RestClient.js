import axios from 'axios';

class RestClient {

    static baseURL = "https://my-json-server.typicode.com/marlon-espinoza/tech_academy";

    static instanceAxios = axios.create({
        baseURL: RestClient.baseURL
    });

    static setAuthorization = token => {
        RestClient.instanceAxios.defaults.headers.common.Authorization = token
    }

    static setInterceptor = callback => {
        RestClient.instanceAxios.interceptors.response.use(
            res => {
                // any process...
                return res;
            },
            error => {
                // any process...
                return error;
            }
        );
    }

    static getTravels = () => {
        return RestClient.instanceAxios.get('/travels').then(res => {
            return res;
        });
    }

}

export default RestClient;