export const state = () => ({
    skins: []
})

export const mutations = {
    setSkins: (state, skins) => ( state.skins = skins )
}

export const actions = {
    async getFromApi({ commit }) {
        await fetch('https://apicovers.xyz/products')
            .then(response => response.json())
            .then(data => commit('setSkins', data));
    }
}

export const getters = {
    getSkins: (state) => state.skins
}
