<template>
    <div>
        <!-- 用户信息 -->
        <HandleUser :userInf='userInf'/>
        <br>
        <!-- 背景图片和角色图片 -->
        <HandlePic :userInf='userInf'/>
    </div>
</template>

<script>
import  HandlePic from './HandlePic'
import HandleUser from './HandleUser'
export default {
    name:'Handle',
    components:{
        HandlePic,HandleUser
    },
    props:['userInf'],
}
</script>

<style>

</style>