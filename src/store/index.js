import {createStore} from 'vuex'
import api from '@/api'

export default createStore({
    modules: {},
    state: {
        projects: null,
        project: null,
    },
    getters: {
        GET_ALL_PROJECTS(state) {
            return state.projects;
        },
        GET_PROJECT (state) {
            return state.project;
        },
    },
    mutations: {
        SET_ALL_PROJECTS(state, projects) {
            state.projects = projects;
        },
        SET_PROJECT(state, project) {
            state.project = project;
        },
    },
    actions: {
        async getAllProjects(context) {
            let result = await api.project.getAll();
            if (result.status) {
                context.commit('SET_ALL_PROJECTS', result.result);
            }
        },
        async getProject(context, {projectId, data}) {
            let result = await api.project.getProject(projectId, data);
            if (result.status) {
                context.commit('SET_PROJECT', result.result);
            }
        },
    },
})
