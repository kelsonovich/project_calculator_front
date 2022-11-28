import network from '../network'

export default class Project {
    static route = 'project'

    static async getAll() {
        let res = await network.get(this.route);
        if (res.isSuccess) {
            // console.log('api_form', res)
        }
        return res
    }

    static async getProject(projectId, data) {
        let res = await network.get(this.route + `/${projectId}`, data);
        if (res.isSuccess) {
            // console.log('api_form', res)
        }
        return res
    }
}