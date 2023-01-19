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

    static async getProject(projectId, revisionId, data) {
        let res = await network.get(this.route + `/${projectId}` + `/${revisionId}`, data);
        if (res.isSuccess) {
            // console.log('api_form', res)
        }
        return res
    }

    static async createProject(data) {
        let res = await network.post(this.route, data);
        if (res.isSuccess) {
            // console.log('api_form', res)
        }
        return res
    }

    static async update(projectId, data) {
        let res = await network.patch(this.route + `/${projectId}`, data);
        if (res.isSuccess) {
            // console.log('api_form', res)
        }
        return res
    }

    static async delete(projectId) {
        let res = await network.delete(this.route + `/${projectId}`);
        if (res.isSuccess) {
            // console.log('api_form', res)
        }
        return res
    }

    static async calculate(project) {
        let res = await network.post(this.route + '/calculate', {project: project});
        if (res.isSuccess) {
            // console.log('api_form', res)
        }
        return res
    }
}