export const state = () => ({
    skins: [],
    loadingStatus: false
})

export const mutations = {
    setSkins: (state, skins) => ( state.skins = skins ),
    loadingStatus: (state, status) => ( state.loadingStatus = status )
}

export const actions = {
    async getFromApi({ commit }) {
        commit('loadingStatus', true);
        await fetch('https://apicovers.xyz/products')
            .then(response => response.json())
            .then(data => {
                commit('loadingStatus', false);
                commit('setSkins', data);
            });
    }
}

export const getters = {
    getSkins: (state) => state.skins,
    loadingStatus: (state) => state.loadingStatus
}
