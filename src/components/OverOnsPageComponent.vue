<template>
    <div>
        <b-container class="contents">
            <div>
                <b-jumbotron>
                    <template v-slot:header>Voor en door de zorg.</template>
                    <template v-slot:lead>
                        Rond in de Zorg is een dienstverlener die zorgorganisaties helpt met actuele HRM-vraagstukken op het gebied van interim personeel, werving en selectie en outplacement.
                    </template>
                </b-jumbotron>
            </div>
            <b-row>
                <b-col class="p-3">
                    <div class="row text-content">
                        <div class="ridz-box">
                            <img class="ridz-logo" src="../img/logo2.png" />
                            <span>VOOR EN DOOR DE ZORG</span>
                        </div>
                        <p>
                            Rond in de Zorg is een dienstverlener die zorgorganisaties helpt met actuele HRM-vraagstukken op het gebied van interim personeel, werving en selectie en outplacement. Elke sector heeft zo z'n eigen uitdagingen en verdient dus gespecialiseerde aandacht. Onze organisatie is zo ingericht dat we elke sector optimaal kunnen bedienen.

                            Naast onze dienstverlening houden we u op de hoogte van de succesverhalen van uw collega's in het land. Wat zijn bijvoorbeeld de ervaringen met het invoeren van talentmanagement, kennismanagement en prestatiemanagement. We creëren een platform voor het delen van kennis en ervaring. Daarnaast bieden we u de helpende hand bij het realiseren van uw ambities en het oplossen van knelpunten.</p>
                    </div>
                </b-col>
                <b-col col lg="4">
                    <div class="sidebar">
                        <menu-component></menu-component>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import MenuComponent from "./MenuComponent";

    export default {
        components: {MenuComponent},
        name: "OverOnsPageComponent"
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

</style>
