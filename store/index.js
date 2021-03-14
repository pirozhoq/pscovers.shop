export const state = () => ({
	isMenuActive: false
})

export const mutations = {
	menuToggle(state) {
		state.isMenuActive = !state.isMenuActive;
	}
}
