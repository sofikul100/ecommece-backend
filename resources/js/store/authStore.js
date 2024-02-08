import { defineStore } from "pinia"
import axios from "axios"
import { useToast } from "vue-toastification";
import Cookies from 'js-cookie';


const toast = useToast();


export const authStore = defineStore({
    id: 'auth',
    state: () => ({
        user: null,
        token: null,
        isLoading: false,
        registerError: null,
        loginError: null,
    }),



    getters: {
        authUser: (state) => state.user
    },


    actions: {
        async register(name, phone, email, password) {

            try {
                this.isLoading = true;
                const response = await axios.post(`http://127.0.0.1:8000/api/register`, {
                    name: name.value,
                    phone: phone.value,
                    email: email.value,
                    password:password.value,
                    password_confirmation:password.value
                });
                if(response.data.status === 201){
                    this.isLoading = false;
                    this.user = response.data.user;
                    this.token = response.data.token;
                    Cookies.set('token', response.data.token, { expires: 7 });
                    Cookies.set('user', JSON.stringify(response.data.user), { expires: 7 });
                    this.router.push('/dashboard');
                    toast.success(response.data.message);
                }
            } catch (e) {
                this.isLoading =false;
                this.registerError = e.response.data.errors;
            }finally{
                this.isLoading = false;
            }


        },


       async login(email, password) {
            try{
                this.isLoading = true;
                const response = await axios.post(`http://127.0.0.1:8000/api/login`, {
                email: email.value,
                password:password.value,
            });

            


            if(response.data.status === 401){
                toast.error(response.data.message);
            }

            if(response.data.status === 200){
                if(response.data.user.role === 'admin'){
                    this.isLoading = false;
                    this.user = response.data.user;
                    this.token = response.data.token;
                    Cookies.set('token', response.data.token, { expires: 7 });
                    Cookies.set('user', JSON.stringify(response.data.user), { expires: 7 });
                    this.router.push('/dashboard');
                    toast.success(response.data.message);
                }else{
                    toast.error('Sorry.You are not a admin.');
                }
                
            }

            }catch(e){
                this.loginError = e.response.data.errors;
                this.isLoading = false;
            }finally{
                this.isLoading = false;
            }
        },


        async logout(){
            try {
                const token = Cookies.get('token');
                if (token) {
                   const headers = {
                      Authorization: `Bearer ${token}`,
                   };
    
                   const response = await axios.post('http://127.0.0.1:8000/api/logout', null, { headers });
                   if (response.data.status === 200) {
                      Cookies.remove('token');
                      Cookies.remove('user');
                      this.user = null;
                      this.token = null;
                      this.router.push('/');
                      toast.success(response.data.message);
                   }
                }
             } catch (e) {
                console.log(e)
             }
        }




        
    }
})