import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex)

const actions = {}
const mutations = {
    SET_testText(state,value){
        console.log("store "+value);
        state.testText = value;
    }
}
const state = {
    testText:"",
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
})