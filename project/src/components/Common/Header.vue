<template>
    <div>
        <mt-header class="headerBg" :title="getName" fixed>
            <router-link v-show="show" to="" slot="left">
                <mt-button @click="back" icon="back"></mt-button>
            </router-link>
            <!-- <mt-button icon="more" slot="right"></mt-button> -->
        </mt-header>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
    export default {
       name: "Header",
        methods : {
          back : function () {
            this.$router.back(-1)
          }
        },
        computed : {
          ...mapGetters([
            'show',
            'getName'
          ])
        }
    }
</script>

<style scoped>
    .headerBg{
        background: #333;
        color: #ffffff;
    }
</style>