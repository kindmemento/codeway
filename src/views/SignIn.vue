<template>
	<div class="signin-container">
		<img src="../assets/icon.png" alt="Codeway Logo" class="logo" />
		<div class="signin-box">
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

<!-- @TODO:
	Enhance styling to
	- match sample
	- be responsive
-->
<style scoped>
.signin-container {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	border: 5px solid green;
}

.logo {
	width: 14.5vw;
	height: 16.5vh;
	margin-bottom: 3vh;
}

.signin-box {
	width: 16.8vw;
	height: 22.1vh;
	padding: 2vh;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 3px solid red;
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