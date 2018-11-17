// initial state
const state = {
  sampleList: []
}

// getters
const getters = {
  sampleList (state: any) {
    return state.sampleList
  }
}

// actions
const actions = {
  getSampleList ({ commit }: any) {
    const colorList: object[] = [
      {
        colorName: 'red'
      },
      {
        colorName: 'green'
      },
      {
        colorName: 'blue'
      },
    ]
    commit('setSampleList', colorList)
  }
}

// mutations
const mutations = {
  setSampleList (state: any, colorList: object[]) {
    state.sampleList = colorList
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
