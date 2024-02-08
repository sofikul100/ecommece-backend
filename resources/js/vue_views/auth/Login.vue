<script setup>
import {computed, ref} from "vue"
import {storeToRefs} from "pinia"
import {authStore} from "../../store/authStore"

const {login}  = authStore();
const {loginError,isLoading} = storeToRefs(authStore());

//=== show hide password logic here====//
const showPassword = ref(false);

const passwordType = computed(() => showPassword.value ? 'text' : 'password')



const togglePasswordVisibility = () =>{
     showPassword.value =!showPassword.value
}


//==== email and password =======//
const email = ref('')
const password = ref('')

//------copy1 funciton implementation ------//

const copy1 = () =>{
      const copied1Email = 'example@example.com';
      const copied1Password = '123456';

      email.value = copied1Email;
      password.value = copied1Password;
}

//------copy2 funciton implementation ------//
const copy2 = () =>{
      const copied2Email = 'admin@gmail.com';
      const copied2Password = '12345678';

      email.value = copied2Email;
      password.value = copied2Password;
}


//------copy2 funciton implementation ------//
const copy3 = () =>{
      const copied3Email = 'manager@gmail.com';
      const copied3Password = 'manager';

      email.value = copied3Email;
      password.value = copied3Password;
}





const loginHander = () => {
    login(email,password)
}







</script>




<template>

  <!-- Content Wrapper -->
  <div class="login-wrapper">
    <div class="container-center">
      <div class="panel panel-bd panel-primary" id="guest_card">
        <div class="panel-heading">
          <div id="error_message_content"></div>
          <div class="view-header">
            <div class="header-icon">
              <i class="pe-7s-unlock text-white" style="color: #3f9ef2"></i>
            </div>
            <div class="header-title">
              <h3>Login</h3>
              <small
                ><strong>Please enter your credentials to login.</strong></small
              >
            </div>
          </div>
        </div>
        <div class="panel-body">
          <form @submit.prevent="loginHander" method="POST" style="margin-bottom: 10px">
            <div class="form-group">
              <label for="username">Email:</label>
              <input
                type="email"
                v-model="email"
                class="form-control"
                placeholder="example@gmail.com"
                id="email"
                name="email"
              />
              <div v-if="loginError?.email" style="margin-top:4px">
                   <p class="text-danger">{{loginError?.email[0]}}</p>   
              </div>
            </div>
            <div class="form-group">
              <label for="password">Password:</label>
              <div class="password_input_content">
                <input
                  :type="passwordType"
                  class="form-control"
                  placeholder="********"
                  v-model="password"
                  id="password"
                  name="password"
                />
                <div class="eye_content">
                  <span class="input-group-text" @click="togglePasswordVisibility" v-if="showPassword">
                    <i class="fa fa-eye-slash" aria-hidden="true"></i>
                  </span>
                  <span class="input-group-text" @click="togglePasswordVisibility" v-else>
                    <i class="fa fa-eye"></i>
                  </span>
                </div>
              </div>
               <div v-if="loginError?.email" style="margin-top:4px">
                   <p class="text-danger">{{loginError?.email[0]}}</p>   
              </div>
            </div>
            <button type="submit" class="btn btn-labeled btn-primary m-b-5">
              <span class="btn-label"> <i class="fa fa-spinner" aria-hidden="true" v-if="isLoading"></i>
                   <i class="fa fa-sign-in" v-else></i></span>{{ isLoading ? "Login....." : 'Login'}}
            </button>
          </form>

          <div class="create__acccount__text">
            <span
              >Have Not Any Account Yet ?
              <router-link to="/register">Register</router-link></span
            >
          </div>

          <div class="copy_section">
            <span>example@example.com</span>
            <span>123456</span>
            <div>
                <button class="btn btn-info btn-xs" title="copy" @click="copy1"><i class="fa fa-copy"></i></button>
            </div>
          </div>

           <div class="copy_section">
            <span>admin@gmail.com</span>
            <span>12345678</span>
            <div>
                <button class="btn btn-info btn-xs" title="copy" @click="copy2"><i class="fa fa-copy"></i></button>
            </div>
          </div>

            <div class="copy_section">
            <span>manager@gmail.com</span>
            <span>manager</span>
            <div>
                <button class="btn btn-info btn-xs" title="copy" @click="copy3"><i class="fa fa-copy"></i></button>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>

</template>

