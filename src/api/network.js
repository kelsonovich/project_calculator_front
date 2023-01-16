import axios from 'axios'
import ApiResponse from '@/api/response'
import utils from '@/assets/js/utils'
import store from '@/store'

export default class Network {
    static configure() {
        axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;
        axios.defaults.timeout = 30000;
        if (localStorage.user) {
            console.log(localStorage.user);
            store.commit('SET_USER', JSON.parse(localStorage.user));
        }
    }

    static async request(url, method, data, config) {
        if (!utils.isPlainObject(config)) {
            config = {};
        }
        let request = {
            method: method,
            url: url
        };
        if (data) {
            if (method === 'get') {
                request.params = data;
            } else {
                request.data = data;
            }
        }
        request = {...request, ...config}
        try {
            let result = await axios(request);
            return new ApiResponse(result.data);
        } catch (error) {
            return new ApiResponse(error.response)
        }
    }

    static get(url, data, config) {
        return this.request(url, 'get', data, config)
    }

    static post(url, data, config) {
        return this.request(url, 'post', data, config)
    }

    static put(url, data, config) {
        return this.request(url, 'put', data, config)
    }

    static patch(url, data, config) {
        return this.request(url, 'patch', data, config)
    }

    static delete(url, data, config) {
        return this.request(url, 'delete', data, config)
    }
}