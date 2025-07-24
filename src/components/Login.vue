<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()
const error = ref('')

const login = () => {
  if (username.value.toLowerCase() === 'raju' && password.value === 'raju@123') {
    router.push('/dashboard')
  } else {
    error.value = 'Invalid Credentials'
  }
}
</script>
<template>
  <div class="background-color">
    <div class="Loginpage">
      <h1>LOGIN</h1>

      <div class="form-group">
        <label>Username:</label>
        <input v-model="username" placeholder="Enter username" />
      </div>

      <div class="form-group">
        <label>Password:</label>
        <input
          v-model="password"
          type="password"
          placeholder="Enter your password"
          @keyup.enter="login"
        />
        <p class="para" v-if="error">{{ error }}</p>
      </div>

      <center><button @click="login">Login</button></center>

      <p>Login Credentials:</p>
      <p>Username : raju</p>
      <p>Password : raju@123</p>
    </div>
  </div>
</template>

<style>
body,
#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>

<style scoped>
.para {
  color: red;

  padding: 10px;
  font-size: 20px;
}
.background-color {
  background-color: white;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
center {
  margin: 30px;
}
button {
  width: 140px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
}
button:hover {
  width: 140px;
  padding: 10px;
  border: 1px black solid;
  color: white;
  background-color: black;
}
.Loginpage {
  background-color: grey;
  height: 70%;
  width: 25%;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
}

h1 {
  padding: 10px;
  text-align: center;
  font-weight: bold;
  font-family: Roboto;
  margin-bottom: 40px;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

label {
  color: black;
  font-size: 18px;
  margin-bottom: 5px;
  font-family: 'Inter', sans-serif;
}

input {
  padding: 8px;
  font-size: 16px;
  border: none;
  outline: none;
}
</style>
