import { auth } from '@/auth/firebase'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'

export default {
	namespaced: true,
	state: {
		user: null,
	},
	mutations: {
		setUser(state, user) {
			state.user = user
		},
		clearState(state) {
			state.user = null
		}
	},
	actions: {
		async signIn({ commit }, { email, password }) {
			try {
				const userCredential = await signInWithEmailAndPassword(auth, email, password)
				commit('setUser', userCredential.user)
			} catch (error) {
				console.error('Error during sign in:', error)
				throw error
			}
		},
		async fetchUser({ commit }) {
			const user = auth.currentUser
			commit('setUser', user)
		},
		async signOut({ commit }) {
			try {
				await signOut(auth)
				commit('clearState')
			} catch (error) {
				console.error('Error during sign out:', error)
				throw error
			}
		},
	},
	getters: {
		isAuthenticated: state => !!state.user,
		user: state => state.user,
	},
}