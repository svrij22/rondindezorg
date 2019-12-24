<template>
    <div class="p-3">
    <b-list-group>
        <b-list-group-item to="/overons">
            <div class="ridz-box">
                <img class="ridz-logo" src="../img/logo2.png" />
                <span >Over Ons</span>
            </div>
        </b-list-group-item>
        <b-list-group-item  to="/ggz">
            <div class="ridz-box">
                <img class="ridz-logo" src="../img/logo2.png" />
                <span>GGZ</span>
            </div>
        </b-list-group-item>
        <b-list-group-item>
            <div class="ridz-box">
                <img class="ridz-logo" src="../img/logo2.png" />
                <span>Gehandicaptenzorg</span>
            </div>
        </b-list-group-item>
        <b-list-group-item>
            <div class="ridz-box">
                <img class="ridz-logo" src="../img/logo2.png" />
                <span>Revalidatiecentra</span>
            </div>
        </b-list-group-item>
    </b-list-group>
    </div>
</template>

<script>
    export default {
        name: "menu-component"
    }
</script>

<style scoped>
    .ridz-box{
        display: flex;
        align-items: center;
    }

    .ridz-box span{
        font-size: 20px;
    }

    .ridz-logo{
        width: 34px;
        height: 34px;
        margin-right: 6px;
    }
</style>