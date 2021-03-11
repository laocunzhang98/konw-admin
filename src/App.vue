<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">

@mixin log($color:black){
  background:$color
}
  html,
  body,
  #app{
    height: 100%;
    overflow: hidden;
    @include log("rgb(244,245,245)")
  }
</style>
