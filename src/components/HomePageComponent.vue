<template>
    <div>
        <carousel-component></carousel-component>
        <div class="container">
            <div style="height: 30px;"></div>
            <div class="row">
                <div class="ridz-box">
                    <img class="ridz-logo" src="../img/logo2.png" />
                    <span>WERKEN IN DE ZORG</span>
                </div>
                <p>
                    Het vinden van een baan die bij je past is niet eenvoudig. Zeker niet als je jezelf wilt ontwikkelen in een prettige omgeving met fijne collega's en de juiste sfeer. Rond in de zorg helpt je om je wensen in vervulling te laten gaan.
                </p>
            </div>

            <div class="row">
                <div class="ridz-box">
                    <img class="ridz-logo" src="../img/logo2.png" />
                    <span>ACTUEEL</span>
                </div>
                <p>
                    Rond in de Zorg houdt een onderzoek onder HRM-afdelingen binnen verschillende sectoren en regio's van de Zorg. Doel is een uitwisseling van pragmatische oplossingen en collegiale ondersteuning op het gebied van personele uitdagingen, nu en in de nabije toekomst. In de maanden januari t/m juli wordt telefonisch contact opgenomen met zorgorganisaties voor een persoonlijke afspraak. De resultaten worden gedeeld in de nieuwsbrief.
                </p>
            </div>

            <b-row class="button-row">
                <b-button size="lg" to="/overons" variant="outline-success" >Meer informatie</b-button>
            </b-row>

            <div class="row">
                <div class="ridz-box">
                    <img class="ridz-logo" src="../img/logo2.png" />
                    <span>ZORG ORGANISATIES</span>
                </div>
                <div>
                    <b-card title="Contact" style="max-width: 20rem;" class="mb-2 infobox">
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
                    <p>
                        Rond in de Zorg is een integrale dienstverlener met ruime ervaring in het ondersteunen van zorgorganisaties. Rond in de Zorg onderscheidt zich in het brengen van oplossingen in samenhang door kennis van het primaire zorgproces, finance en wet- en regelgeving te combineren.
                        <br><br>
                        Rond in de Zorg biedt de volgende dienstverlening en producten:<br>
                        <br>
                        Ondersteuning van organisaties met actuele HRM vraagstukken:<br>
                        door Werving & Selectie, ondersteuning bij het werven van vast personeel<br>
                        bieden van tijdelijke oplossingen door inzet van zorgpersoneel, verpleegkundigen, verzorgenden, planners en zorgmanagers<br>
                        Ondersteuning door financieel specialisten die de brug kunnen slaan tussen uw primaire zorgproces en finance<br>
                        Specifieke ondersteuning bij het verbeteren van de Planning & Control cyclus met behulp van een begrotingsmodel<br>
                        Specifiek advies op het gebied van veranderende regelgeving bijvoorbeeld als gevolg van introductie van de Normatieve Huisvesting Component (NHC). Rond in de Zorg kan voor u een scan maken die de risico's rond veranderende opbrengsten kapitaallasten voor de komende jaren in kaart brengt<br>
                        Ondersteuning van projecten als gevolg van veranderende regelgeving, implementatie en optimalisatie van zorgregistratie systemen, financiële systemen, optimaliseren declaratie proces enzovoorts<br>
                        Opleidingen financiën voor de zorgmanager waarbij een brug geslagen wordt tussen het primaire zorgproces en financieel beheer in de zorg<br>
                        Lean traject, Rond in de Zorg faciliteert zorginstellingen in het opzetten van projecten met behulp van de leanfilosofie<br>
                        Uitvoeren van administratieve taken op het gebied van bijvoorbeeld de Huishoudelijke Verzorging naar de gemeentes<br>
                        Projectmanagement met betrekking tot overheveling producten: Begeleiding en Arbeidsmatige Dagbesteding vanuit de AWBZ naar de WMO.
                    </p>
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

    li{
        text-align: center;
        display: list-item!important;
    }
</style>
