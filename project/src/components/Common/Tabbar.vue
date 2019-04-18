<template>
  <div id="">
    <mt-tabbar v-model="selected" v-show="tab" fixed>
      <mt-tab-item id="index">
        <img slot="icon" src="../../assets/img/index-1.png" v-if="this.selected == 'index'">
        <img slot="icon" src="../../assets/img/index.png" v-else>
        首页
      </mt-tab-item>
      <mt-tab-item id="search">
        <img slot="icon" src="../../assets/img/search-1.png" v-if="this.selected == 'search'">
        <img slot="icon" src="../../assets/img/search.png" v-else>
        搜索
      </mt-tab-item>
      <mt-tab-item id="employment">
        <img slot="icon" src="../../assets/img/employment-1.png" v-if="this.selected == 'employment'">
        <img slot="icon" src="../../assets/img/employment.png" v-else>
        就业
      </mt-tab-item>
      <mt-tab-item id="my">
        <img slot="icon" src="../../assets/img/my-1.png" v-if="this.selected == 'my'">
        <img slot="icon" src="../../assets/img/my.png" v-else>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name:'app',
   data () {
    return {
      selected : 'index',
    }
  },
  computed : {
    ...mapGetters([
      'tab'
    ])
  },
  watch: {
    selected (newV, oleV) {
      this.$router.push({name : this.selected});
    }
  }
}
</script>

<style>
  .is-selected div{
    color: #db301e;
  }
  .mint-tabbar > .mint-tab-item.is-selected {
    background-color: #fafafa !important;
    color: #26a2ff;
  }
</style>
