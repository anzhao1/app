<template>
    <div>
		<div class="content">
            <p class="logo_img">
                <img class="my_img" src="../../assets/img/My_img/logo_icon.png"/>
            </p>
            <p class="my_p">北 京 深 度 创 远 教 育</p>
			<div class="user">
				<img src="../../assets/img/My_img/icon01.png" width="6.5%"/>
				<input class="put" type="text" name="user"  placeholder="请输入手机号" v-model="username"/>
                <p class="tis">{{ tips }}</p>
            </div>
			<div class="pass">
				<img src="../../assets/img/My_img/icon02.png" width="5%" />
				<input class="put" type="password" name="pass" id="gain" placeholder="请输入密码" v-model="password"/>
                <p class="tis">{{ tippass }}</p>
            </div>
			<router-link :to="{name:'changepassword'}"><a  class="yzm">忘记密码 ?</a></router-link>
			<div class="login_an">
                <!-- <input class="logo_put" type="button" value="登陆"/> -->
                <button class="logo_put" @click="submit">登陆</button>
            </div>
            <p class="kog"></p>
            <p class="yc">咨询电话：18613321091</p>
        </div>

	</div>
</template>
<script>
import qs from 'qs'
export default {
    data() {
        return {
            username: '',
            password:'',
            tips:'',
            appName:"",
            appTel:'',
            tippass : ""
        }
    },
    mounted() {
        this.$store.commit('changeShow');
        this.$store.commit("changeName",'登陆');
        this.$store.commit("changeTab");
    },

    methods: {
        submit() {

            var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/ // 验证是不是以13,15,18,17开头的数字
            if (this.username === '') {
                this.tips='手机号不能为空！'
            }else if (this.username.length !== 11) {
                 this.tips='请输入11位的手机号码！'
            } else if (!myreg.test(this.username)) {
                 this.tips='请输入有效的手机号码！'
            }else if(this.password == ""){
                this.tippass = "密码不能为空";
            }else  {
                this.$axios({
                    method:"post",
                    url:"http://api.51shendu.cn/proxy_manage/appNew/appLogin",
                    data:qs.stringify({
                        appTel:this.username,
                        appPassword:this.password
                    }),
                }).then((res)=>{
                    console.log(res.data)

                    if(res.data.code=="0"){
                        // this.appName=res.data.appUsers.appName
                        // this.appTel=res.data.appUsers.appTel
                        // // console.log(res.data.appUsers.appTel)
                        // // 传值
                        // this.$store.commit("changeAppTel",this.appTel)
                        // this.$store.commit("changeAppName",this.appName)
                        // this.$store.commit("changeTeacherId",res.data.appUsers.proxyTeacherId)

                        //把对象转换成字符串
                        let userinfo = { username: this.username, password: this.password}
                        // 把userinfo存到localStorage里
                        localStorage.setItem('userinfo', JSON.stringify(userinfo))
                        // console.log(localStorage.getItem('userinfo'))
                        // this.$store.commit("changeCode",res.data.code);
                        //将token存储在vuex里面
                        this.$store.commit("setToken",res.data.data.token);
                        localStorage.setItem("setToken",res.data.data.token);
                        // console.log(localStorage.getItem("setToken"))


                        // console.log(this)


                        //跳转到路由
                        if(this.$route.query.redirect){
                          //获取用户名
                        /*  this.$axios.get('getProxyTeacher2').then(response=>{
                            console.log(response.data.data.tel)
                            this.$store.commit("changeAppName",response.data.data.leaderName)
                            this.$store.commit("changeAppTel",response.data.data.tel)
                            localStorage.setItem("tel",response.data.data.tel);
                            this.$store.commit("setHeadPortrait",response.data.data.headPortrait)
                          },error=>{
                            console.log("错误信息:"+error);
                          })*/
                          this.$router.replace({path:this.$route.query.redirect});
                        }else {
                          this.$router.push({name :"index"})
                        }
                    }else{
                       this.tips= res.data.msg;
                    }
                })
            }
        }
    },
    created () {
        // localStorage.getItem(key):获取指定key本地存储的值
        // localStorage.setItem(key,value)：将value存储到key字段
        // localStorage.removeItem(key):删除指定key本地存储的值
        // 从localStorage把userinfo拿出来
        let userinfo = localStorage.getItem('userinfo')
        if (userinfo) {
            // 把字符串转换成对象
            userinfo = JSON.parse(localStorage.getItem('userinfo'))
            console.log(userinfo)
            this.username = userinfo.username
            this.password = userinfo.password
        }
    }
}
</script>
<style scoped>
    .content{
        width: 90%;
        margin: 0 auto;
    }
    .kog{
        width: 100%;
        height: .5rem;
    }
    .yc{
        text-align: center;
        color: #1ab8f6;
    }
    .yzm{
        float: right;
        margin-top: .2rem;
    }
    .login_an{
       text-align: center;
    }
    .my_img{
        width: 100%;
        padding-bottom:10% ;
    }
    .logo_img{
        width: 45%;
        margin: 0 auto;
    }
    .logo_img {
        padding-top: 20%;
    }
    .user{
        margin: .8rem 0 .3rem 0;
    }
    .user,.pass{
        height: .4rem;
        border-bottom: 0.01rem solid #edebeb;
    }
    .user img{
        vertical-align: middle;
    }
    .pass img{
        vertical-align: middle;
    }
    .put{
        margin-left: .2rem;
        width: 50%;
        border: none;
        font-size: 0.16rem;
        letter-spacing: .01rem;
        line-height: .3rem;
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
    }
    .tis{
        margin-top: .15rem;
        padding-left: .4rem;
        color: red;
    }
    /*欢迎登陆*/
    .logo_information p{
        padding-left: .2rem;
        margin-bottom: .1rem;
        letter-spacing: .01rem;
    }
    .my_p{
        text-align: center;
        font-size: .26rem;
        background: linear-gradient(to bottom,#1ab8f6 0%,#f6d618 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>
