import apiRequest from "../plugins/apiRequest";
import {getAuth, getIdToken} from "firebase/auth";

export default async () => {
    const auth = getAuth()
    const currentUser = auth.currentUser
    const idToken = await getIdToken(currentUser, true)

    return apiRequest(idToken, '/transactions')
}