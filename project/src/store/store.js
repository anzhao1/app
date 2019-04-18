import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        show : false,
        name : "首页",
        tab : false,
        // teacherId: '',
        // code : "",
        appTel : '',
        token : "",
        appName : '',
        headPortrait : ''
    },
    getters : {
        show : function (state){
            return state.show;
        },
        getName : function (state){
            return state.name;
        },
        tab : function (state){
            return state.tab;
        },
        // teacherId : function (state) {
        //     return state.teacherId;
        // },
        // code : function(state){
        //     return state.code;
        // },
        appTel1 : function(state){
            return state.appTel;
        },
        appName : function(state){
            return state.appName;
        },
        token : function (state) {
            return state.token;
        }
    },
    mutations : {
        //存储token
        setToken(state,token){
            state.token = token;
        },
        changeShow : function (state) {
            state.show = true;
        },
        backShow : function (state) {
            state.show = false;
        },
        changeName : function(state,name){
            state.name = name;
        },
        changeTab : function(state){
            state.tab = false;
        },
        backTab : function(state){
            state.tab = true;
        },
        // changeCode : function(state,code){
        //     state.code = code;
        // },
        changeAppTel : function(state,appTel){
            state.appTel = appTel;
        },
        changeAppName : function(state,appName){
            state.appName = appName;
        },
        setHeadPortrait : function (state,headPortrait) {
            state.headPortrait = headPortrait;
        }
        // changeTeacherId : function (state,id) {
        //     state.teacherId = id;
        // }
    }
})