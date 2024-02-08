<script setup>
import {ref,computed} from "vue"
import {storeToRefs} from "pinia"
import {authStore} from "../../store/authStore"

const {register}  = authStore();
const {registerError,isLoading} = storeToRefs(authStore());




//=== show hide password logic here====//
const showPassword = ref(false);

const passwordType = computed(() => showPassword.value ? 'text' : 'password')



const togglePasswordVisibility = () =>{
     showPassword.value =!showPassword.value
}

//== rest of the code here===//

const name = ref('');
const phone = ref('');
const email = ref('');
const password = ref('');


const registerHandler = () =>{
     register(name,phone,email,password)
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
              <i class="fa fa-user-plus text-white" style="color: #3f9ef2"></i>
            </div>
            <div class="header-title">
              <h3>&nbsp;Register</h3>
              <small
                ><strong>&nbsp;&nbsp;enter your credentials to create account.</strong></small
              >
            </div>
          </div>
        </div>
        <div class="panel-body">
          <form @submit.prevent="registerHandler" method="POST" style="margin-bottom: 10px">
            <div class="form-group">
              <label for="name">Name:</label>
              <input
                type="text"
                class="form-control"
                v-model="name"
                placeholder="Name..."
                id="name"
                name="name"
              />
              <div v-if="registerError?.name" style="margin-top:4px">
                  <p class="text-danger">{{ registerError?.name[0] }}</p>
              </div>
            </div>
             <div class="form-group">
              <label for="phone">Phone:</label>
              <input
                type="text"
                class="form-control"
                placeholder="Phone..."
                id="phone"
                v-model="phone"
                name="phone"
              />
               <div v-if="registerError?.phone" style="margin-top:4px">
                  <p class="text-danger">{{ registerError?.phone[0] }}</p>
              </div>
            </div>
            <div class="form-group">
              <label for="username">Email:</label>
              <input
                type="email"
                class="form-control"
                placeholder="Email....."
                id="email"
                v-model="email"
                name="email"
              />
               <div v-if="registerError?.email" style="margin-top:4px">
                  <p class="text-danger">{{ registerError?.email[0] }}</p>
              </div>
            </div>
            <div class="form-group">
              <label for="password">Password:</label>
              <div class="password_input_content">
                <input
                  :type="passwordType"
                  class="form-control"
                  placeholder="********"
                  id="password"
                  v-model="password"
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
               <div v-if="registerError?.password" style="margin-top:4px">
                  <p class="text-danger">{{ registerError?.password[0] }}</p>
              </div>
            </div>
            <button type="submit" class="btn btn-labeled btn-primary m-b-5">
              <span class="btn-label"> <i class="fa fa-spinner" aria-hidden="true" v-if="isLoading"></i> <i class="fa fa-user-plus" v-else></i></span>{{ isLoading ? 'Register...' : 'Register'}}
            </button>
          </form>

          <div class="create__acccount__text">
            <span
              >I Have Already An Account. 
              <router-link to="/">Login</router-link></span
            >
          </div>



        </div>
      </div>
    </div>
  </div>
</template>