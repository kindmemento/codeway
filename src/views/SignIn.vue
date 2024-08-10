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
		name: "SignIn"
	}
</script>