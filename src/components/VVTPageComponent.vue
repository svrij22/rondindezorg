<template>
    <div>
        <b-container class="contents">
            <div>
                <b-jumbotron>
                    <template v-slot:header>Zorgorganisaties</template>
                    <template v-slot:lead>
                        VVT, Revalidatiecentra en Particuliere instellingen.
                    </template>
                </b-jumbotron>
            </div>
            <b-row>

                <b-col class="p-3">
                    <div class="row text-content">
                        <div class="ridz-box">
                            <img class="ridz-logo" src="../img/logo2.png" />
                            <span>Rond in de zorg</span>
                        </div>
                        <span>
                        <h4>Wij zijn actief in de volgende sectoren:</h4>
                            <ul>
                                <li>VVT</li>
                                <li>Revalidatiecentra</li>
                                <li>Particuliere instellingen</li>
                            </ul>
                        <p>
                            Wilt u meer weten over onze dienstverlening voor deze organisaties belt u dan met Rond in de Zorg via:
                        </p>
                        </span>
                        <b-button href="tel:0356224002" variant="secondary" size="lg">035 - 622 40 02</b-button>
                    </div>
                    <hr>
                    <div class="row text-content">
                        <div class="ridz-box">
                            <img class="ridz-logo" src="../img/logo2.png" />
                            <span>Focus op Kwaliteit en Continuïteit</span>
                        </div>
                        <p>
                            Het is zaak de inhuur van externe medewerkers zo veel mogelijk te beperken. Maar soms ontkomen we er niet aan – bijvoorbeeld door ziekte, pieken in werkdruk of moeilijk vervulbare vacatures. Aan kwaliteit, continuïteit en veiligheid mogen immers geen concessies worden gedaan.
                        </p>
                        <b-button variant="outline-success" size="md" href="/src/assets/flexibel.pdf">Download brochure</b-button>
                    </div>
                    <hr>
                    <div class="row text-content">
                        <div class="ridz-box">
                            <img class="ridz-logo" src="../img/logo2.png" />
                            <span>Voordelen voor uw zorgorganisatie</span>
                        </div>
                        <p>
                            Werkt u bij een zorgorganisatie en bent u op zoek naar tijdelijke ondersteuning? Denkt u aan een zzp’er maar bent u bang voor de risico's in verband met werkgeverschap en naheffing loonbelasting? Meld uw aanvraag dan bij Rond in de Zorg.
                        </p>
                        <p>
                            Het voordeel van onze zzp’ers is dat hun kennis en ervaring er voor zorgt dat ze snel inzetbaar zijn en zich flexibel kunnen aanpassen aan uw organisatie en werkwijze. Veel zzp‘ers werken al jaren met ons samen waardoor wij weten waar ieders specifieke kwaliteit, kennis en ervaring ligt. Hierdoor kunnen wij u vooraf goed informeren over wie op welke plek het beste inzetbaar is.
                        </p>
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
</style>
