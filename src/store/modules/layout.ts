// initial state
const state = {
  navigationDrawer: false
}

// getters
const getters = {
  isEnabledNavigationDrawer (state: any) {
    return state.navigationDrawer
  },
}

// actions
const actions = {
  changeNavigationDrawer ({commit}: any, payload: boolean) {
    commit('setNavigationDrawer', payload)
  },
}

// mutations
const mutations = {
  setNavigationDrawer (state: any, payload: boolean) {
    state.navigationDrawer = payload
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
