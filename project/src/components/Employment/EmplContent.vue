<template>
    <div class="max-box">


        <mt-loadmore @bottom-status-change="handleBottomChange" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
            <ul>
                <router-link v-for="(item,i) in data" :key="i" :to="{name : 'details',query : {id : item.id}}" tag="li">
                    <div class="box">
                        <div class="con-box">
                            <div class="box-img">
                                <img v-if="item.img == null" src="../../assets/img/2.png" alt="">
                                <img v-else :src="item.img" alt="">
                            </div>
                            <div class="box-right">
                                <p class="right-title">{{item.title}}</p>
                                <div class="right-nan">
                                    <p class="nan-p">{{item.pageView}}</p>
                                    <p class="time-p">{{item.graduatedTime}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </router-link>
            </ul>
        </mt-loadmore>
    </div>
</template>
<script>

export default {
    data : function (){
        return {
            data : [],
            list : 0,
            topStatus: '',
            allLoaded : false,
            pa : 1
        }
    },
    created () {
        this.$axios.get("getallgraduated",{params : {page : 1,rows : 10}}).then(response=>{
            console.log(response)
            this.list = response.data.data.total;
            console.log(this.list)
            this.data = response.data.data.data;
        },error=>{
            console.log('错误信息:'+error)
        })
    },
    methods : {
        loadBottom() {
          this.handleBottomChange("loading");//上拉时 改变状态
            /*if(this.data.length < this.list){
                setTimeout(() => {
                    this.pa++;
                    this.$axios.get("getallgraduated",{params : {page : this.pa,rows : 10}}).then(response=>{
                        // this.data = [];
                        for(let a = 0;a<response.data.data.data.length;a++){
                            this.data.push(response.data.data.data[a])
                        }
                    })
                }, 1500);
            }else{
                this.allLoaded = true;// 若数据已全部获取完毕
            }*/
          this.pa++;
          setTimeout(() => {
            if(this.data.length < this.list){
              this.$axios.get("getallgraduated",{params : {page : this.pa,rows : 10}}).then(response=>{
                // this.data = [];
                for(let a = 0;a<response.data.data.data.length;a++){
                  this.data.push(response.data.data.data[a])
                }
              })
            }else{
              this.allLoaded = true;
            }
            this.handleBottomChange("loadingEnd");
            this.$refs.loadmore.onBottomLoaded();
          }, 1500);

        },
        handleBottomChange(status) {
            this.topStatus = status;
        },

    }
}
</script>
<style scoped>
    *{
        color: #666666;
    }
    .max-box{
        overflow: scroll;
        background: #ececec;
    }
    .box{
        width: 100%;
        overflow: hidden;
        padding: .15rem .15rem;
        box-sizing: border-box;
        background: #fff;
        margin-bottom: .1rem;
    }
    .box-ul{
        padding-top: .10rem;
    }
   .con-box{
       width: 100%;
   }
   .box-img{
       width: 40%;
       height: 1rem;
       overflow: hidden;
       padding-right: .1rem;
       float: left;
       box-sizing: border-box;
   }
   .box-img img{
       width: 100%;
       height: 100%;
   }
   .box-right{
       float: right;
       width: 60%;
       height: 1rem;
       box-sizing: border-box;
       position: relative;
   }
   .box-right p.right-title{
       display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
   }
   .box-right .right-nan{
       overflow: hidden;
       width: 100%;
       height: .2rem;
       position: absolute;
       bottom: 0;
   }
   .box-right p.nan-p{
       float: left;
       padding-left: .2rem;
       background: url("../../assets/img/employment/nan.png") no-repeat left center;
       background-size: 65%;
   }
   .box-right p.time-p{
       float: right;
   }
</style>
