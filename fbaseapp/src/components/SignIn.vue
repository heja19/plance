<template>
    <div id="login">
        <h1> Login to Your Account </h1>
        <p> <input type='text' placeholder="Email" v-model='email'/> </p>
        <p> <input type='password' placeholder="Password" v-model='password'/> </p>
        <p v-if="errMsg"> {{ errMsg }} </p>
        <p> <button @click="signIn"> Log In </button> <button @click="register"> Register </button> </p>
        <p><strong> OR </strong></p>
        <p> <button @click="googleSignIn"> Continue with Google </button> </p>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const errMsg = ref()
const router = useRouter()
const auth = getAuth()
const provider = new GoogleAuthProvider()

const signIn = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log('Successfully logged in!')
      router.push('/feed')
    })
    .catch(error => {
      switch (error.code) {
        case 'auth/invalid-email':
            errMsg.value = 'Invalid email'
            break
        case 'auth/user-not-found':
            errMsg.value = 'No account with that email was found'
            break
        case 'auth/wrong-password':
            errMsg.value = 'Incorrect password'
            break  
        default:
            errMsg.value = 'Email or password was incorrect'
            break
      }
    })
}
const googleSignIn = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      router.push('/feed')
  }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
  })
}
const register = () => { 
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log('Successfully registered!');
      router.push('/feed')
    })
    .catch(error => {
      console.log(error.code)
      alert(error.message);
    });
  }
</script>


<style>
#login{
    /*border-style: groove;*/
    box-shadow: 0 4px 5px 0 rgba(169,169,169), 0 3px 15px 0 rgba(169,169,169);
    border-radius: 20px;
    background-color: #fcf4f3d3;
    border-color:azure;
    width: 50%;
    margin-left: 25%;
}

</style>