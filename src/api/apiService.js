import axios from 'axios'
import { getIdToken } from '@/auth/firebase'

const API_TOKEN = import.meta.env.VITE_API_TOKEN
const API_BASE_URL = import.meta.env.VITE_NEURALBASE_BASE_URL

const apiClient = axios.create({
	baseUrl: API_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
})

apiClient.interceptors.request.use(
	async config => {
		try {
			if (config.method === 'put') {
				// For update requests, attach the Firebase ID token
				const token = await getIdToken()
				if (token) {
					config.headers.Authorization = `Bearer ${token}`
				}
			} else {
				// For create, read, and delete operations, attach the predefined API token
				config.headers.Authorization = `Bearer ${API_TOKEN}`
			}

			// @TODO: Log for development - remove before deployment
			console.log(`Authorization header set with token: ${token || API_TOKEN}`)
		} catch (error) {
			console.error('Error attaching token to request:', error)
		}

		return config
	},
	error => {
		return Promise.reject(error)
	}
)

export default {
	getAllParameters() {
		return apiClient.get('/panel/parameters')
	},
	createParameter(data) {
		return apiClient.post('/panel/parameters', data)
	},
	updateParameter(id, data) {
		return apiClient.put(`/panel/parameters/${id}`, data)
	},
	deleteParameter(id) {
		return apiClient.delete(`/panel/parameters/${id}`)
	},
}
