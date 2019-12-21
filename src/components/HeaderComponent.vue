<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <img class="navbar-brand" src="../img/logorechts.png"/>
        </nav>
      Header
      <router-link to="/">Home</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
</template>

<script>
    export default {
        name: "HeaderComponent"
    }
</script>

<style scoped>

</style>
