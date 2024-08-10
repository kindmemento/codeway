<template>
	<div class="signin-container">
		<div class="signin-box">
			<img src="../assets/icon.png" alt="Codeway Logo" class="logo" />
			<h2>Please sign in</h2>
			<form @submit.prevent="signIn">
				<input type="email" placeholder="E-mail address" v-model="password" required />
				<input type="password" placeholder="Password" v-model="password" required />
				<button type="submit">Sign in</button>
			</form>
			<p>Codeway © 2021</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "SignIn",
		data() {
			return {
				email: '',
				password: ''
			};
		},
		methods: {
			signIn() {
				// @TODO: Handle sign-in logic
				console.log("signing in")
			}
		}
	}
</script>

<style scoped>
.signin-container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: linear-gradient(to bottom, #141E30, #243B55);
}

.signin-box {
	width: 300px;
	padding: 20px;
	background-color: #1E1E1E;
	border-radius: 8px;
	text-align: center;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.logo {
	width: 100px;
	margin-bottom: 20px;
}

h2 {
	margin-bottom: 20px;
	color: #ccc;
}

form {
	display: flex;
	flex-direction: column;
}

input {
	margin-bottom: 15px;
	padding: 10px;
	border-radius: 4px;
	border: 1px solid #444;
	background-color: #2c2c2c;
	color: #fff;
}

input::placeholder {
	color: #888;
}

button {
	padding: 10px;
	background-color: #3B82F6;
	border: none;
	border-radius: 4px;
	color: #fff;
	font-weight: bold;
	cursor: pointer;
	transition: background-color 0.3s;
}

button:hover {
	background-color: #2563EB;
}

p {
	margin-top: 20px;
	color: #777;
	font-size: 0.8rem;
}
</style>