<template>
    <div>
        <nav class="navbar navbar-expand navbar-light bg-light">
            <div class="container">
                <b-navbar-brand to="/">
                    <img src="../img/logorechts.png"/>
                </b-navbar-brand>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item dropdown">
                            <b-nav-item-dropdown text="Informatie" class="ml-auto" right>
                                <b-dropdown-item to="/">Homepagina</b-dropdown-item>
                                <div class="dropdown-divider"></div>
                                <b-dropdown-item to="/overons">Over Ons</b-dropdown-item>
                                <b-dropdown-item to="/vvt">VVT</b-dropdown-item>
                                <b-dropdown-item to="/revalidatiecentra">Revalidatiecentra</b-dropdown-item>
                                <b-dropdown-item to="/particulier">Particuliere instellingen</b-dropdown-item>
                            </b-nav-item-dropdown>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "HeaderComponent"
    }
</script>

<style scoped>
    nav{
        background-color: #ededed73 !important;
        padding: 1rem;
        border-bottom: 1px solid #bebebe;
    }

    li{
        width: -webkit-fill-available;
    }
</style>
