<template>
    <div>
        <carousel-component></carousel-component>
        <div class="container">
            <div style="height: 30px;"></div>
            <div class="row">
                <div class="ridz-box">
                    <img class="ridz-logo" src="../img/logo2.png" />
                    <span>Werken in de zorg</span>
                </div>
                <p>
                    Het vinden van een baan die bij je past is niet eenvoudig. Zeker niet als je jezelf wilt ontwikkelen in een prettige omgeving met fijne collega's en de juiste sfeer. Rond in de zorg helpt je om je wensen in vervulling te laten gaan.
                </p>
            </div>
            <hr>
            <div class="row">
                <div class="ridz-box">
                    <img class="ridz-logo" src="../img/logo2.png" />
                    <span>Actueel</span>
                </div>
                <p>
                    Rond in de Zorg houdt een onderzoek onder HRM-afdelingen binnen verschillende sectoren en regio's van de Zorg. Doel is een uitwisseling van pragmatische oplossingen en collegiale ondersteuning op het gebied van personele uitdagingen, nu en in de nabije toekomst. In de maanden januari t/m juli wordt telefonisch contact opgenomen met zorgorganisaties voor een persoonlijke afspraak. De resultaten worden gedeeld in de nieuwsbrief.
                </p>
            </div>

            <b-row class="button-row">
                <b-button size="lg" to="/overons" variant="outline-success" >Meer informatie</b-button>
            </b-row>
            <hr>
            <div class="row">
                <div class="ridz-box">
                    <img class="ridz-logo" src="../img/logo2.png" />
                    <span>Flexibiliteit en planning</span>
                </div>
                <div>
                    <b-card title="Contact" style="max-width: 20rem;" class="d-sm-none d-md-block mb-2 infobox">
                        <b-card-text>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li><b>Telefoon</b></li>
                                <li><a href="tel:0356224002">035 - 622 40 02</a></li>
                                <li><a href="tel:0614962598">06 - 1496 25 98</a></li>
                                <li><b>Mail</b></li>
                                <li>info@rondindezorg.nl</li>
                            </ul>
                        </b-card-text>
                        <b-button size="lg" variant="outline-success">Meer informatie</b-button>
                    </b-card>
                    <p>
                        Rond in de Zorg is een integrale dienstverlener met ruime ervaring in het ondersteunen van zorgorganisaties.
                        Rond in de Zorg onderscheidt zich in het brengen van oplossingen in samenhang door kennis van het primaire zorgproces,
                        finance en wet- en regelgeving te combineren.
                        <br><br>
                        Het plannen van personeel blijft één van de grote uitdagingen in onze sector. Het tekort aan
                        verzorgenden (IG) en verpleegkundigen (niveau 4) neemt dagelijks toe. Flexibiliteit is een grote wens
                        maar blijft één van de grootste uitdagingen binnen de sector VVT. Als er iemand ziek wordt of
                        tijdelijk uitvalt op een afdeling neemt acuut de druk op de collega&#39;s toe. Via Rond in de Zorg is nu in
                        elke regio een flexibele groep gediplomeerde verzorgenden IG en Verpleegkundigen beschikbaar. Ze
                        zijn geselecteerd op goede referenties en ruime ervaring. Ze zijn inzetbaar voor langere tijd maar ook
                        voor losse diensten. Deze medewerkers kunnen dus per direct ingezet worden.
                    </p>
                    <b-card title="Contact"  class="d-md-none d-sm-block mb-2 infobox-lower">
                        <b-card-text>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li><b>Telefoon</b></li>
                                <li>+31(035)6224002</li>
                                <li>+31 614962598</li>
                                <li><b>Mail</b></li>
                                <li>info@rondindezorg.nl</li>
                            </ul>
                        </b-card-text>
                        <b-button size="lg" variant="outline-success">Meer informatie</b-button>
                    </b-card>
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

    .row img{
        margin-bottom: 20px;
        margin-top:20px;
    }

    p{
        font-size: 20px;
        text-align: left;
    }

    .ridz-box{
        display: flex;
        align-items: center;
    }

    .ridz-box span{
        font-size: 25px;
    }

    .ridz-logo{
        width: 55px;
        height: 55px;
        margin-right: 15px;
    }

    .button-row{
        justify-content: center;
        margin: 15px;
    }

    .infobox{
        width: 40vh;
        min-width: 150px;
        margin: 20px;
        min-height: 240px;
        float: right;
        padding: 1.5rem;
        color: #2e2e2e;
    }

    .infobox-lower{
        max-width: 100%;
        margin: 30px;
        min-height: 240px;
        padding: 1.5rem;
        color: #2e2e2e;
    }

    li{
        text-align: center;
        display: list-item!important;
    }
</style>
