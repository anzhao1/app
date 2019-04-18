<template>
    <div class="details-box">
        <div v-if="sShow" class="text-box-content">
            <p class="title mar-but"><strong>{{text.title}}</strong></p>
            <p class="time mar-but"><span>发布于：</span>{{text.graduatedTime}}</p>
            <div class="hr"></div>
            <div class="img" v-html="text.content">
                
            </div>
        </div>
        <div v-else class="zw">
            <div style="width:50%; margin:0 auto;">
                <img width="100%" src="../../../assets/img/2.png" alt="">
            </div>
            暂无数据
        </div>
    </div>
    
</template>
<script>
   
export default {
    data : function(){
        return {
            text : {},
            sShow : true
        }
    },
    mounted() {
        this.$store.commit('changeShow');
        this.$store.commit("changeName",'就业详情');
        this.$store.commit("changeTab");
    },
    created () {
        this.$axios.get("getgraduatedbyId",{params : {id : this.$route.query.id}}).then(response=>{
            
            if(response.data.data == null){
                this.sShow = false;
            }
            this.text = response.data.data;
        },error=>{
            console.log('错误信息:'+error)
        })
    }
}
</script>
<style scoped>
    .mar-but{
        margin-bottom: .1rem;
    }
    .details-box{
        padding: .3rem .2rem;
        overflow: hidden;
        font-size: .18rem;
        line-height: .25rem;
    }
    .hr{
        margin: .2rem 0;
        border-bottom: .01rem solid #ccc;
    }
    .img {
        margin-bottom: .25rem;
    }
    .img img{
        width: 100%;
    }
    .text{
        text-indent: 2em;
        margin-bottom: .25rem;
    }
    .zw{
      width: 100%;
       background: #fff;
       text-align: center;
       padding: 5% 0;
       font-size: .16rem;
   }
</style>
