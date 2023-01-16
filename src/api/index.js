import Project from "@/api/modules/project";
import Auth from "@/api/modules/auth";

class Api {
    constructor() {
        this.project = Project;
        this.auth = Auth;
    }
}

export default new Api()