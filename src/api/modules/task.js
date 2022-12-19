import network from '../network'

export default class ProjectTask {
    static route = 'task'

    static async create(taskId, data) {
        let res = await network.post(this.route + `/${taskId}`, data);
        if (res.isSuccess) {
            // console.log('api_form', res)
        }
        return res
    }

    static async update(taskId, data) {
        let res = await network.patch(this.route + `/${taskId}`, data);
        if (res.isSuccess) {
            // console.log('api_form', res)
        }
        return res
    }

    static async delete(taskId) {
        let res = await network.delete(this.route + `/${taskId}`);
        if (res.isSuccess) {
            // console.log('api_form', res)
        }
        return res
    }
}