<template>
	<div class="mobile-home">
		<div class="navbar">
			<!-- navbar content -->
		</div>
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

<!-- @TODO: Handle CSS -->
<style scoped>

</style>