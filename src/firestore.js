import { collection, getDocs } from "firebase/firestore"
import { db } from "./firebase"

const getParameters = async () => {
	const querySnapshot = await getDocs(collection(db, "parameters"))
	const params = []
	querySnapshot.forEach(doc => {
		params.push({ id: doc.id, ...doc.data() })
	})
	return params
}

export { getParameters }
