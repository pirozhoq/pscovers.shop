export const state = () => ({
    skins: []
})

export const mutations = {
    setSkins(state, payload) {
        state.skins = payload
    }
}

export const actions = {
    async getFromApi(context) {
        let skins = await fetch('https://apicovers.xyz/products', {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE2MjA0MDc2LCJleHAiOjE2MTg3OTYwNzZ9.7YZxLyBQpw8IW9KZtb3G2nc1KEf_J_CG2Iwf3ct7Bho'
            }
        }).then((response) => response.json());
        context.commit('setSkins', skins);
    }
}
