import network from '../network'

export default class Auth {
    static route = 'auth'

    static async login(data) {
        let res = await network.post(this.route + `/login`, data);
        if (res.isSuccess) {
            // console.log('api_form', res)
        }
        return res
    }
}