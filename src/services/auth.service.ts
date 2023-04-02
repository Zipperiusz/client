import { useLocalStorage } from "@vueuse/core";
import axios from "axios";
import { computed } from "vue";

export class AuthService {
    private token = useLocalStorage('token', '');
    private name = useLocalStorage('name', '');

    public isLoggedIn = computed(() => !!this.token.value);

    public login(email: string, password: string): Promise<string> {
        return axios.post(`${process.env.VUE_APP_API_URL}/Auth/login`, { email, password }).then((response) => {
            this.setToken(response.data.data);
            this.setName(response.data.name)

            return response.data.token;
        })
    }

    public register(name:string, email: string, password: string): Promise<string> {
        return axios.post(`${process.env.VUE_APP_API_URL}/Auth/Register`, { name, email, password }).then((response) => {
            return response.data
        })
    }

    public setToken(token: string) {
        this.token.value = token;
    }
    public setName(name:string){
        this.name.value=name;
    }

    public getName(){
        return this.name.value;
    }

    public getToken(): string {
        return this.token.value;
    }
}

export const authService = new AuthService();