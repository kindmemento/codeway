<template>
	<div class="web-home">
		<!-- Navbar -->
		<nav class="navbar">
			<div class="logo">
				<img src="../assets//icon.png" alt="Codeway Logo" />
			</div>

			<div class="profile" @mouseenter="showDropdown" @mouseleave="hideDropdown">
				<img src="../assets/profile-icon.png" alt="Profile Logo" />
				<div v-if="isDropdownVisible" class="dropdown-menu">
					<button @click="signOut" class="dropdown-item">Sign Out</button>
				</div>
			</div>
		</nav>

		<!-- Page Body -->
		<div class="body-container">
			<!-- Header -->
			<div class="header">
				<div class="column key-column">Parameter Key</div>
				<div class="column value-column">Value</div>
				<div class="column description-column">Description</div>
				<div class="column date-column" v-on:click="toggleSort">
					Create Date
					<span v-if="sortOrder === 'desc'">⬇️</span>
					<span v-else>⬆️</span>
				</div>
				<div class="column"></div>
			</div>

			<!-- Rows -->
			<div class="rows-container">
				<div class="row" v-for="param in sortedParameters" :key="param.id">
					<div class="column">
						<input
							v-if="param.id === editingParamId"
							v-model="editedParam.key"
							type="text"
							:placeholder="param.key"
						/>
						<span v-else>{{ param.key }}</span>
					</div>
					<div class="column">
						<input
							v-if="param.id === editingParamId"
							v-model="editedParam.value"
							type="text"
							:placeholder="param.value"
						/>
						<span v-else>{{ param.value }}</span>
					</div>
					<div class="column description-column">
						<input
							v-if="param.id === editingParamId"
							v-model="editedParam.description"
							type="text"
							:placeholder="param.description"
						/>
						<span class="description-span" v-else>{{ param.description }}</span>
					</div>
					<div class="column">
						{{ new Date(param.created._seconds * 1000).toLocaleString() }}
					</div>

					<div class="column actions">
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
				<div class="add-row-container">
					<div class="column">
						<div class="input-container">
							<input v-model="newParam.key" type="text" placeholder="New Parameter" />
						</div>
					</div>
					<div class="column">
						<div class="input-container">
							<input v-model="newParam.value" type="text" placeholder="Value" />
						</div>
					</div>
					<div class="column description-column">
						<div class="input-container">
							<input v-model="newParam.description" type="text" placeholder="New Description" />
						</div>
					</div>
					<div class="column actions">
						<button @click="addParameter" class="add-btn">ADD</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { useParameterLogic } from '@/composables/useParameterLogic'

export default {
	name: 'WebHomePage',
	setup() {
		const {
			sortedParameters,
			newParam,
			createParameter,
			enableEdit,
			deleteParameter,
			editingParamId,
			editedParam,
			isDropdownVisible,
			showDropdown,
			hideDropdown,
			toggleSort,
		} = useParameterLogic()

		return {
			sortedParameters,
			newParam,
			createParameter,
			enableEdit,
			deleteParameter,
			editingParamId,
			editedParam,
			isDropdownVisible,
			showDropdown,
			hideDropdown,
			toggleSort,
		}
	},
}
</script>

<style scoped>
.web-home {
	width: 100vw;
	height: 100vh;
	margin: 0;
	padding: 10px 2vw 10px 2vw;
	display: flex;
	justify-content: center;
	flex-direction: column;
}

.navbar {
	display: flex;
	justify-content: space-between;
	width: 100%;
	top: 0;
	left: 0;
	padding: 10px;
}

.logo img {
	height: 30px;
}

.profile {
	position: relative;
	display: flex;
	padding: 0 25px;
	cursor: pointer;
}

.profile img {
	height: 45px;
}

.dropdown-menu {
	display: flex;
	justify-content: center;
	position: absolute;
	top: 100%;
	left: 0;
	border: 1px solid #ccc;
	background: white;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	z-index: 1000;
	width: 100%;
	padding: 5px 0;
}

.dropdown-item {
	border: none;
	background: transparent;
	text-align: center;
	justify-content: center;
	cursor: pointer;
}

.body-container {
	display: flex;
	flex: 1;
	flex-direction: column;
	padding: 2rem;
	color: #ffffff;
}

.header {
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;
}

.header .column {
	color: rgb(124, 138, 164);
	font-size: 28px;
	font-family: 'Gilmer';
	flex: 1;
	text-align: left;
	border-radius: 4px;
}

.header span {
	cursor: pointer;
}

.rows-container {
	display: flex;
	flex-direction: column;
}

.row {
	display: flex;
	justify-content: space-between;
	border-radius: 4px;
}

.row .column {
	display: flex;
	align-items: center;
	flex: 1;
	text-align: left;
	font-size: 16px;
	font-family: 'Gilmer';
}

.description-column {
	/* border: 1px solid red; */
	margin-right: 20px;
}

.description-span {
	display: flex;
	flex: 2;
	/* white-space: nowrap; */
	overflow: hidden;
	text-overflow: ellipsis;
	display: inline-block;
	max-width: 100%;
}

.column .actions {
	display: flex;
}

.edit-btn,
.delete-btn,
.add-btn {
	padding: 5px 10px;
	margin: 5px;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	color: white;
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	font-weight: bold;
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

.add-row-container  {
	display: flex;
	border-radius: 4px;
}

.add-row-container .column {
	display: flex;
	align-items: center;
	flex: 1;
}

.add-row-container .description-column {
	flex: 2;
}

.input-container {
	display: flex;
	flex: 1;
	padding: 0.5rem 2rem 0 0;
}

.add-row-container input {
	width: 100%;
	padding: 0.5rem;
	border: 1px solid #444;
	border-radius: 4px;
	background: none;
	color: white;
	font-family: 'Gilmer';
}

@media only screen and (max-device-width: 576px) {
	.home {
		display: flex;
		justify-content: center;
		flex-direction: column;
		width: 100vw;
		height: 100vh;
		padding: 10px 2vw 10px 2vw;
		border: 1px solid red;
	}

	.navbar {
		border: 1px solid red;
		display: flex;
		align-items: center;
		height: min-content;
	}

	.logo img {
		height: 35px;
	}

	.profile {
		display: flex;
	}

	.profile img {
		height: 45px;
	}

	.dropdown-menu {
		display: flex;
		border: 1px solid #ccc;
		background: white;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.dropdown-item {
		border: none;
		background: transparent;
		text-align: center;
		justify-content: center;
		cursor: pointer;
	}

	.body-container {
		display: flex;
		flex-direction: row;
	}
}
</style>
