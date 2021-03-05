<template>
  <div class="home">
    <div class="aside"><aside-nav></aside-nav></div>
    <div class="content">
      <header-nav></header-nav>
      <router-view :key="key"></router-view>
    </div>
  </div>
</template>

<script>
import asideNav from '@/components/asideNav'
import headerNav from '@/components/headerNav'
export default {
  name: 'Home',
  components:{
    asideNav,
    headerNav
  },
  computed:{
    key(){
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  height: 100%;
  display: flex;
  .content{
    flex: 1;
    box-sizing: border-box;
  }
}
  .aside{
    width: 160px;
    height: 100%;
  }
</style>

