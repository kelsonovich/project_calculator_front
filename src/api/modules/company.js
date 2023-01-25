import network from '../network'

export default class Company {
    static route = 'company'

    static async getClient() {
        let res = await network.get(this.route + '/client');
        if (res.isSuccess) {
            // console.log('api_form', res)
        }
        return res
    }

    static async getInner() {
        let res = await network.get(this.route + '/inner');
        if (res.isSuccess) {
            // console.log('api_form', res)
        }
        return res
    }

    static async getCompany(projectId, revisionId, data) {
        let res = await network.get(this.route + `/${projectId}` + `/${revisionId}`, data);
        if (res.isSuccess) {
            // console.log('api_form', res)
        }
        return res
    }

    static async create(data) {
        let res = await network.post(this.route, data);
        if (res.isSuccess) {
            // console.log('api_form', res)
        }
        return res
    }

    static async update(companyId, data) {
        let res = await network.patch(this.route + `/${companyId}`, data);
        if (res.isSuccess) {
            // console.log('api_form', res)
        }
        return res
    }

    static async delete(companyId) {
        let res = await network.delete(this.route + `/${companyId}`);
        if (res.isSuccess) {
            // console.log('api_form', res)
        }
        return res
    }
}