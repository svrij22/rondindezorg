<template>
    <div class="footer">
        <b-container>
            <b-row>
                <p>Copyright © 2020 Ridz<br>
                035 - 622 40 02<br>
                06 - 1496 25 98</p>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "footer-component"
    }
</script>

<style scoped>
    .footer{
        border-top: 1px solid #bebebe;
        min-height: 110px;
        background-color: #3b3b3b !important;
    }
    .row{
        padding: 10px;
        color: #f1f1f1;
    }

    p{
        text-align: left;
    }
</style>