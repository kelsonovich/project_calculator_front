import {createStore} from 'vuex'
import api from '@/api'

export default createStore({
    modules: {},
    state: {
        projects: null,
        project: null,
        preloader: 0,
        newProjectId: null,
    },
    getters: {
        GET_ALL_PROJECTS(state) {
            return state.projects;
        },
        GET_PROJECT (state) {
            return state.project;
        },
        GET_NEW_PROJECT_ID(state) {
            return state.newProjectId;
        },
        PRELOADER (state) {
            return state.preloader;
        },
    },
    mutations: {
        SET_ALL_PROJECTS(state, projects) {
            state.projects = projects;
        },
        SET_PROJECT(state, project) {
            state.project = project;
        },
        SET_NEW_PROJECT_ID(state, newProjectId) {
            state.newProjectId = newProjectId;
        },
        PRELOADER_INCREMENT(state) {
            state.preloader++;
        },
        PRELOADER_DECREMENT(state) {
            state.preloader--;
        },
    },
    actions: {
        async getAllProjects(context) {
            context.commit('PRELOADER_INCREMENT');
            let result = await api.project.getAll();
            if (result.status) {
                context.commit('SET_ALL_PROJECTS', result.result);
            }
            context.commit('PRELOADER_DECREMENT');
        },
        async getProject(context, {projectId, data}) {
            context.commit('PRELOADER_INCREMENT');
            let result = await api.project.getProject(projectId, data);
            if (result.status) {
                context.commit('SET_PROJECT', result.result);
            }
            context.commit('PRELOADER_DECREMENT');
        },
        async createProject(context, {data}) {
            context.commit('PRELOADER_INCREMENT');
            let result = await api.project.createProject(data);
            if (result.status) {
                context.commit('SET_NEW_PROJECT_ID', result.result.id);
            }
            context.commit('PRELOADER_DECREMENT');
        },
        async updateProject(context, {projectId, data}) {
            context.commit('PRELOADER_INCREMENT');
            let result = await api.project.update(projectId, data);
            if (result.status) {
                context.commit('SET_PROJECT', result.result);
            }
            context.commit('PRELOADER_DECREMENT');
        },
        async deleteProject(context, {projectId}) {
            context.commit('PRELOADER_INCREMENT');
            let result = await api.project.delete(projectId);
            if (result.status) {
                // context.commit('SET_PROJECT', result.result);
            }
            context.commit('PRELOADER_DECREMENT');
        },
        async updatePrice(context, {priceId, data}) {
            context.commit('PRELOADER_INCREMENT');
            let result = await api.projectPrice.update(priceId, data);
            if (result.status) {
                // context.commit('SET_PROJECT', result.result);
            }
            context.commit('PRELOADER_DECREMENT');
        },
        async updateStep(context, {stepId, data}) {
            context.commit('PRELOADER_INCREMENT');
            let result = await api.projectStep.update(stepId, data);
            if (result.status) {
                // context.commit('SET_PROJECT', result.result);
            }
            context.commit('PRELOADER_DECREMENT');
        },
        async updateTask(context, {taskId, data}) {
            context.commit('PRELOADER_INCREMENT');
            let result = await api.projectTask.update(taskId, data);
            if (result.status) {
                // context.commit('SET_PROJECT', result.result);
            }
            context.commit('PRELOADER_DECREMENT');
        },

    },
})
