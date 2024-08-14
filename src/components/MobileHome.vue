<template>
	<div class="mobile-home">
		<!-- Navbar -->
		<nav class="navbar">
			<div class="logo">
				<img src="../assets//icon.png" alt="Codeway Logo" />
			</div>

			<div class="profile" @click.stop="toggleDropdown">
				<img v-if="!isDropdownVisible" src="../assets/profile-icon.png" alt="Profile Logo" />
				<div v-else class="dropdown-menu"> 
					<button @click.stop="signOut" class="dropdown-item">Sign Out</button>
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

			<!-- Add New Parameter -->
			<div class="param-box add-new">
				
				<div class="row">
					<input v-model="newParam.key" type="text" placeholder="New Parameter" />
				</div>

				<div class="row">
					<input v-model="newParam.key" type="text" placeholder="Value" />
				</div>

				<div class="row">
					<input v-model="newParam.key" type="text" placeholder="New Description" />
				</div>

				<div class="row actions">
					<button @click="createParameter" class="add-btn">ADD</button>
				</div>
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
	methods: {
		toggleDropdown() {
			this.isDropdownVisible = !this.isDropdownVisible
		},
		hideDropdown() {
			if (this.isDropdownVisible) {
				this.isDropdownVisible = false
			}
		},
		handleClickOutside(event) {
			const profileEl = this.$el.querySelector('.profile')
			if (!profileEl.contains(event.target)) {
				this.hideDropdown()
			}
		}
	}
}
</script>

<!-- @TODO: Handle CSS -->
<style scoped>
.mobile-home {
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	font-family: 'Gilmer';
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

.actions {
	display: flex;
	justify-content: center;
	gap: 5px;
}

button {
	border: none;
	border-radius: 4px;
	color: white;
	font-weight: bolder;
	width: min-content;
	align-self: center;
	margin-top: 5px;
	padding: 3px 8px;
}

.edit-btn {
	background: linear-gradient(to bottom, rgb(64, 115, 236), rgb(60, 104, 236));
}

.delete-btn {
	background: linear-gradient(to bottom, rgb(225, 85, 96), rgb(220, 67, 50));
}

.add-btn {
	background: linear-gradient(to bottom, rgb(92, 200, 212), rgb(73, 162, 228));
}

.add-new .row {
	display: flex;
	flex-direction: column;
	width: 100%;
}

.add-new input {
	padding: 5px;
	border: 1px solid #444;
	border-radius: 4px;
	background: none;
}

.row input {
	width: 100%;
	padding: 5px;
	border: 1px solid #444;
	border-radius: 4px;
	background: none;
	color: white;
	font-family: 'Gilmer';
}
</style>