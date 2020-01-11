 <template>
    <div class="container center">
        <div class="col-md-8 order-md-1 mt-5">
            <h4 class="mb-3">Schrijf je in</h4>

            <b-form @submit="onSubmit">
                <b-row>
                    <b-form-group
                            label="Voornaam"
                            class="col-md-6 mb-4"
                    >
                        <b-form-input
                                id="input-1"
                                v-model="form.voornaam"
                                type="text"
                                required
                                placeholder="Voornaam">
                        </b-form-input>
                    </b-form-group>

                    <b-form-group
                            label="Achternaam"
                            class="col-md-6 mb-4"
                    >
                        <b-form-input
                                id="input-1"
                                v-model="form.achternaam"
                                type="text"
                                required
                                placeholder="Achternaam">
                        </b-form-input>
                    </b-form-group>
                </b-row>
                <b-row>
                    <b-form-group
                            label="Email"
                            class="col-md-6 mb-4"
                    >
                        <b-form-input
                                id="input-1"
                                v-model="form.email"
                                type="email"
                                required
                                placeholder="Email">
                        </b-form-input>
                    </b-form-group>

                    <b-form-group
                            label="Telefoonnummer"
                            class="col-md-6 mb-4"
                    >
                        <b-form-input
                                id="input-1"
                                v-model="form.telnummer"
                                type="tel"
                                required
                                placeholder="Telefoonnummer">
                        </b-form-input>
                    </b-form-group>
                </b-row>
                <b-row>
                    <b-form-group
                            label="Adres"
                            class="col-md-6 mb-4"
                    >
                        <b-form-input
                                id="input-1"
                                v-model="form.adres"
                                type="text"
                                required
                                placeholder="1234 Main St">
                        </b-form-input>
                    </b-form-group>

                    <b-form-group
                            label="Woonplaats"
                            class="col-md-6 mb-4"
                    >
                        <b-form-input
                                id="input-1"
                                v-model="form.woonplaats"
                                type="text"
                                required
                                placeholder="Amsterdam">
                        </b-form-input>
                    </b-form-group>
                </b-row>
                <b-row>
                    <b-form-group
                            label="Functie/opleiding"
                            class="col-md-12 mb-4"
                    >
                        <b-form-input
                                id="input-1"
                                v-model="form.functie"
                                type="text"
                                required
                                placeholder="Uw functie">
                        </b-form-input>
                    </b-form-group>
                </b-row>
                <b-row>
                    <b-form-group
                            label="Opmerking"
                            class="col-md-12 mb-4"
                    >
                        <b-form-textarea
                                id="input-1"
                                v-model="form.opmerking"
                                type="text"
                                required
                                class="input-group">
                        </b-form-textarea>
                    </b-form-group>
                </b-row>

                <b-button type="submit" variant="primary">Submit</b-button>
            </b-form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "form-page-component",
        data (){
            return{
                form: {
                    email: '',
                    voornaam: '',
                    achternaam: '',
                    telnummer:'',
                    adres:'',
                    woonplaats:'',
                    functie:'',
                    opmerking:''
                },
            }
        },
        methods: {
            onSubmit(e) {
                alert ('test');
                var bodyFormData = new FormData();

                bodyFormData.set('email', this.form.email);
                bodyFormData.append('voornaam', this.form.voornaam);
                bodyFormData.append('achternaam', this.form.achternaam);
                bodyFormData.append('telnummer', this.form.telnummer);
                bodyFormData.append('adres', this.form.adres);
                bodyFormData.append('woonplaats', this.form.woonplaats);
                bodyFormData.append('functie', this.form.functie);
                bodyFormData.append('opmerking', this.form.opmerking);

                axios({
                    method: 'post',
                    url: 'myurl',
                    data: bodyFormData,
                    headers: {'Content-Type': 'multipart/form-data' }
                })
                    .then(function (response) {
                        //handle success
                        console.log(response);
                    })
                    .catch(function (response) {
                        //handle error
                        console.log(response);
                    });
            }
        }
    }
</script>

<style scoped>
    .center{
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    div{
        text-align: left;
    }
</style>