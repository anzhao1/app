<template>
    <div>
        <div class="swiper">
            <mt-swipe :show-indicators="true" :auto="4000">
                <mt-swipe-item >
                    <img class="swiper_img" src="../assets/img/banner.png" alt="">
                </mt-swipe-item>
                <mt-swipe-item >
                    <img class="swiper_img" src="../assets/img/banner.png" alt="">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="entrance">
            <ul>
                <li @click="test1"><img src="../assets/img/dmloyment.png" height="58"></li>
                <li @click="test2"><img src="../assets/img/myStudent.png" height="58"></li>
            </ul>
        </div>
        <app-index-list></app-index-list>
    </div>
</template>

<script>
    import qs from 'qs'
    import IndexList from './Index/IndexList'
    export default {
        components : {
            appIndexList : IndexList
        },
        data : function () {
            return {
                swipers : []
            }
        },
        methods :{
            test1 :function(){

                this.$router.push({name : "hierarchy"})


            },
            test2 :function(){
                console.log("111")
                this.$router.push({name : "myStudent"})

            }
        },
        //实例在创建时获取数据
        created(){
            // this.$axios.get("").then(response=>{
            //     // console.log(response);
            //     this.swipers = response.data.message;
            //     console.log(this.swipers)
            // },error=>{
            //     console.log("错误信息:" + error);
            // })
        },
        mounted() {
            this.$store.commit('backShow');
             this.$store.commit('backTab');
            this.$store.commit("changeName",'首页')
        }

    }
</script>

<style scoped>
    .swiper{
        width: 100%;
        height: 2rem;
    }
    .entrance{
        width: 100%;
        height: 1rem;
        background-color: #f4f4f4;
    }
    .entrance ul{
        width: 90%;
        margin: 0 auto;
    }
    .entrance ul li{
        overflow: hidden;
        float: left;
        width: 50%;
        text-align: center;
        padding-top: .2rem;
    }
    .swiper_img{
        width: 100%;
        height: 100%;
    }
</style>
