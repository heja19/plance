<template>
  <div class="home">
  <a href='#'><img src="@/assets/plance.png" class="first-page-icon"></a>
    <SignIn></SignIn>
  </div>
</template>

<script>
import SignIn from '@/components/SignIn.vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    SignIn
  }
}
</script>

<style>
.first-page-icon {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
}

.main-container {
    margin-left: 25%;
    margin-right: 25%;
    align-items: center;
}
button {
  background-color: #413532d3;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 16px 32px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  opacity: 0.6;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
}
input {
  border-radius: 5px;
  border: none;
  padding: 9px 32px;
}
.home{
  box-shadow: none;
}
</style>
