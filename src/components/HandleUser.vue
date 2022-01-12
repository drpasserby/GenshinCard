<template>
  <div>
    <br>
    <br>
    <el-row :gutter="20">
        <el-col :span="8">
            <!-- 输入昵称 -->
            <span class="btntext">昵称</span>
            <el-input
            placeholder="请输入昵称(最大10字符)"
            v-model="userInf.name"
            maxlength="10"
            clearable>
            </el-input>
        </el-col>
        <el-col :span="8">
            <!-- 输入UID -->
            <span class="btntext">UID</span>
            <el-input
            placeholder="请输入UID"
            v-model="userInf.uid"
            maxlength="9"
            clearable>
            </el-input>
        </el-col>
        <el-col :span="8">
            <!-- 输入等级 -->
            <span class="btntext">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;等级</span>
            <br>
             <el-input-number 
             v-model="inputRank" 
             size="large" 
             @change="rankChange" 
             step-strictly 
             :min="1" 
             :max="60">
             </el-input-number>
        </el-col>
    </el-row>  
  </div>
</template>

<script>
export default {
    name:'HandleUser',
    props:['userInf'],
    data(){
        return{
            //临时等级存放
            inputRank:'1'
        }
    },
    methods: {
    //等级输入框变化后自动实时更改角色等级预览
      rankChange(value){
        this.userInf.rank=value;
      }
    }
}
</script>

<style scoped>
    .btntext{
        float: left;
    }
</style>