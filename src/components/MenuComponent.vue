<template>
    <b-col lg="4" class="d-none d-sm-none d-md-none d-lg-block">
        <div class="sidebar">
            <div class="p-3">
            <b-list-group class="list-group-flush">
                <b-list-group-item to="/overons">
                    <div class="ridz-box">
                        <img class="ridz-logo" src="../img/logo2.png" />
                        <span><b>Over Ons</b></span>
                    </div>
                </b-list-group-item>
                <b-list-group-item  to="/vvt">
                    <div class="ridz-box">
                        <img class="ridz-logo" src="../img/logo2.png" />
                        <span><b>Zorgorganisaties</b></span>
                    </div>
                </b-list-group-item>
                <b-list-group-item to="/zzp">
                    <div class="ridz-box">
                        <img class="ridz-logo" src="../img/logo2.png" />
                        <span><b>Werken als ZZP'er</b></span>
                    </div>
                </b-list-group-item>
                <b-list-group-item to="/contact">
                    <div class="ridz-box">
                        <img class="ridz-logo" src="../img/logo2.png" />
                        <span><b>Contact</b></span>
                    </div>
                </b-list-group-item>
            </b-list-group>
            </div>
        </div>
    </b-col>
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
        font-size: 17px;
    }

    .ridz-logo{
        width: 28px;
        height: 28px;
        margin-right: 6px;
    }

    .list-group-item{
        padding: 0.65rem 1.05rem;
    }
</style>