<template>
    <form class="user-form">
      <h5>Name</h5>
      <input type="text" id="name" v-model="user.name">
  
      <h5>City</h5>
      <input type="text" id="city" v-model="user.city">
  
      <h5>State</h5>
      <input type="text" id="state" v-model="user.state">
  
      <p v-if="!validateForm" class="error-message">Please fill out all answers</p>
      <button :disabled="!validateForm" @click="submitUserForm" class="submit-button">Submit</button>
    </form>
  </template>

<script>
import {userStore} from '@/stores/user.js'
import { mapState, mapActions } from 'pinia';


export default{
    data(){
        return{
            user:{
                name:"",
                city:"",
                state:""
            }
        }
    },
    methods: {
        ...mapActions(userStore, ['submitForm']),
        submitUserForm(){
            this.submitForm(this.user);
        }
    },
    computed:{
        validateForm() {
            for(var field in this.user){
                if(!this.user[field] || this.user[field] == ""){
                    return false;
                }
            }
            return true;
        }
    }

}
</script>

<style scoped>
.user-form {
  max-width: 400px;
  margin: auto;
}

h5 {
  color: #333;
}

input {
  margin-bottom: 10px;
  padding: 8px;
}

.error-message {
  color: red;
  margin-top: 5px;
}

.submit-button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>