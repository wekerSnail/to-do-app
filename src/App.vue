<template>
  <div id="app">
    <side-tab></side-tab>
  </div>
</template>

<script>
  import sideTab from "components/sideTab";
  export default {
    name: "App",
    components: {
      sideTab
    },
     created() {
    //页面实例加载完立即初始化字体
    var cssEl = document.createElement("style");
    document.documentElement.firstElementChild.appendChild(cssEl);
    function setPxPerRem() {
      var dpr = 1;
      var pxPerRem = document.documentElement.clientWidth * dpr / 10;
      cssEl.innerHTML = "html{font-size:" + pxPerRem + "px!important;}";
    }
    setPxPerRem();
    window.onresize = setPxPerRem;
  }
  };

</script>

<style>
  @import "common/baseCss/iconfont";
  @import "common/baseCss/reset";
  @import "common/baseCss/theme";
  #app {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }

</style>
