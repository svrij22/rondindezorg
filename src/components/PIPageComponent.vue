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
                            <span>Werken als ZZP-er</span>
                        </div>
                        <p>
                            Als zzp-er of freelancer heb je een prachtig beroep. Je hebt passie voor je vak en je doet je
                            werkzaamheden met plezier. Of beter gezegd: deed ze met plezier. De individuele zzp-er wordt
                            steeds vaker geconfronteerd met de voorwaarden om als freelancer te kunnen/mogen werken.
                            Meerdere opdrachtgevers, gezagsverhoudingen en het lopen van ondernemersrisico&#39;s zijn
                            voorwaarden die de belastingdienst stelt.
                        </p>
                        <p>
                            Rond in de Zorg ondersteunt freelancers in de zorg met dit proces. Je behoudt je vrijheid, kunt kiezen
                            welke opdrachten je aan wilt nemen, je werkt ook in &quot;eigen&quot; opdrachten. Toch vind je op dit platform
                            een stuk ondersteuning, kortingen op verzekeringen maar ook beschikbare vacatures. Daarvoor
                            reken we geen kosten! Wij helpen je de werkplek te vinden die bij je past en waar je je thuis voelt.
                            Wij kennen meer dan 500 organisaties in alle zorgsectoren en weten zo de juiste werkomgeving voor
                            je te vinden. Een plek waar jij helemaal tot je recht komt en gewaardeerd wordt.
                        </p>
                        <p>
                            Jij, als zzp-er met de juiste ervaring en opleidingen biedt zorgorganisaties de flexibiliteit die ze nodig
                            hebben. Jij zorgt tenslotte voor de kwaliteit, de veiligheid en de aandacht die een zorgorganisatie
                            zoekt! Rond in de Zorg staat voor je klaar. Wij werken voor jou... want jíj bent belangrijk.
                        </p>
                        <b-button href="tel:0207526912" variant="secondary" size="lg">020-752 69 12</b-button>
                    </div>
                    <hr>
                    <div class="row text-content">
                        <div class="ridz-box">
                            <img class="ridz-logo" src="../img/logo2.png" />
                            <span>Zoek je een interim opdracht</span>
                        </div>
                        <p>
                            Het is vandaag de dag lastig voor ZZP-ers om aan het werk te blijven. Juist daarom zetten we ons in
                            voor jou. Wij kennen de juiste mensen, weten waar jouw kansen liggen, brengen je aan tafel bij
                            werkgevers. En als je hulp nodig hebt, zijn wij er om je te helpen.
                        </p>
                        <p>
                            Wij maken het verschil door voor jóu een passende opdracht te vinden. Een leuke baan, waar je
                            helemaal tot je recht komt. Door onze ervaring in de sector – vooral met personele dienstverlening –
                            maken wij de juiste match.
                        </p>
                            <h3>Jouw voordelen van Rond in de Zorg:</h3>
                            <ul class="list-group">
                                <li >Kwalitatief goed bestand van potentiële opdrachtgevers in de zorg.</li>
                                <li >Initiële bemiddelingskosten brengen wij niet in rekening.</li>
                                <li >Je werkt met een gedreven en ervaren team, met hart voor de zorg.</li>
                                <li >Meer dan uitstekende betalingscondities.</li>
                                <li >Wij kunnen voor je bemiddelen met betrekking tot het verkrijgen van gunstige tarieven op het
                                    gebied van verzekeringen, employee benefits.</li>
                            </ul>
                    </div>
                    <hr>
                    <div class="row text-content">
                        <div class="ridz-box">
                            <img class="ridz-logo" src="../img/logo2.png" />
                            <span>Aanmelden als zzp'er</span>
                        </div>
                        <p>
                            Ben je geïnteresseerd en wil je je bij ons aanmelden? Voor aanmelding bij Rond in de Zorg hebben
                            wij de volgende gegevens van jou nodig.
                        </p>
                        <ul class="list-unstyled">
                            <li>Actueel CV</li>
                            <li>Kopie van een geldig legitimatiebewijs (voor- en achterkant)</li>
                            <li>Kopie diploma(s), certificaten en eventuele getuigenschriften of andere bewijslast</li>
                            <li>Uittreksel Kamer van Koophandel (KvK)</li>
                            <li>Beroepsaansprakelijkheidsverzekering (van het lopende jaar)</li>
                            <li>Verklaring omtrent gedrag ((van het lopende jaar))</li>
                            <li>Klachtenregeling, onder meer van Klachtportaal | Zorg</li>
                            <li>Uittreksel BIG- registratie, indien van toepassing</li>
                        </ul>
                        <p>
                            Schrijf je vandaag nog in voor een passende opdracht.
                        </p>
                        <b-button variant="primary" size="md">Schrijf je in</b-button>
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
