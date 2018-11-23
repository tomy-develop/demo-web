// initial state
const state = {
  routes: [
    {
      name: 'home',
      icon: 'dashboard',
      title: 'DASHBOARD',
    },
  ]
}

// getters
const getters = {
  routes (state: any) {
    return state.routes
  },
}

export default {
  namespaced: true,
  state,
  getters,
}
