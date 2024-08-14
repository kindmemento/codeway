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

		<!-- Parameter Boxes -->
		<div class="rows-container">
			<div class="param-box" v-for="param in sortedParameters" :key="param.id">
				
				<div class="row">
					<input
							v-if="param.id === editingParamId"
							v-model="editedParam.key"
							type="text"
							:placeholder="param.key"
						/>
						<span v-else>
							<span class="key">Parameter Key:</span>
							{{ param.key }}
						</span>
				</div>

				<div class="row">
					<input
							v-if="param.id === editingParamId"
							v-model="editedParam.value"
							type="text"
							:placeholder="param.value"
						/>
						<span v-else>
							<span class="key">Value:</span>
							{{ param.value }}
						</span>
				</div>

				<div class="row">
					<input
							v-if="param.id === editingParamId"
							v-model="editedParam.description"
							type="text"
							:placeholder="param.description"
						/>
						<span class="description-span" v-else>
							<span class="key">Description:</span>
							{{ param.description }}
						</span>
				</div>

				<div class="row">
					<span class="key">Create Date:</span>
					{{ new Date(param.created._seconds * 1000).toLocaleString() }}
				</div>

				<div class="actions">
					<button
							v-if="param.id === editingParamId"
							@click="submitEdit(param.id)"
							class="edit-btn"
						>
							Submit
						</button>
						<button v-else @click="enableEdit(param)" class="edit-btn">Edit</button>
						<button @click="removeParameter(param.id)" class="delete-btn">Delete</button>
				</div>

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
	flex-direction: column;
}

.navbar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: min-content;
	padding: 10px;
}

.logo img {
	height: 30px;
}

.profile {
	position: relative;
	display: flex;
	cursor: pointer;
}

.profile img {
	height: 45px;
}

.rows-container {
	display: flex;
	flex-direction: column;
	padding: 10px 15px;
	row-gap: 10px;
}

.param-box {
	display: flex;
	flex-direction: column;
	padding: 5px 10px;
	border: 1px solid white;
	border-radius: 12px;
}

.key {
	font-weight: bolder;
	color: white
}

</style>