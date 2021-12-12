<template>
  <div id="app">
    <!-- 主页 -->
    <Main/>
  </div>
</template>

<script>
import Main from './components/Main.vue'

export default {
    name: 'App',
    components: {
      Main
    }
}

//禁止右键菜单
function stop() {
    console.log("点不了点不了哈哈哈")
    return false;
}
document.oncontextmenu = stop;
</script>

<style>
    @font-face {
      /* 庞门泽道字体 */
      font-family: PMZD;
      src: url('https://my.wulvxinchen.cn/genshincard/fonts/PangMenZhengDao.ttf');
    }
    @font-face {
      /* 榜书字体 */
      font-family: BS;
      src: url('https://my.wulvxinchen.cn/genshincard/fonts/BangShu.ttf');
      /* src: url('../public/font/BangShu.ttf'); */
    }
  #app {
    /* font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; */
    font-family: BS;
    font-size: 16px;
    text-align: center;
    color: #2c3e50;
    margin-top: 10px;
    user-select:none;
    }
</style>
