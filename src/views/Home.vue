<template>
	<div>
		<MobileHome v-if="isMobile" />
		<WebHome v-else />
	</div>
</template>

<script>
import MobileHome from '@/components/MobileHome.vue'
import WebHome from '@/components/WebHome.vue'
import { useParameterLogic } from '@/composables/useParameterLogic'

export default {
	name: 'Home',
	components: {
		MobileHome,
		WebHome,
	},
	setup() {
		const { isMobile } = useParameterLogic()

		return {
			isMobile,
		}
	},
}
</script>