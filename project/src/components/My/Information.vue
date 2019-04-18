<template>
    <div class="sho">
        <div class="my_div">
            <p class="deng">
                <img v-if="obj.headPortrait == null" src="../../assets/img/My_img/logo_icon.png" width="100%" height="100%" alt="">
                <img v-else :src="obj.headPortrait" alt="">
            </p>
            <p class="deng1">
                {{this.obj.leaderName}}
            </p>
        </div>
        <div class="ss" @click="flag=!flag">
            <mt-cell class="name_s" title="联系人姓名" is-link>
                <span>{{obj.name}}</span>
            </mt-cell>
            <mt-cell class="name_s" title="我的提点" is-link>
                <span>{{obj.point}}</span>
            </mt-cell>
            <mt-cell class="name_s" title="电话" is-link>
                <span>{{obj.tel}}</span>
            </mt-cell>
            <mt-cell class="name_s" title="地址" is-link>
                <span>{{obj.address}}</span>
            </mt-cell>
        </div>
        <div class="tk" v-show="flag" @click="flag=!flag">
            <p class="yi">暂不支持修改资料，请联系客服人员</p>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            flag : false,
            obj : {}
        }
    },
    mounted() {
        this.$store.commit('changeShow');
        this.$store.commit("changeName",'我的资料');
        this.$store.commit("changeTab");
    },
    created(){
        this.$axios.get('getProxyTeacher2').then(response=>{
            console.log(response)
            this.obj = response.data.data;
        },error=>{
            console.log("错误信息:"+error);
        })
    }
}
</script>
<style scoped>
    .yi{
        text-align: center;
        line-height: .5rem;
    }
    .tk{
        width: 70%;
        height: .5rem;
        font-size: .14rem;
        background: #eee;
        margin: 0 auto;
    }
    .sho{
        background: #fff;
    }
    .my_div{
        width: 100%;
        height: 1.1rem;
        position: relative;
        background: #ffffff;
        padding-top: 10%;
    }
    .deng{
        width: 30%;
        margin: 0 auto;
        font-size: .2rem;
        border-radius: 50%;
        overflow: hidden;
        margin-bottom: 3%;
    }
    .deng1{
        text-align: center;
        font-size: .18rem;
    }
    .ss{
        width: 90%;
        overflow: hidden;
        background: #ffffff;
        margin: .2rem auto .4rem auto;
    }
   
    .name_s{
        padding: 0px;
        border-bottom: .01rem solid #ccc;
    }
    .my_img{
        margin-right: .1rem;
    }
</style>

