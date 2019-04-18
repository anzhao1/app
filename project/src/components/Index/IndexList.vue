<template>
    <div class="max-box">
        <p class="title">
            <span></span>
            就业精英榜
        </p>
        <ul>
            <router-link v-for="(item,a) in list"  :key="a"  :to="{name : 'details',query : {id : item.id}}" v-if="a <= 4" tag="li">
                <div class="box">
                    <div class="con-box">
                        <div class="box-img">
                            <!-- <img src="../../assets/img/cj01.png" v-if="item.img == null" alt=""> -->
                            <img src="../../assets/img/2.png" v-if="item.img == null" alt="">
                            <img :src="item.img" v-else alt="">
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
    </div>
</template>

<script>
    export default {
        data(){
            return{
                list : []
            }
        },
        created(){
            this.$axios.get('getElite').then(response=>{
                // console.log(response);
                this.list = response.data.data;
                // console.log(this.list);
            },error=>{
                console.log("错误信息："+ error)
            })
        },
         computed : {
            sr(){
                return require('../../assets/img/index/index_02.png');
            }
        },
        methods : {
            loadMore() {
                this.loading = true;
                setTimeout(() => {
                    let last = this.list[this.list.length - 1];
                    for (let i = 1; i <= 10; i++) {
                        this.list.push(last);
                    }
                    this.loading = false;
                }, 2000);
            }
        }
    }
</script>

<style scoped>
    *{
        color: #666666;
    }
    .max-box{
        overflow: hidden;
        padding: .1rem 0 0 0;
        background: #fff;
    }
    .max-box .title{
        font-size: .16rem;
        line-height: .17rem;
        font-weight: bold;
        font-family: "黑体";
    }
    .max-box .title span{
        display: block;
        width: .04rem;
        height: .17rem;
        background: #5e35b1;
        float: left;
        margin-right: .08rem;
    }
    .max-box ul li{
        margin-bottom: -.2rem;
    }
    .box{
        width: 100%;
        overflow: hidden;
        padding: .15rem .15rem;
        box-sizing: border-box;
        background: #fff;
        float: left;
        border-bottom:solid .01rem #cccccc;
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
       box-sizing: border-box;
   }
   .box-right p.right-title{
       display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        margin-bottom: .42rem;
   }
   .box-right p.nan-p{
       float: left;
       padding-left: .2rem;
       background: url("../../assets/img/index/index_03.png") no-repeat left center;
       background-size: 65%;
   }
   .box-right p.time-p{
       float: right;
   }
</style>