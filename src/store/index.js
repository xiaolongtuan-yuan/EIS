import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex)

const actions = {}
const mutations = {
    SET_testText(state,value){
        console.log("store "+value);
        state.testText = value;
    },
    SET_InfoList(state,value){
        state.InfoList = value;
    }
}
const state = {
    testText:null,
    InfoList:[],
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
})