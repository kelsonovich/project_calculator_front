import network from '../network'

export default class ProjectStep {
    static route = 'step'

    static async update(stepId, data) {
        let res = await network.patch(this.route + `/${stepId}`, data);
        if (res.isSuccess) {
            // console.log('api_form', res)
        }
        return res
    }
}