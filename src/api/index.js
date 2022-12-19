import Project from "@/api/modules/project";
import ProjectPrice from "@/api/modules/price";
import ProjectStep from "@/api/modules/step";
import ProjectTask from "@/api/modules/task";

class Api {
    constructor() {
        this.project = Project;
        this.projectPrice = ProjectPrice;
        this.projectStep = ProjectStep;
        this.projectTask = ProjectTask;
    }
}

export default new Api()