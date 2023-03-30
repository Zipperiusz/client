import { useLocalStorage } from "@vueuse/core";
import axios from "axios";
import { computed } from "vue";

export class AuthService {
    private token = useLocalStorage('token', '');

    public isLoggedIn = computed(() => !!this.token.value);

    public login(email: string, password: string): Promise<string> {
        return axios.post(`${process.env.VUE_APP_API_URL}/Auth/login`, { email, password }).then((response) => {
            this.setToken(response.data.data);

            return response.data.data;
        })
    }

    public setToken(token: string) {
        this.token.value = token;
    }

    public getToken(): string {
        return this.token.value;
    }
}

export const authService = new AuthService();