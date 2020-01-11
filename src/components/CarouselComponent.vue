<template>
    <div>
        <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="4000"
                controls
                indicators
                background="#ababab"
                img-width="1024"
                img-height="480"
                style="text-shadow: 1px 1px 2px #333;"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
        >
            <!-- Text slides with image -->
            <b-carousel-slide img-src="https://i.picsum.photos/id/52/1024/480.jpg?blur=2" >
                <div class="carousel-box">
                    <h1 class="slide-text1">
                        Wil je eigenlijk niet <span class="coloured-text">stoppen</span>, maar <span class="coloured-text">werken</span> wanneer jij wil?
                    </h1>
                </div>
            </b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide img-src="https://i.picsum.photos/id/1031/1024/480.jpg">
                <div class="carousel-img-div">
                    <img class="carousel-img" src="../img/dokter4.png"/>
                </div>
                <div class="carousel-box">
                    <h1 class="slide-text1">
                        Wil je alle <span class="coloured-text">vrijheid</span> houden om zelf te blijven <span class="coloured-text">kiezen</span>?
                    </h1>
                </div>
            </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide img-src="https://i.picsum.photos/id/114/1024/480.jpg">
                <div class="carousel-img-div">
                    <img class="carousel-img" src="../img/dokter6.png"/>
                </div>
                <div class="carousel-box">
                    <h1 class="slide-text1">
                        Wil je een <span class="coloured-text">organisatie</span> die voor <span class="coloured-text">jouw belangen</span> opkomt?
                    </h1>
                </div>
            </b-carousel-slide>

            <!-- Slides with img slot -->
            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            <b-carousel-slide img-src="https://i.picsum.photos/id/130/1024/480.jpg">
                <div class="carousel-img-div">
                    <img class="carousel-img" src="../img/patient.png"/>
                </div>
                <div class="carousel-box">
                    <h1 class="slide-text1">
                        Wil je een <span class="coloured-text">baan</span> waar je weer <span class="coloured-text">kwaliteitstijd</span> hebt voor je patienten?
                    </h1>
                </div>
            </b-carousel-slide>

            <!-- Slide with blank fluid image to maintain slide aspect ratio -->
            <b-carousel-slide img-blank style="background: rgb(232, 232, 232)">
                <img src="../img/logorechts_vectorized.png" class="logo-img">
                    <h1 class="logo-text">
                        Bemiddeling, Werving & Selectie
                    </h1>
            </b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>
    export default {
        name: "carousel-component",
        data() {
            return {
                slide: 0,
                sliding: null
            }
        },
        methods: {
            onSlideStart(slide) {
                this.sliding = true
            },
            onSlideEnd(slide) {
                this.sliding = false
            }
        }
    }
</script>

<style scoped>
    .slide-text1{
        font-size: calc(4px + 24 * (100vw / 580));
        text-shadow: 2px 3px 10px black;
        margin: 20px;
    }

    .carousel-caption{
        top: 0px;
        bottom: 0px;
    }

    .logo-text{
        font-size: calc(3px + 13 * (100vw / 580));
        margin: 20px;
        color: #424242;
        margin-bottom: 40px;
    }

    .coloured-text{
        color: #74e274;
    }

    .carousel-box{
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
        max-width: 55vw;
    }

    .carousel-img-div{
        position: absolute;
        bottom: 0px;
        right: -12vw;
        width: calc( 30vw);
        bottom: -26px;
        z-index: -1;
    }
    .carousel-img{
        width: 100%;
    }

    .logo-img{
        width: 50vw;
    }
</style>