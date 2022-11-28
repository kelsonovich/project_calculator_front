import Project from "@/api/modules/project";

class Api {
    constructor() {
        this.project = Project;
    }
}

export default new Api()