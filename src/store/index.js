import {createStore} from 'vuex'
import api from '@/api'
import utils from '@/assets/js/utils'
import axios from 'axios';
import router from "@/router";
import {useToast} from "vue-toastification";

const toast = useToast();

export default createStore({
    modules: {},
    state: {
        projects: null,
        project: null,
        recalculatedProject: null,
        intermediateProject: null,
        preloader: 0,
        newProjectId: null,
        userData: null,
    },
    getters: {
        GET_ALL_PROJECTS(state) {
            return state.projects;
        },
        GET_PROJECT(state) {
            return state.project;
        },
        GET_RECALCULATED_PROJECT(state) {
            return state.recalculatedProject;
        },
        GET_INTERMEDIATE_PROJECT(state) {
            return state.intermediateProject;
        },
        PRELOADER(state) {
            return state.preloader;
        },
        GET_USER(state) {
            return state.userData;
        },
    },
    mutations: {
        SET_ALL_PROJECTS(state, projects) {
            state.projects = projects;
        },
        SET_PROJECT(state, project) {
            state.project = project;
        },
        SET_RECALCULATED_PROJECT(state, project) {
            state.recalculatedProject = project;
        },
        SET_INTERMEDIATE_PROJECT(state, project) {
            state.intermediateProject = project;
        },
        PRELOADER_INCREMENT(state) {
            state.preloader++;
        },
        PRELOADER_DECREMENT(state) {
            state.preloader--;
        },
        CLEAR_PROJECT(state) {
            state.intermediateProject = state.project;
            state.recalculatedProject = state.project;
        },
        CHANGE_PROJECT (state, data) {
            for (let key in data) {
                if (utils.hasProperty(state.intermediateProject, key)) {
                    state.intermediateProject[key] = data[key];
                }
            }
        },
        CHANGE_PRICE (state, price) {
            for (let key in price) {
                if (utils.hasProperty(state.intermediateProject.price, key)) {
                    state.intermediateProject.price[key] = price[key];
                }
            }
        },
        CHANGE_STEPS (state, newSteps) {
            newSteps.forEach(newStep => {
                state.intermediateProject.steps.forEach(step => {
                    if (Number(step.id) === Number(newStep.id)) {
                        for (let key in newStep) {
                            if (utils.hasProperty(step, key)) {
                                step[key] = newStep[key];
                            }
                        }
                    }
                });
            });
        },
        CHANGE_OPTIONS (state, options) {
            state.intermediateProject.options = options;
        },
        CHANGE_TASKS (state, tasks) {
            state.intermediateProject.tasks = tasks;
        },
        SET_USER(state, data) {
            if (data) {
                state.userData = data
            }
            if (data && data.token) {
                let token = data.token.split('|')[1];
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            }
        },

        RESET_USER(state) {
            state.userData = null
            axios.defaults.headers.common['Authorization'] = ''
        },
    },
    actions: {
        clearProject(context) {
            context.commit('CLEAR_PROJECT');
        },
        async changeProject(context, {type, data}) {
            if (type === 'steps') {
                context.commit('CHANGE_STEPS', data);
            } else if (type === 'tasks') {
                context.commit('CHANGE_TASKS', data);
            } else if (type === 'price') {
                context.commit('CHANGE_PRICE', data);
            } else if (type === 'options') {
                context.commit('CHANGE_OPTIONS', data);
            } else if (type === 'project') {
                context.commit('CHANGE_PROJECT', data);
            }

            context.commit('PRELOADER_INCREMENT');
            let result = await api.project.calculate(context.getters.GET_INTERMEDIATE_PROJECT);
            if (result.status) {
                context.commit('SET_RECALCULATED_PROJECT', result.result);
            }
            context.commit('PRELOADER_DECREMENT');
        },
        async getAllProjects(context) {
            context.commit('PRELOADER_INCREMENT');
            let result = await api.project.getAll();
            if (result.status) {
                context.commit('SET_ALL_PROJECTS', result.result);
            }
            context.commit('PRELOADER_DECREMENT');
        },
        async getProject(context, {projectId, revisionId, data}) {
            context.commit('PRELOADER_INCREMENT');
            let result = await api.project.getProject(projectId, revisionId, data);
            if (result.status) {

                context.commit('SET_PROJECT', JSON.parse(JSON.stringify(result.result)));
                context.commit('SET_RECALCULATED_PROJECT', JSON.parse(JSON.stringify(result.result)));
                context.commit('SET_INTERMEDIATE_PROJECT', JSON.parse(JSON.stringify(result.result)));
            }
            context.commit('PRELOADER_DECREMENT');
        },
        async createProject(context, {data}) {
            // context.commit('PRELOADER_INCREMENT');
            let result = await api.project.createProject(data);
            if (result.status) {
                context.commit('SET_PROJECT', JSON.parse(JSON.stringify(result.result)));
                context.commit('SET_RECALCULATED_PROJECT', JSON.parse(JSON.stringify(result.result)));
                context.commit('SET_INTERMEDIATE_PROJECT', JSON.parse(JSON.stringify(result.result)));

                toast.success(result.message);
            }
            // context.commit('PRELOADER_DECREMENT');
        },
        async updateProject(context) {
            let project = context.getters.GET_INTERMEDIATE_PROJECT;
            context.commit('PRELOADER_INCREMENT');
            let result = await api.project.update(project.id, {project: project});

            if (result.status) {
                let project = JSON.parse(JSON.stringify(result.result));

                context.commit('SET_PROJECT', project);
                context.commit('SET_RECALCULATED_PROJECT', JSON.parse(JSON.stringify(result.result)));
                context.commit('SET_INTERMEDIATE_PROJECT', JSON.parse(JSON.stringify(result.result)));

                toast.success(result.message);

                router.replace({name: 'projectDetail', params: {revisionId: project.revision_id}});
            }
            context.commit('PRELOADER_DECREMENT');
        },
        async deleteProject(context, {projectId, revisionId}) {
            context.commit('PRELOADER_INCREMENT');
            let result = await api.project.delete(projectId, revisionId);
            if (result.code === 204) {
                toast.success('Проект успешно удален');
            }
            context.commit('PRELOADER_DECREMENT');
        },
        async login(context, {userData}) {
            context.commit('PRELOADER_INCREMENT');
            let result = await api.auth.login(userData);
            if (result.status) {
                context.commit('SET_USER', result.result.user);
                localStorage.setItem('user', JSON.stringify(result.result.user));
            }
            context.commit('PRELOADER_DECREMENT');
        },
        resetAuthorization(context) {
            localStorage.removeItem('user');
            context.commit('RESET_USER');
        },
        setNotFound() {
            router.replace({name: 'projectList'});
        },
    },
})
