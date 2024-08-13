import { createStore } from 'vuex'
import auth from './auth'
import parameters from './parameters'

const store = createStore({
	modules: {
		auth,
		parameters
	},
})

export default store