import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useStore } from 'vuex'

export function useParameterLogic() {
	const store = useStore()

	// State
	const sortOrder = ref('desc')
	const newParam = ref({ key: '', value: '', description: '' })
	const editingParamId = ref(null)
	const editedParam = ref({ key: '', value: '', description: '' })
	const isDropdownVisible = ref(false)
	const isMobile = ref(window.innerWidth <= 768)

	// Getters
	const parameters = computed(() => store.getters['parameters/parameters'])
	const sortedParameters = computed(() => {
		let sortedParams = [...parameters.value]
		sortedParams.sort((a, b) => {
			if (sortOrder.value === 'desc') {
				return b.created._seconds - a.created._seconds
			} else {
				return a.created._seconds - b.created._seconds
			}
		})
		return sortedParams
	})

	// Actions
	const createParameter = async () => {
		if (newParam.value.key && newParam.value.value && newParam.value.description) {
			await store.dispatch('parameters/createParameter', newParam.value)
			newParam.value = { key: '', value: '', description: '' } // Reset the form
		}
	}

	const deleteParameter = id => {
		store.dispatch('parameters/deleteParameter', id)
	}

	const updateParameter = async id => {
		await store.dispatch('parameters/updateParameter', { id, data: editedParam.value })
		editingParamId.value = null // Disable editing mode
	}

	const toggleSort = () => {
		sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
	}

	const enableEdit = param => {
		editingParamId.value = param.id
		editedParam.value = { ...param }
	}

	const showDropdown = () => {
		isDropdownVisible.value = true
	}

	const hideDropdown = () => {
		isDropdownVisible.value = false
	}

	const checkMobile = () => {
		isMobile.value = window.innerWidth <= 768
	}

	const handleClickOutside = event => {
		// Handle clicks outside the dropdown
		if (!event.target.closest('.profile')) {
			hideDropdown()
		}
	}

	onMounted(() => {
		store.dispatch('parameters/fetchParameters')
		document.addEventListener('click', handleClickOutside)
		window.addEventListener('resize', checkMobile)
	})

	onBeforeUnmount(() => {
		document.removeEventListener('click', handleClickOutside)
		window.removeEventListener('resize', checkMobile)
	})

	return {
		sortOrder,
		newParam,
		editingParamId,
		editedParam,
		isDropdownVisible,
		isMobile,
		parameters,
		sortedParameters,
		createParameter,
		deleteParameter,
		updateParameter,
		toggleSort,
		enableEdit,
		showDropdown,
		hideDropdown,
		checkMobile,
	}
}
