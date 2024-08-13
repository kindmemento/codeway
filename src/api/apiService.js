import axios from 'axios'
import { getIdToken } from '@/auth/firebase'

const API_TOKEN = import.meta.env.VITE_API_TOKEN
const API_BASE_URL = import.meta.env.VITE_NEURALBASE_BASE_URL

const apiClient = axios.create({
	baseUrl: API_BASE_URL,
	headers: {
		'Content-Type': 'application/json'
	}
})

apiClient.interceptors.request.use(async (config) => {
	const idToken = await getIdToken()
	if (config.method === 'put') {
		// For update requests, send Firebase ID Token in authorization header
		if (idToken) {
			config.headers.Authorization = `Bearer ${idToken}`
		}
	} else {
		// For create, read and delete operations, send predefined API Token
		config.headers.Authorization = `Bearer ${API_TOKEN}`
	}
	return config
}, (error) => {
	return Promise.reject(error)
})
