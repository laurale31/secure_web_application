<template>
    <div>
      <h1 class="pizza-title">Pizza Shop Registration</h1>
      <form @submit.prevent="registerUser" class="pizza-form">
        <div class="form-group">
          <label for="name">Your Name:</label>
          <input type="text" id="name" v-model="user.name" required>
        </div>
        <div class="form-group">
          <label for="age">Your Age:</label>
          <input type="number" id="age" v-model="user.age" required>
        </div>
        <div class="form-group">
          <label for="location">Location:</label>
          <input type="text" id="location" v-model="user.location" required>
        </div>
        <div class="form-group">
          <label for="phone">Phone Number:</label>
          <input type="text" id="phone" v-model="user.phone" required>
        </div>
        <button type="submit" class="pizza-button">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  import { collection, addDoc } from 'firebase/firestore';
  import db from '../Firebase/init.js'
  
  export default {
    data() {
      return {
        user: {
          name: '',
          age: null,
          location: '',
          phone: '',
        },
      };
    },
    methods: {
      async registerUser() {
        const colRef = collection(db, 'users');
        try {
          const docRef = await addDoc(colRef, this.user);
          this.user = {
            name: '',
            age: null,
            location: '',
            phone: '',
          };
          alert('User registered successfully');
        } catch (error) {
          console.error('Error registering user:', error);
          alert('An error occurred while registering the user');
        }
      },
    },
  };
  </script>
  
  <style scoped>

  .pizza-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh; 
  }
  
  .pizza-title {
    text-align: center;
    font-size: 24px;
    color: #ffaa00;
    margin: 20px 0;
  }
  
  .pizza-form {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    width: 350px; 
  }
  
  .form-group {
    margin: 10px 0;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    color: #ffaa00;
  }
  
  input[type="text"],
  input[type="number"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .pizza-button {
    background-color: #ffaa00;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
  }
  
  .pizza-button:hover {
    background-color: #ff8800; 
  }
  </style>
  