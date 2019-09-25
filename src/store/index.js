
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state:{
    letter:'',
    city:localStorage.getItem('city2')||'濮阳'
  },
  mutations:{
    changeLetter(state,letter){
      state.letter = letter
    },
    changeCity(state,city){
      state.city = city
      localStorage.setItem("city2",city)


    }
  }
})














