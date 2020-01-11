<template>
  <div id="app" style="">
    <header-component />
    <router-view></router-view>
    <footer-component></footer-component>
    <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet">
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
export default {
  name: 'app',
    components: {
        FooterComponent,
        HeaderComponent},
    data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  & > div {
    flex: 0 0 auto;
  }

  & > div:nth-child(2) {
    flex: 1 0 auto;
  }
}



h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  /*display: inline-block;*/
  margin: 0 10px;
}

a {
  color: #42b983;
}

.carousel-item {
  max-height: 600px;
}

.carousel-img{
  max-width: 350px;
}

.sidebar{
  border-left: 1px solid rgba(0, 0, 0, 0.26);
  height: 100%;
}

.text-content{
  font-size: 17px;
}

</style>
