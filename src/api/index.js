import Project from "@/api/modules/project";
import Auth from "@/api/modules/auth";
import Company from "@/api/modules/company";

class Api {
    constructor() {
        this.project = Project;
        this.auth = Auth;
        this.company = Company;
    }
}

export default new Api()