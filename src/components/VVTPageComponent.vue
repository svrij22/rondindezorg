<template>
    <div>
        <b-container class="contents">
            <div>
                <b-jumbotron>
                    <template v-slot:header>VVT</template>
                    <template v-slot:lead>
                        Verpleging, Verzorging en Thuiszorg.
                    </template>
                </b-jumbotron>
            </div>
            <b-row>

                <b-col class="p-3">
                    <div class="row text-content">
                        <div class="ridz-box">
                            <img class="ridz-logo" src="../img/logo2.png" />
                            <span>Flexibiliteit in planning</span>
                        </div>
                        <p>
                            Het plannen van personeel blijft één van de grote uitdagingen in onze sector. Het tekort aan
                            verzorgenden (IG) en verpleegkundigen (niveau 4) neemt dagelijks toe. Flexibiliteit is een grote wens
                            maar blijft één van de grootste uitdagingen binnen de sector VVT. Als er iemand ziek wordt of
                            tijdelijk uitvalt op een afdeling neemt acuut de druk op de collega&#39;s toe. Via Rond in de Zorg is nu in
                            elke regio een flexibele groep gediplomeerde verzorgenden IG en Verpleegkundigen beschikbaar. Ze
                            zijn geselecteerd op goede referenties en ruime ervaring. Ze zijn inzetbaar voor langere tijd maar ook
                            voor losse diensten. Deze medewerkers kunnen dus per direct ingezet worden.
                        </p>
                        <p>
                            Wilt u meer weten over onze dienstverlening voor GGZ organisaties belt u dan met Rond in de Zorg via:
                        </p>
                        <b-button variant="secondary" size="lg">(020) 752 69 12</b-button>
                    </div>
                    <hr>
                    <div class="row text-content">
                        <div class="ridz-box">
                            <img class="ridz-logo" src="../img/logo2.png" />
                            <span>Outplacement en externe re-integratie</span>
                        </div>
                        <p>
                            In de VVT sector is veel behoefte aan het begeleiden van medewerkers naar een functie binnen
                             een andere zorginstelling of buiten de Zorg. Bijvoorbeeld door gezondheidsklachten of het
                            niet meer willen werken in nachtdienst.
                        </p>
                        <p>
                            Uit recent onderzoek blijkt dat HRM-managers de aanbieders van outplacement te duur vinden.
                            De oplossing? Rond in de Zorg Outplacement! De tarieven liggen ruim 50% onder de marktprijs.
                            En de kwaliteit? Die is optimaal, dankzij de jarenlange kennis en ervaring van onze mensen.
                            Ze zijn allemaal gepokt en gemazeld in de zorgsector.
                        </p>
                        <p>
                            Wij onderhouden nauwe contacten met HRM-managers in alle sectoren in de Zorg.
                            En dat merkt u aan ons gevarieerde aanbod diensten, mogelijkheden en oplossingen.
                            Standaard als het kan, maatwerk als het moet. Ook ons netwerk buiten de Zorg groeit met de dag,
                            en dat levert extra stageplaatsen op, maar ook veel vaste banen. Het mes snijdt aan twee kanten:
                            wij helpen uw medewerker aan passend werk én wij nemen u alle zorg uit handen.
                        </p>
                        <b-button variant="primary" size="md" href="/src/assets/outplacement.pdf">Meer informatie</b-button>
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
                        <p>
                            Uit onderzoek blijkt dat HRM'ers de kosten van inhuur te hoog vinden. Ook blijkt dat de bureaus die interimmers bemiddelen weinig kennis hebben van de zorgsector. En het blijkt vaak lang te duren voordat een interimmer rendeert. Samen met HRM-managers uit de zorg hebben wij een dienst opgericht die deze bezwaren wegneemt en de drempel om interimmers in te huren aanmerkelijk verlaagt.
                        </p>
                        <b-button variant="primary" size="md" href="/src/assets/flexibel.pdf">Meer informatie</b-button>
                    </div>
                    <hr>
                    <div class="row text-content">
                        <div class="ridz-box">
                            <img class="ridz-logo" src="../img/logo2.png" />
                            <span>Het nieuwe werven</span>
                        </div>
                        <p>
                            De juiste persoon op de juiste plek – dat blijft een van de grote uitdagingen in onze sector. HRM'ers staan onder druk: enerzijds moeten ze aan de toenemende vraag voldoen, anderzijds opereren ze in een krappe arbeidsmarkt. En door de verwachte vergrijzing, wordt dit spanningsveld alleen maar groter.
                        </p>
                        <p>
                            Onderzoek onder veertig HRM-managers uit de zorgsector stond aan de basis van het opzetten van ons Werving & Selectie Centrum. Dat voldoet aan alle wensen: lage kosten, resultaatgericht, kennis van de sector, transparantie en daadkracht. Of het nu gaat om de externe werving voor eigen opleidingen of een moeilijk vervulbare vacature.
                        </p>
                        <b-button variant="primary" size="md" href="/src/assets/Werving.pdf">Meer informatie</b-button>
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
</style>
