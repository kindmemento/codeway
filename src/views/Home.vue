<template>
	<div class="home">
		<nav class="navbar">
			<div class="logo">
				<img src="../assets/icon.png" alt="Codeway Logo" />
			</div>
			<div class="profile">
				<!-- @TODO: Replace with profile logo -->
				<img src="../assets/icon.png" alt="Profile Logo" />
			</div>
		</nav>

		<div class="body-container">
			<div class="header">
				<div class="column">Parameter Key</div>
				<div class="column">Value</div>
				<div class="column">Description</div>
				<div class="column" v-on:click="toggleSort">
					Create Date
					<span v-if="sortOrder === 'desc'">⬇️</span>
					<span v-else>⬆️</span>
				</div>
				<div class="column"></div>
			</div>

			<div class="rows-container">
				<div class="row" v-for="param in sortedParameters" :key="param.id">
					<div class="column">{{ param.key }}</div>
					<div class="column">{{ param.value }}</div>
					<div class="column">{{ param.description }}</div>
					<div class="column">
						{{ new Date(param.created._seconds * 1000).toLocaleDateString() }}
					</div>
					<div class="column actions">
						<button class="edit-btn">Edit</button>
						<button class="delete-btn">Delete</button>
					</div>
				</div>
			</div>

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
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	name: "Home",
	data() {
		return {
			newParam: {
				key: '',
				value: '',
				description: '',
			},
			sortOrder: "desc", // Sort params in descending order by default
		}
	},
	computed: {
		...mapGetters('parameters', ['parameters']),
		sortedParameters() {
			let sortedParams = [...this.parameters]
			sortedParams.sort((a, b) => {
				if (this.sortOrder === "desc") {
					return b.created._seconds - a.created._seconds
				} else {
					return a.created._seconds - b.created._seconds
				}
			})
			return sortedParams
		},
	},
	async mounted() {
		this.$store.dispatch('parameters/fetchParameters')
	},
	methods: {
		...mapActions('parameters', ['createParameter']),
		async addParameter() {
			if (this.newParam.key && this.newParam.value && this.newParam.description) {
				await this.createParameter(this.newParam)
				this.newParam = { key: '', value: '', description: '' } // To reset the form
			}
		},
		toggleSort() {
			this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc"
		},
	},
}
</script>

<style scoped>
.home {
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

.navbar img {
	height: 30px;
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
	font-family: "Gilmer";
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
	flex: 1;
	text-align: left;
	font-size: 16px;
	font-family: "Gilmer";
}

.column .actions {
	display: flex;
	justify-content: space-between;
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

.add-row-container {
	display: flex;
	border-radius: 4px;
}

.add-row-container .column {
	flex: 1;
}

.add-row-container .description-column {
	flex: 2;
}

.input-container {
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
	font-family: "Gilmer";
}
</style>
