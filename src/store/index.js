import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";


export default createStore({
    plugins: [createPersistedState()],
    state: {
        is_Login: false,
        email: null,
        data: [],
        status_data: [],
        route: "",
        showdata: false,
        candidate: [],
        showdocstate: false,
        setidata: false,
        imagearr: [],
    },
    getters: {
        get_is_Login(state) {
            return state.is_Login;
        },
        get_is_email(state) {
            return state.email;
        },
        get_data(state) {
            return state.data;
        },
        get_status(state) {
            return state.status_data;
        },
        get_route(state) {
            return state.route;
        },
        get_showdata(state) {
            return state.showdata;
        },
        get_candidate(state) {
            return state.candidate;
        },
        getshow_doc(state) {
            return state.showdocstate;
        },
        getimagedata(state) {
            return state.setidata;
        },
        getimagedatas(state) {
            return state.imagearr;
        }

    },
    mutations: {
        set_is_Login(state, value) {
            state.is_Login = value;
        },
        set_is_email(state, payload) {
            state.email = payload;
        },
        set_data(state, payload) {
            state.data = payload;
        },
        set_status(state, payload) {
            state.status_data = payload;
        },
        set_route(state, payload) {
            state.route = payload;
        },
        setshowdata(state, payload) {
            state.showdata = payload;
        },
        set_candidate(state, payload) {
            state.candidate = payload;
        },
        setshow_doc(state, payload) {
            state.showdocstate = payload;
        },
        setimagedata(state, payload) {
            state.setidata = payload;
        },
        setimagearr(state, payload) {
            state.imagearr = payload;
        },

    },
    actions: {},
    modules: {},
});