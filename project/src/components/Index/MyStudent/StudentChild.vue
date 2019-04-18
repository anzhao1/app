<template>
    <div>
        <table class="stuMessage">
            <tr>
                <td>姓名：{{obj.name}}</td>
                <td v-if="obj.major && obj.major.name">所学专业：{{obj.major.name}}</td>
            </tr>
            <tr>
                <td v-if="obj.proxyTeacher && obj.proxyTeacher.name">招生老师：{{obj.proxyTeacher.name}}</td>
                <td>电话：13678654321</td>
            </tr>
            <tr>
                <td colspan="2">性别：{{obj.sexText}}</td>
            </tr>
            <tr>
                <td colspan="2">籍贯：{{obj.address}}</td>
            </tr>
            <tr>
                <td>学习时常：{{obj.studyTime}}个月</td>
                <td>入学时间：{{obj.joinTime}}</td>
            </tr>
            <tr>
                <td>电话：{{obj.tel}}</td>
                <td>电话：13661349749(父)</td>
            </tr>
            <tr>
                <td>学费：{{obj.tuition}}元</td>
                <td>已交学费：{{obj.amountTuition}}元</td>
            </tr>
            <tr>
                <td colspan="2">是否就业：{{obj.findJobText}}</td>
            </tr>
        </table>
        <p class="eee"></p>
        <div class="payment">
            <p class="payment_qk">缴费情况</p>
            <div class="paymentChild">
                <p class="left">缴费记录</p>
                <router-link class="right" :to="{name:'paymentRecords',query:{stuId : obj.id}}" tag="p">点击查看详情 &gt</router-link>
            </div> 
        </div>
        <p class="eee"></p>
        <div class="payment">
            <p class="payment_qk">在校情况</p>
            <div class="paymentChild">
                <p class="left">在校考勤</p>
                <router-link class="right" :to="{name:'attendanceRecord',query:{stuId : obj.id,stuName : obj.name}}" tag="p">点击查看详情 &gt</router-link>
            </div> 
             <div class="Child">
                <p class="left">在校考试</p>
                <router-link class="right" :to="{name:'testRecords',query:{stuId : obj.id,stuName : obj.name}}" tag="p">点击查看详情 &gt</router-link>
            </div> 
             <div class="paymentChild">
                <p class="left">在校谈话</p>
                <router-link class="right" :to="{name:'memconRecords',query:{stuId : obj.id,stuName : obj.name}}" tag="p">点击查看详情 &gt</router-link>
            </div> 
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                obj : {},
            }
        },
        //实例在创建时获取数据
        mounted(){
             this.$store.commit("changeName",'学生详情')
            this.$axios.get("getStudentById3",{params : {id :this.$route.query.stuId}}).then(response=>{
                this.obj = response.data.data; 
                console.log(response);
              /*   console.log(this.list); */
            },error=>{
                console.log("错误信息:" + error);
            })
           
        }
    }
</script>

<style scoped>
    .stuMessage{
        width: 90%;
        margin: 0 auto;
        border-collapse: collapse;
    }
    .stuMessage tr{
        line-height: .5rem;
        border-bottom: .01rem solid #666666;
    }
    .stuMessage tr td{
        width: 50%;
    }
    .eee{
        margin-top: .1rem;
        height: .2rem;
        background-color: #eee;
    }
    .payment{
        padding-top: .2rem;
        overflow: hidden;
    }
    .payment .payment_qk{
        padding-left: .2rem; 
        border-left: .05rem solid #5e35b1;
    }
    .paymentChild{
        width: 90%;
        margin: 0 auto;
        margin-top: .2rem;
        line-height: .6rem;
        overflow: hidden;
        border-top:.01rem solid #666666; 
        border-bottom:.01rem solid #666666; 
    }
    .Child{
        width: 90%;
        margin: 0 auto;
        overflow: hidden;
        margin-top: .2rem;
    }
    .left{
        float: left;
    }
    .right{
        float: right;
    }
</style>