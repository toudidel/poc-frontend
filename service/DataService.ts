import {useAuthStore} from '~/stores/auth'
import axios from "axios";

export class DataService {

    private endpoint: string;

    constructor() {
        const config = useRuntimeConfig()
        this.endpoint = config.public.apiBaseUrl
    }

    protected getEndpointUrl() {
        return this.endpoint
    }

    protected async get(url: string) {
        const authStore = useAuthStore()
        return await axios.get(`${this.endpoint}${url}`, {
            headers: {
                Authorization: `Bearer ${authStore.accessToken}`,
            },
        });
    }
}