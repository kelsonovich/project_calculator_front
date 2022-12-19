import network from '../network'

export default class ProjectPrice {
    static route = 'price'

    static async update(priceId, data) {
        let res = await network.patch(this.route + `/${priceId}`, data);
        if (res.isSuccess) {
            // console.log('api_form', res)
        }
        return res
    }
}