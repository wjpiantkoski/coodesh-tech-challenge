import {apiClient} from './apiClient.js'

export default async (token: string, path: string, method?: string, body?: any, params?: any): Promise<any> => {
    const options = {
        data: body || null,
        params: params || {},
        method: method || 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await apiClient(path, options)

    return response
}