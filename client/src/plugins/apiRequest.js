import {apiClient} from './apiClient.js'

export default async (token, path, method= null, body = null, params = null, headers = null) => {
    const options = {
        data: body || null,
        params: params || {},
        method: method || 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    if (headers) {
        options.headers = {
            ...options.headers,
            ...headers
        }
    }

    return apiClient(path, options)
}