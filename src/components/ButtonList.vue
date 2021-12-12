<template>
      <div>
        <!-- 触发生成图片 -->
        <el-button 
        type="primary"
        plain
        @click="createCard">生成图片
        </el-button>
        <!-- 触发清除信息 -->
        <el-button 
        type="danger"
        plain
        @click="clearAll">清除信息
        </el-button>
    </div>
</template>

<script>
export default {
    name:'ButtonList',
    props:['userInf'],
    data(){
        return{
            //删除所有角色名片的函数（暂时废弃
            // rolePicList:[],
        }
    },
    methods: {
        //生成按钮触发的函数
        createCard(){
            //调用Review的生成函数      
            this.$bus.$emit('getPic','生成')
        },
        //清除按钮触发的函数
        clearAll(){
            //弹窗警告是否
            this.$confirm('这会清除已经输入的所有信息?', '警告', {
            confirmButtonText: '我想好了，清掉吧',
            cancelButtonText: '我后悔了',
            type: 'warning'
            }).then(() => {
            this.$message({
                type: 'success',
                message: '清除成功，没有后悔药哦！'
            });
            //确认删除后的操作
            this.userInf.name=''
            this.userInf.uid=''
            this.userInf.rank=''
            //删除所有角色名片的函数（暂时废弃
            // this.rolePicList=''
            // this.$bus.$emit('clearRolePicListA',this.rolePicList)
            // this.$bus.$emit('clearRolePicListB',this.rolePicList)

            //结束
            }).catch(() => {
            this.$message({
                type: 'info',
                message: '已取消操作，没有任何事情发生'
            }); 
            //取消删除后的操作
            //当然是没有操作啦！         
            });
        },
    },
}





</script>

<style>

</style>