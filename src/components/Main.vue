<template>
  <div id="MainPage">
    <!-- 网页头部 -->
    <MyHeader/>
    <!-- 预览区域 -->
    <Review
    :userInf='userInf'
    />
    <!-- 用户操作区域 -->
    <Handle
    :userInf='userInf'
    />
    <br>
    <!-- 按钮区域 -->
    <button-list
    :userInf='userInf'
    />
  </div>
</template>

<script>
import Review from './Review'
import Handle from './Handle'
import ButtonList from './ButtonList'
import MyHeader from './MyHeader'

export default {
    name:'Main',
    components:{
        Review,Handle,ButtonList,MyHeader
    },
    data(){
        return{
            userInf:{
                name:'律心尘',
                uid:'100114514',
                rank:''
            }
        }
    },
    methods: {
      open() {
        this.$alert('请使用电脑/平板访问', '温馨提示', {
          confirmButtonText: '喔~'
        });
      }
    },
    mounted(){
      this.open()
    }
}
</script>

<style scoped>
    #MainPage{
        max-width: 50em;
        margin: 0px auto;
    }
</style>