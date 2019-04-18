<template>
    <div>
        <mt-navbar class="page-part" v-model="selected">
            <mt-tab-item id="1"><span class="navter">我的上级</span></mt-tab-item>
            <mt-tab-item id="2"><span class="navter">我的下级</span></mt-tab-item>
        </mt-navbar>
        <!-- tabcontainer -->
        <mt-tab-container v-model="selected" style="margin-top:2px;">
            <mt-tab-container-item id="1" class="max-box">
                <ul v-if="this.obj.msg != '无上级老师信息'">
                    <li>
                        <div class="box">
                            <div class="con-box">
                                <div class="box-img">
                                    <img src="../../assets/img/2.png" v-if="this.obj.headPortrait == null" alt="">
                                    <img v-else :src="obj.headPortrait" alt="">
                                </div>
                                <div class="box-right">
                                    <p class="right-title">姓名：{{obj.name}}</p>
                                    <p>点位：{{obj.point}}</p>
                                    <div class="right-nan">
                                        <p class="nan-p">学生：{{obj.studentCount}}</p>
                                        <router-link class="time-p" :to="{name:'hierarchyChild',param:{}}" tag="p">查看详情>></router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div v-else class="zw">
                    <div style="width:50%; margin:0 auto;">
                        <img width="100%" src="../../assets/img/2.png" alt="">
                    </div>
                    无上级老师信息
                </div>       
            </mt-tab-container-item>
            <mt-tab-container-item id="2" class="max-box">
                <ul v-if="this.list">
                    <li v-for="(item,b) in list" :key="b">
                        <div class="box">
                            <div class="con-box">
                                <div class="box-img">
                                    <img src="../../assets/img/2.png" v-if="item.headPortrait == null" alt="">
                                    <img v-else :src="item.headPortrait" alt="">
                                </div>
                                <div class="box-right">
                                    <p class="right-title">姓名：{{item.name}}</p>
                                    <p>点位：{{item.point}}</p>
                                    <div class="right-nan">
                                        <p class="nan-p">学生：{{item.studentCount}}</p>
                                        <router-link class="time-p" :to="{name:'hierarchyChild',param:{}}" tag="p">查看详情>></router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div v-else class="zw">
                    <div style="width:50%; margin:0 auto;">
                        <img width="100%" src="../../assets/img/2.png" alt="">
                    </div>
                    无下级老师信息
                </div>    
            </mt-tab-container-item>
        </mt-tab-container>

    </div>
</template>

<script>
    export default {
        mounted() {
          this.$store.commit('changeShow');
          this.$store.commit("changeName",'上下层级');
          this.$store.commit("changeTab");
        },
        data :function(){
            return{
                selected:'1',
                obj : {},
                list :[]
            }  
        },
        computed : {
            sr(){
                return require('../../assets/img/cj01.png');
            }
        },
        //实例在创建时获取数据
        created(){
            this.$axios.get("getParentProxyTeacher",).then(response=>{
                this.obj = response.data;
                // console.log(response);
                // console.log(this.list);
            },error=>{
                console.log("错误信息:" + error);
            }),
            this.$axios.get("getSublevelProxyTeacher",).then(response=>{
                this.list = response.data.data;
                // console.log(response);
                // console.log(this.list);
            },error=>{
                console.log("错误信息:" + error);
            })
        },
        
    }
</script>

<style scoped>
    .navter{
        font-size: .16rem;
    }
    *{
        color: #666666;
    }
    .max-box{
        overflow: hidden;
        padding: .1rem 0 0 0;
        background: #ececec;
    }
    .box{
        width: 100%;
        overflow: hidden;
        padding: .15rem .15rem;
        box-sizing: border-box;
        background: #fff;
        margin-bottom: .01rem;
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
        overflow: hidden;
        margin-bottom: .2rem;
   }
    .box-right .right-nan{
        margin-top: .2rem;
   }
   .box-right p.nan-p{
       float: left;
   }
   .box-right .time-p{
       float: right;
   }
   .zw{
       background: #fff;
       text-align: center;
       padding-top: 5%;
       font-size: .16rem;
   }
</style>