<template>
	<div class="mobile-home">
		<!-- Navbar -->
		<nav class="navbar">
			<div class="logo">
				<img src="../assets//icon.png" alt="Codeway Logo" />
			</div>

			<div class="profile" @mouseenter="showDropdown" @mouseleave="hideDropdown">
				<img src="../assets/profile-icon.png" alt="Profile Logo" />
				<!-- @TODO: check issue below -->
				<div class="dropdown-menu"> 
					<button @click="signOut" class="dropdown-item">Sign Out</button>
				</div>
			</div>
		</nav>
		<div class="rows-container">
			<div class="param-box" v-for="param in sortedParameters" :key="param.id">
				<!-- param details for mobile layout -->
			</div>
			<div class="param-box add-new">
				<!-- add new param form for mobile layout -->
			</div>
		</div>
	</div>
</template>

<script>
import { useParameterLogic } from '@/composables/useParameterLogic'

export default {
	name: 'MobileHomePage',
	setup() {
		const {
			sortOrder,
			sortedParameters,
			newParam,
			createParameter,
			enableEdit,
			deleteParameter,
			submitEdit,
			editingParamId,
			editedParam,
			toggleSort,
			isDropdownVisible,
			signOut,
		} = useParameterLogic()

		return {
			sortOrder,
			sortedParameters,
			newParam,
			createParameter,
			enableEdit,
			removeParameter: deleteParameter,
			submitEdit,
			editingParamId,
			editedParam,
			toggleSort,
			isDropdownVisible,
			signOut,
		}
	},
}
</script>

<!-- @TODO: Handle CSS -->
<style scoped>
.mobile-home {
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	flex-direction: row;
}

.navbar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: min-content;
	padding: 10px;
	border: 1px solid red;
}

.logo img {
	height: 30px;
}

.profile {
	position: relative;
	display: flex;
	/* padding: 0 25px; */
	cursor: pointer;
}

.profile img {
	height: 45px;
}

</style>