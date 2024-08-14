<template>
	<div class="web-home">
		<nav class="navbar">
			<!-- Navbar content here -->
		</nav>
		<div class="header">
			<!-- Header row for web layout -->
		</div>
		<div class="rows-container">
			<div class="row" v-for="param in sortedParameters" :key="param.id">
				<!-- Parameter details for web layout -->
			</div>
			<div class="row add-new">
				<!-- Add new parameter form for web layout -->
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
/* Add web-specific styles here */
</style>
