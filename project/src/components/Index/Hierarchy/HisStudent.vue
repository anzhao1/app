<template>
    <div>

            <div class="max-box">
                <mt-loadmore @bottom-status-change="handleBottomChange" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
                    <ul v-if="aShow">
                        <li v-for="(item,b) in list" :key="b">
                            <div class="box">
                                <div class="con-box">
                                    <div class="box-img">
                                        <img :src="sr" alt="">
                                    </div>
                                    <div class="box-right">
                                        <p class="right-title">学生：{{item.name}}</p>
                                        <p>专业：{{item.major.name}}</p>
                                        <div class="right-nan">
                                            <p class="nan-p">时长：{{item.studyTime}}</p>
                                            <p class="time-p" @click="stuId(item.id)">查看详情>></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div v-else class="zw">
                        <div style="width:50%; margin:0 auto;">
                            <!-- <img width="100%" src="../../../assets/img/search/search-logo.png" alt=""> -->
                            <img width="100%" src="../../../assets/img/2.png" alt="">
                        </div>
                        暂无数据
                    </div>
                </mt-loadmore>
            </div>

    </div>
</template>

<script>
    export default {
        mounted() {
          this.$store.commit("changeName",'他的学生')
        },
        data :function(){
            return{
                list : [],
                tPage : 1,
                lLength : 1,
                allLoaded : false,
                topStatus: '',
                flag : true,
                translate: 0,
                moveTranslate: 0,
                wrapperHeight: 0,
                aShow : true
            }
        },
        computed : {
            sr(){
                return require('../../../assets/img/2.png');
            }
        },
        created(){
            this.$axios.get("getStudentByProxyTeacherId2",{params : {id: this.$route.query.teacherId,page:this.tPage,rows:10}}).then(response=>{
                this.list = response.data.data.rows;
                this.lLength = response.data.data.total;
                if(response.data.data.total == 0){
                    this.aShow = false;
                }
                console.log(response);
                // console.log(this.list);
            },error=>{
                console.log("错误信息:" + error);
            })
        },
        methods : {
            stuId(id){
            this.$router.push({ name: 'studentChild', query: { stuId: id }});
          },
          loadBottom(){
            // console.log("123")

            // let aa = this.tPage;
            this.handleBottomChange("loading");//上拉时 改变状态
            this.tPage += 1;
            /*if(this.list.length < this.lLength){
              setTimeout(()=> {
                this.tPage += 1;
                this.$axios.get("getStudentByProxyTeacherId2",{params : {id: this.$route.query.teacherId,page:this.tPage,rows:10}}).then(response=>{

                  for(let a = 0;a<response.data.data.rows.length;a++){
                    this.list.push(response.data.data.rows[a])
                  }
                });
              },1500)
            }else{
              this.allLoaded = true;
            }*/
            setTimeout(()=> {
              if(this.list.length < this.lLength){
                this.$axios.get("getStudentByProxyTeacherId2",{params : {id: this.$route.query.teacherId,page:this.tPage,rows:10}}).then(response=>{

                  for(let a = 0;a<response.data.data.rows.length;a++){
                    this.list.push(response.data.data.rows[a])
                  }
                });
              }else {
                this.allLoaded = true;
              }
              this.handleBottomChange("loadingEnd");
              this.$refs.loadmore.onBottomLoaded();
            },1500)
          },
          handleBottomChange(status) {
            this.topStatus = status;
          }
        }
    }
</script>

<style scoped>
    .navter{
        font-size: .16rem;
    }
    *{
        color: #7d7d7d;
        font-size: .15rem;
    }
    .max-box{
        overflow: scroll;
        padding: .01rem 0 0 0;
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
       padding: 5% 0;
   }
</style>
