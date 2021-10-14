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
    float: middle;
    height: 500px;
    width: auto;
}

div {
    border-style: groove;
    border-radius: 5px;
    border-color:azure;
    width: 100%;
}

.main-container {
    margin-left: 25%;
    margin-right: 25%;
    align-items: center;
}

</style>
