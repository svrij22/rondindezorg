<template>
    <div>
        <carousel-component></carousel-component>
        <div class="container">
        <div class="row">
          <div class="col-sm-6">
            Home
          </div>
          <div class="col-sm-6">
            Home2
          </div>
        </div>
        </div>
    </div>
</template>

<script>
    import CarouselComponent from "./CarouselComponent";

    export default {
        components: {CarouselComponent},
        name: "HomePageComponent"
    }
</script>

<style scoped>

</style>
