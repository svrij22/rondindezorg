<template>
    <div>
        <b-container class="contents">
            <div>
                <b-jumbotron>
                    <template v-slot:header>Contact</template>
                    <template v-slot:lead>
                        Neem contact met ons op.
                    </template>
                </b-jumbotron>
            </div>
            <b-row>
                <b-col class="p-3">
                    <div class="row text-content">
                        <div class="ridz-box">
                            <img class="ridz-logo" src="../img/logo2.png" />
                            <span>Neem contact op</span>
                        </div>
                        <div>
                            <p>
                                Wilt u meer weten over onze dienstverlening voor deze organisaties belt u dan met Rond in de Zorg via:
                            </p>
                            <b-button class="m-3" href="tel:0356224002" variant="secondary" size="lg">035 - 622 40 02</b-button>
                            <b-button class="m-3" href="tel:0614962598" variant="secondary" size="lg">06 - 1496 25 98</b-button>
                        </div>
                    </div>
                    <hr>
                    <div class="row text-content">
                        <p>
                            Of neem contact op via:
                        </p>
                        <b-button class="m-3" href="mailto:info@rondindezorg.nl" variant="secondary" size="lg">info@rondindezorg.nl</b-button>
                    </div>
                </b-col>
                <menu-component></menu-component>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import MenuComponent from "./MenuComponent";
    export default {
        components: {MenuComponent},
        name: "GGZPageComponent"
    }
</script>

<style scoped>
    .contents{
        margin-top: 25px;
        margin-bottom: 25px;
    }

    .ridz-box{
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        width: 100%;
    }

    .ridz-box span{
        font-size: 25px;
    }

    .ridz-logo{
        width: 55px;
        height: 55px;
        margin-right: 15px;
    }

    .text-content{
        text-align: left;
    }

    .jumbotron {
        text-align: left;
    }

    ul{
        margin-top: 16px;
        margin-bottom: 16px;
        padding-left: 1.5em;
        list-style-type: disc !important;
    }

    p{
        width: 100%;
    }
</style>
