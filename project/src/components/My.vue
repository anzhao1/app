<template>
    <div class="sho">
        <div class="my_div" v-if="this.ww">
            <router-link :to="{name:'login'}">
                <p class="deng">登陆</p>
            </router-link>
        </div>
        <div class="my_div1" v-else>
            <p class="deng2">
                <img v-if="this.headPortrait == null" src="../assets/img/My_img/logo_icon.png" width="100%" height="auto" alt="">
                <img v-else width="100%" height="auto" :src="headPortrait" alt="">
            </p>
            <p class="deng1">
                {{this.$store.state.appName}}
            </p>
        </div>
        <div class="ss">
            <router-link :to="{name:'information'}" >
                <mt-cell class="name_s" title="我的资料" is-link>
                    <img class="my_img" slot="icon" src="../assets/img/My_img/01.wdzl.png"  height="18">
                </mt-cell>
            </router-link>
            <router-link :to="{name:'password'}">
                <mt-cell class="name_s"  title="修改密码" is-link>
                    <img class="my_img" slot="icon" src="../assets/img/My_img/02.xgmm.png"  height="18">
                </mt-cell>
            </router-link>
            <mt-cell class="name_s" title="客服热线" is-link>
                <a href="tel://010-86201886">010-86201886</a>
                <img class="my_img" slot="icon" src="../assets/img/My_img/03.kfrx.png"  height="18">
            </mt-cell>
            <router-link :to="{name:'about'}">
                <mt-cell class="name_s" title="关于我们" is-link>
                    <img class="my_img" slot="icon" src="../assets/img/My_img/04.gywm.png" height="18">
                </mt-cell>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                flag : false,
                ww : true,
                headPortrait : ''
            }
        },
        props:{
            // ww : Array
        },
        methods: {
        },
        mounted() {
            this.$store.commit('backShow');
            this.$store.commit('backTab');
            this.$store.commit("changeName",'我的');
        },
        created(){
            if(localStorage.getItem("setToken")){
                this.ww = false;
            }
            // console.log(this.$store.state.headPortrait)
            this.headPortrait = this.$store.state.headPortrait;
    }
    }
</script>

<style scoped>
    *{
        color: #000;
    }
    .sho{
        background: #ececec;
    }
    .my_div{
        width: 100%;
        height: .8rem;
        padding-top: .5rem;
        background: #ffffff;
    }
    .deng{
        width: 20%;
        height: .25rem;
        margin: 0 auto;
        border:solid 0.02rem #15b6fa;
        text-align: center;
        font-size: .14rem;
        color: #15b6fa;
        line-height: .25rem;
    }
    .ss{
        width: 100%;
        overflow: hidden;
        background: #ffffff;
        margin-top:.2rem;
    }
    .my_img{
        margin-right: .1rem;
    }
    .name_s{
        padding: 0px;
        border-bottom: .01rem solid #ccc;
    }
    .my_div1{
        width: 100%;
        height: 1.1rem;
        position: relative;
        background: #ffffff;
        padding-top: 10%;
    }
    .deng2{
        width: 30%;
        margin: 0 auto;
        border-radius: 50%;
        overflow: hidden;
    }
    .deng1{
        /* width: 20%;
        height: 25%; */
        /* position: absolute;
        top: 70%;
        right: 40%; */
        margin-top: 3%;
        text-align: center;
        font-size: .18rem;
    }
</style>
