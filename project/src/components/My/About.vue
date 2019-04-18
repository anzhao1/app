<template>
    <div class="my_div ho">
        <img class="my_img ho" src="../../assets/img/My_img/05.logo.png" width="40%" height="40%">
        <p class="my_p">北 京 深 度 创 远 教 育</p>
        <br>
        <p class="my_p1">
            深度创远，由数位中国领先的电子商务公司CTO联合建立，是中国最注重企业实战需要的IT技术培训企业，教学理念强调理论与实践并行，坚持让学员每天多学深一点，自创建以来，为中国的互联网企业共输送了数千名优秀毕业生。致力于打造中国IT职业教育第一品牌，服务中国众多的IT企业和有前沿IT技术需求的传统企业。公司以正式成为中国软件行业协会会员。
        </p>
        <br>
        <p class="my_p1">
            以一二级大中型互联网公司为主要服务对象，以认真、负责任的行业精神为行为导向，坚持每天教深一点、每天多学一点，坚持锲而不舍、埋头苦干的实干精神，培训一流的、高素质的工程师、技术型人才。
        </p>
        <br>
        <p class="my_p1">
            北京深度软件核心是使用JAVA、大数据、智能通信等互联网与物联网相关技术，可开发涉及领域包括不限于电商、大数据、金融、通信、P2P、社交、智能家居、旅游、拼车、家政、共享经济等各类系统。大到国家级项目，小到网站、微信公众号、APP、微信小程序都可以完美开发。 自创建以来已为超过数百家客户提供了“互联网+”解决方案落地服务目前已成功涉及政府、银行、o2o、建筑、远洋、汽车、旅游、餐饮、政务、农业、办公自动化、教育、体育、环保、公众服务及公益事业等领域。
        </p>
        <div class="my_div1 ho">
            <img class="my_img1 rit" src="../../assets/img/My_img/06.rwm.png" width="45%" height="45%" alt="">
            <img class="my_img1" src="../../assets/img/My_img/06.rwm.png" width="45%" height="45%" alt="">
            <p class="my_p2 ho zt_161">
                <span class="my_span1">微信号</span>
                <span>公众号</span>
            </p>
            
        </div>
        <div class="ho">
            <p class="my_p3 zt_16">
                联系电话：18613321091
            </p>
            <p class="mt_5 zt_16">
                联系电话：010-86201886
            </p>
            <p class="mt_5 zt_16">
                地址：北京市昌平区十三陵镇联合大学昌平校区
            </p>
        </div>
        <div class="he">

        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        this.$store.commit('changeShow');
        this.$store.commit("changeName",'关于我们');
        this.$store.commit("changeTab");
    },
}
</script>
<style scoped>
    .my_div{
        width: 90%;
        margin: 0 5% 0 ;
    }
    .my_img{
        width: 40%;
        margin: 5% 0 5% 30%;
    }
    .my_p{
        text-align: center;
        font-size: .26rem;
        background: linear-gradient(to bottom,#1ab8f6 0%,#f6d618 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .my_p1{
        font-size: .14rem;
        text-indent:.25rem
    }
    .my_div1{
        width: 80%;
        margin: .2rem auto;
    }
    .my_img1{
        margin-bottom: 2%;
        float: left;
    }
    .rit{
         margin-right:.2rem ;
    }
    .my_p2{
        width: 86%;
        margin-left: 14%;
    }
    .my_span1{
        margin-top: .2rem;
        margin-right: 38%;
    }
    .ho{
        overflow: hidden;
    }
    .zt_16{
        font-size: .16rem;
    }
    .mt_5{
        margin-top: 3%;
    }
    .he{
        height: .3rem;
    }
</style>
