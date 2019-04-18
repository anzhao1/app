<template>
    <div>
		<div class="update">
            <div class="pass">
				<input type="text" placeholder="输入手机号" @blur="bd" v-model="loginForm.tel"/>
			</div>
            <p class="tis">{{ tips }}</p>
			<div class="pass_one">
                <input class="new_pass" type="text" placeholder="请输入验证码" v-model="re"/>
                <button class="yzm" v-show="show" @click.prevent="getCode">获取验证码</button>
                <button class="yzm1" v-show="!show" disabled="disabled"> 重新获取({{count}}s)</button>
            </div>
            <p class="tsyzm">{{ tsyzm }}</p>
            <div class="pass">
				<input type="password" placeholder="请输入新密码" v-model.number="result1"/>
			</div>
			<div class="pass">
				<input type="password" placeholder="确认新密码" v-model.number="result2"/>
			</div>
            <p class="mmpd">{{ mmpd }}</p>
            <input @click.prevent="ew" class="logo_put" type="button" id="" value="提交" />
        </div>
        <!-- 17634010196 -->
	</div>
</template>
<script>
import qs from 'qs'
export default {
  name: 'login',
  data() {
    return {
      show: true,
      count: '',
      result1: '',
      result2: '',
      loginForm: {
        tel: ''
      },
      re: '',
      tsyzm:'',
      tips:'',
      mmpd:'',
      disabled:true
    }
  },
   mounted() {
        this.$store.commit('changeShow');
        this.$store.commit("changeName",'忘记密码');
        this.$store.commit("changeTab");
    },
    methods: {
        getCode() {
            const TIME_COUNT = 60
            if (!this.timer) {
                this.count = TIME_COUNT
                this.show = false
                this.timer = setInterval(() => {
                    this.count--
                    if(this.count == 0){
                        this.show = true
                        clearInterval(this.timer)
                        this.timer = null
                    }
                }, 1000)
            }
            this.$axios({
                method:"post",
                url:"http://api.51shendu.cn/proxy_manage/appNew/appMseeage",
                data:qs.stringify({
                    appTel:this.loginForm.tel,
                }),
            }).then((res)=>{
                console.log(res)
            })
        },
        ew:function(){
            if(this.result1 != this.result2){
                this.mmpd="您两次输入的密码不一致"
            }else{
                this.$axios({
                    method:"post",
                    url:"http://api.51shendu.cn//proxy_manage/appNew/updatePassword",
                    data:qs.stringify({
                        appTel:this.loginForm.tel,
                        password:this.result1,
                        code:this.re
                    }),
                }).then((res)=>{
                    console.log(res)
                    if(res.data.code== 0){
                        // 成功
                        this.$router.push({name :"login"})
                        this.disabled=true
                    }else if(res.data.code== 1){
                        this.tips= res.data.msg;
                    }
                })
            }
        },
        bd:function(){
            var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/ // 验证是不是以13,15,18,17开头的数字
            if (this.loginForm.tel === '') {
                this.tips='手机号不能为空！'
            }else if (this.loginForm.tel.length !== 11) {
                this.tips='请输入11位的手机号码！'
            } else if (!myreg.test(this.loginForm.tel)) {
                this.tips='请输入有效的手机号码！'
            } else{
                this.tips=''
            }
        }
    }
}
</script>
<style scoped>
    *{
        font-size: .16rem;
    }
    .update{
        width: 90%;
        margin: 0 auto;
        padding: .05rem 0;
    }
    .phone{
        margin-top: .2rem;
        padding-bottom: .2rem;
        border-bottom: .01rem solid #ccc;
    }
    .pass{
        width: 100%;
        height: .5rem;
        line-height: .5rem;
        background: #eee;
        margin-top: .2rem;
        border-radius: .05rem;
    }
    .new_pass{
        width: 50%;
        height: .5rem;
        line-height: .5rem;
        background: #eee;
        margin-top: .2rem;
        border-radius: .05rem;
        padding-left: 5%;
    }
    .yzm{
        display: inline-block;
        width: 40%;
        height: .45rem;
        background: #11b7ff;
        color: #fff;
        line-height: .45rem;
        text-align: center;
        border-radius: .05rem;
        margin-left: 2%;
    }
    .yzm1{
        display: inline-block;
        width: 40%;
        height: .45rem;
        background: rgb(211, 211, 211);
        color: #fff;
        line-height: .45rem;
        text-align: center;
        border-radius: .05rem;
        margin-left: 2%;
    }
    .pass input{
        width: 95%;
        height: 100%;
        padding-left: 5%;
        background: #eee;

    }
    .logo_put{
        margin-top: .3rem;
        width: 100%;
        line-height: .4rem;
        border-radius: 2%;
        border: none;
        color: #fff;
        font-size: .16rem;
        background: #11b7ff;
        letter-spacing: .01rem;
    }
    .mmpd,.tsyzm,.tis{
        color: red;
    }
    /* .yf{
        float: right;
    }
    .zf{
        float: left;
    }
    .my_s{
        width: 30%;
        height: .35rem;
        background: #11b7ff;
        float: right;
        line-height: .35rem;
        text-align: center;
    }
    .xg{
        width: 42% !important;
    }
    .bb{
        background: white;
    }
    .fs{
        width: 95% !important;
    }
    .tj{
        width: 95%;
    }
    .kog{
        width: 100%;
        height: .5rem;
    }
    .bg{
        background: #edebeb;
    }
    .yc{
        margin-left: 35%;
        color: #1ab8f6;
    }
    .zt_14{
        font-size: .14rem
    }
    .tc{
        margin-left: 10%;
    }
    .pr{
        margin: 5%;
    }
    .w100{
        width: 100%;
    }
    .logo_img{
        width: 45%;
    }
    .logo_img {
        padding-top: 20%;
    }
    .user{
        margin-top: 20%;
    }
    .user,.pass{
        width: 85%;
        padding: .1rem .1rem;
    }
    input{
        bottom: .05rem;
    }
    .put{
        margin-left: .2rem;
        width: 50%;
        border: none;
        font-size: 0.16rem;
        letter-spacing: .01rem;
        line-height: .3rem;
    }
    .pass{
        margin-top: .2rem;
    }
    .pass input{
        bottom: .07rem;
        margin-left: .25rem;
    }
    .gain{
        right: 0;
        bottom: .09rem;
        font-size: 0.16rem;
        color:#f2d743
    }
    .logo_put{
        margin-top: .3rem;
        width: 90%;
        line-height: .4rem;
        border-radius: 2%;
        border: none;
        color: #fff;
        font-size: .16rem;
        background: #11b7ff;
        letter-spacing: .01rem;
    } */

</style>
