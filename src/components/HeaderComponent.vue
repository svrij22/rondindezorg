<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <img class="navbar-brand" src="../img/logorechts.png"/>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item dropdown">
                        <b-nav-item-dropdown text="Informatie" class="ml-auto" right>
                            <b-dropdown-item to="/">Homepagina</b-dropdown-item>
                            <div class="dropdown-divider"></div>
                            <b-dropdown-item to="/contact">Contact</b-dropdown-item>
                            <b-dropdown-item href="#">Optie 2</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </li>
                </ul>
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
</style>
