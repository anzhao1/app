<template>
    <div>
        <div class="max-box">
          <mt-popup v-model="popupOne">
            <table>
              <tr class="tab_tit">
                  <th>时间</th>
                  <th>旷课次数</th>
                  <!-- <th>请假次数</th> -->
                  <th>迟到次数</th>
                  <th>未打卡次数</th>
              </tr>
              <tr v-for="(item,a) in oneList" :key="a">
                <td>{{item.workDate}}</td>
                <td>{{item.absenteeism}}</td>
                <!-- <td>2</td> -->
                <td>{{item.late}}</td>
                <td>{{item.notSigned}}</td>
              </tr>
            </table>
        </mt-popup>
        <mt-popup v-model="popupTwo">
            <table>
              <tr class="tab_tit">
                  <th>时间</th>
                  <th>旷课次数</th>
                  <!-- <th>请假次数</th> -->
                  <th>迟到次数</th>
                  <th>未打卡次数</th>
              </tr>
              <tr v-for="(item,a) in twoList" :key="a">
                <td>{{item.workDate}}</td>
                <td>{{item.absenteeism}}</td>
                <!-- <td>2</td> -->
                <td>{{item.late}}</td>
                <td>{{item.notSigned}}</td>
              </tr>
            </table>
        </mt-popup>
        <mt-popup v-model="popupThree">
            <table>
              <tr class="tab_tit">
                  <th>时间</th>
                  <th>旷课次数</th>
                  <!-- <th>请假次数</th> -->
                  <th>迟到次数</th>
                  <th>未打卡次数</th>
              </tr>
              <tr v-for="(item,a) in threeList" :key="a">
                <td>{{item.workDate}}</td>
                <td>{{item.absenteeism}}</td>
                <!-- <td>2</td> -->
                <td>{{item.late}}</td>
                <td>{{item.notSigned}}</td>
              </tr>
            </table>
        </mt-popup>
        
            <div class="head">
              <p>姓名:{{this.$route.query.stuName}}</p>
            </div>
            <div v-if="aShow">
              <ul v-for="(item,a) in list" :key="a">
                  <li class="lis">
                      <div class="box">
                          <p class="box_p">{{item.stringWork}}</p>
                          <div class="con_box">
                            <p>
                              <span class="con_box_lef">旷课次数：{{item.attenceCount.absenteeism}}次</span>
                              <span class="con_box_rig"></span>
                            </p>
                            <p>
                              <span class="con_box_lef">迟到次数：{{item.attenceCount.late}}次</span>
                              <span class="con_box_rig">未打卡次数：{{item.attenceCount.notSigned}}次</span>
                            </p>
                            <p class="con_box_p" @click="ShouPup(a)">点击查看明细表</p>
                          </div>
                      </div>
                  </li>
              </ul>
            </div>
            <div v-else class="zw">
              <div style="width:50%; margin:0 auto;">
                  <!-- <img width="100%" src="../../../assets/img/search/search-logo.png" alt=""> -->
                  <img width="100%" src="../../../assets/img/2.png" alt="">
              </div>
                暂无数据
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data :function(){
            return{
                list : [],
                popupOne:false,
                popupTwo:false,
                popupThree:false,
                oneList : [],
                twoList : [],
                threeList : [],
                aShow : true
            }
        },
        methods : {
           ShouPup(a) {
             switch(a){
              case 0 : 
                this.popupOne = true;
                break;
              case 1 : 
                this.popupTwo = true;
                break;
              case 2 : 
                this.popupThree = true;
                break;
             }
                
            }
        },
        created(){
          this.$axios.get('getAttenceByStudentId',{params : {id : this.$route.query.stuId}}).then(response=>{
            this.list = response.data.data;
            console.log(response)
            if(response.data.data.length == 0){
              this.aShow = false;
            }
          },error=>{
            console.log("错误信息:" + error);
          });
          this.$axios.get('getAttenceByStudent1',{params : {id : this.$route.query.stuId} }).then(response=>{
            this.oneList = response.data.data;
          },error=>{
            console.log("错误信息:" + error);
          });
          this.$axios.get('getAttenceByStudent2',{params : {id : this.$route.query.stuId} }).then(response=>{
            this.twoList = response.data.data;
          },error=>{
            console.log("错误信息:" + error);
          });
          this.$axios.get('getAttenceByStudent3',{params : {id : this.$route.query.stuId} }).then(response=>{
            this.threeList = response.data.data;
          },error=>{
            console.log("错误信息:" + error);
          });
        }
    }
</script>

<style scoped>
.navter{
  font-size: .16rem;
}
*{
  color: #333;
  font-size: .15rem;
}
.max-box{
  overflow: hidden;
  background: #ececec;
}
.box{
  width: 100%;
  overflow: hidden;
  padding: 0 .15rem;
  box-sizing: border-box;
  background: #fff;
}
.box_p{
  border-bottom:.01rem solid #ececec;
  line-height: .4rem;
}
.con_box{
  width: 100%;
  padding: .2rem 0;
}
.con_box p{
  padding: .05rem 0;
  width: 100%;
  margin: 0 auto;
}
.con_box span{
  padding-left:10%;
}
.head{
  width: 100%;
  height: .5rem;
  background:#fff;
  line-height: .5rem;
  padding: 0 .15rem;
  font-family: "黑体";
}
.lis{
  border-top: .1rem solid #ececec;
}
.con_box .con_box_p{
  padding-top: .15rem;
  text-align: right;
}
.con_box_lef{
  width: 35%;
  float: left;
  overflow: hidden;
}


/*  弹框部分 */
.mint-popup{
  line-height: 0;
  width: 90%;
  overflow:auto;
}
/* 表格部分 */
table{
  clear: both;
  width: 98%;
  margin: 0 auto;
  text-align: center;
}
.tab_tit{
  border-collapse: collapse;
  height: .2rem;
}
.tab_tit th{
  clear: both;
  border-collapse: collapse;
}
 table,
 table tr th,
 table tr td {
  border:1px solid #0094ff;
  font-size: .1rem;
 }
table {
  margin-top: 1%;
  min-height: 25px;
  line-height: 25px;
  text-align: center;
  border-collapse: collapse;
}
.zw{
      width: 100%;
       background: #fff;
       text-align: center;
       padding: 5% 0;
       font-size: .16rem;
   }

</style>
