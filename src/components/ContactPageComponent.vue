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

                    <div class="ridz-box">
                      <img class="ridz-logo" src="../img/logo2.png" />
                      <span>Neem contact op</span>
                    </div>

                    <div class="content">
                      <div style="margin-right: 10px">
                        <div class="row text-content"  style="margin-right: 10px">
                          <div>Larenseweg 23, 7451 EL Holten
                            <p>
                              Wilt u meer weten over onze dienstverlening voor deze organisaties belt u dan met Rond in de Zorg via:
                            </p>
                            <b-button class="m-1" href="tel:0356224002" variant="secondary" size="lg">035 - 622 40 02</b-button>
                            <b-button class="m-1" href="tel:0614962598" variant="secondary" size="lg">06 - 1496 25 98</b-button>
                          </div>
                        </div>
                        <hr>
                        <div class="row text-content">
                          <p>
                            Of neem contact op via:
                          </p>
                          <b-button class="m-1" href="mailto:oktiva.prihatin@rondindezorg.nl" variant="secondary" size="lg">oktiva.prihatin@rondindezorg.nl</b-button>
                        </div>
                        <hr>
                      </div>

                      <b-card
                        title="Locatie"
                        style="max-width: 20rem; min-width: 14rem"
                        class="mb-2">
                        <b-card-text style="text-align: left">
                          <h5>Rond in de Zorg</h5><br>

                          Torenlaan 5A<br>
                          1402 AT <br>Bussum

                        </b-card-text>
                        <b-card-body>
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5807.016703116219!2d5.162627173661474!3d52.26972048735186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c613609b716235%3A0x89b41c4e386a4616!2s1402%20AT%20Bussum!5e0!3m2!1snl!2snl!4v1614597815064!5m2!1snl!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                        </b-card-body>
                      </b-card>
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

    .row{
      margin: 0!important;
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

  .content{
    display: flex;
    flex-direction: column;
  }

  .card{
    max-width: 100% !important
  }

  @media screen and (max-width: 1200px){
    iframe{
      width: 100% !important;
    }
  }
</style>
