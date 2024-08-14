<template>
	<div class="signin-container">
		<img src="../assets/icon.png" alt="Codeway Logo" class="logo" />
		<div class="signin-box">
			<h2>Please sign in</h2>
			<form @submit.prevent="signIn">
				<div class="input-container">
					<input type="email" placeholder="E-mail address" v-model="email" required />
					<input type="password" placeholder="Password" v-model="password" required />
				</div>
				<div class="button-container">
					<button type="submit">Sign in</button>
				</div>
			</form>
			<div class="copyright">
				<p>Codeway © 2021</p>
			</div>
		</div>
	</div>
</template>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

export default {
	name: 'SignIn',
	setup() {
		const email = ref('')
		const password = ref('')
		const router = useRouter()
		const store = useStore()

		const signIn = async () => {
			try {
				console.log('Attempting to sign in with email:', email.value)
				await store.dispatch('auth/signIn', { email: email.value, password: password.value })
				console.log('Sign in successful, redirecting...')
				router.push('/')
			} catch (error) {
				console.error('Authentication error:', error)
				alert('Failed to sign in. Please check your credentials and try again.')
			}
		}

		return {
			email,
			password,
			signIn,
		}
	},
}
</script>

<style scoped>
.signin-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-family: 'Gilmer', sans-serif;
	height: auto;
	width: auto;
	margin-bottom: 100px;
}

.logo {
	max-width: 250px;
	margin-bottom: 20px;
}

h2 {
	color: rgb(50, 50, 91);
	margin-bottom: 10px;
	font-size: 24px;
}

.signin-box {
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 10px;
	padding: 20px;
	text-align: center;
	min-width: 30vw;
}

.input-container {
	display: flex;
	flex-direction: column;
	width: 100%;
	min-width: 15vw;
}

input {
	width: 100%;
	padding: 12px 8px;
	border: 1px solid rgb(47, 54, 83);
	background: none;
	color: rgb(110, 116, 123);
}

input:nth-child(1) {
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
}

input:nth-child(2) {
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
}

input:focus {
	border-color: rgb(216, 92, 204);
	outline: none;
}

input::placeholder {
	font-size: 16px;
}

.button-container {
	widows: 100%;
	margin-top: 10px;
}

button {
	background: linear-gradient(to bottom, rgb(82, 102, 217), rgb(61, 78, 183));
	width: 100%;
	color: #fff;
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	font-family: 'Gilmer', sans-serif;
	font-weight: bold;
}

.copyright {
	color: #777;
	margin-top: 6vh;
	font-size: 1rem;
}

/* @TODO: Implement media queries */
/* Media queries for responsiveness */
@media (min-width: 576px) {
}

@media (max-width: 768px) {
	.logo {
		max-width: 150px;
		margin-bottom: 20px;
	}
	.copyright {
		font-size: 0.8rem;
		text-wrap: nowrap;
	}

	h2 {
		font-size: 20px;
		text-wrap: nowrap;
	}
}
</style>
