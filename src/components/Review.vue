<template>
  <div id="cardReview" ref="imageTofile">
    <div id="top">
        <div id="userbox">
            <div id="usernr">
                <!-- 用户昵称 -->
                <div id="username">{{userInf.name}}</div>
                <!-- 用户等级 -->
                <div 
                id="userrank"
                v-show="userInf.rank">{{"Lv."+userInf.rank}}
                </div>
            </div>
            <!-- 玩家UID -->
            <div 
                id="useruid"
                v-show="userInf.uid">{{"UID:"+userInf.uid}}
            </div>
        </div>
    </div>
    <!-- 角色图片 -->
    <div :class="{'rolePicDeep':deepdark,'rolePic':!deepdark}">
        <div 
        class="pic"
        v-for="(pic,index) in rolePicList" 
        :key="index">
        <img :src="'https://my.wulvxinchen.cn/genshincard/allpic/rolepic/'+pic+'.png'"
        
        :class="{'picImgDeep':deepdark,'picImg':!deepdark}"
        crossorigin = "*"/>
        </div>
    </div>
    <br>
    <!-- 生成图片的弹出框 -->
    <el-dialog
        title="预览"
        :visible.sync="dialogVisible"
        width="80%"
        >
        <!-- 生成的图片在这里 -->
        <img 
        :src="htmlUrl"
        crossorigin = "*"
        id="shotPic"/>
        <span slot="footer" class="dialog-footer">
            <el-button @click="closePic">关 闭</el-button>
             <el-button type="primary" @click="downloadIamge">点击保存</el-button>
        </span>
    </el-dialog>
  </div>
</template>


<script>
import html2canvas from "html2canvas"
export default {
    name:'Review',
    props:['userInf'],
    comments:{
        html2canvas
    },
    data(){
        return{
            //深渊模式
            deepdark:false,
            //角色图片列表
            rolePicList:[],
            //预览图片列表
            htmlUrl:'',
            //是否可见弹窗
            dialogVisible: false
        }
    },
    methods: {
        getBackPic(name){
            //获取背景图片名字
            document.getElementById("cardReview").style.backgroundImage="url('https://my.wulvxinchen.cn/genshincard/allpic/backpic/"+name+".png')"
        },
        setrolePicList(list){
            //获取角色图片列表
            this.rolePicList=list
        },
        getReviewPic(){
            //生成预览图片，调用html2canvas
            html2canvas(this.$refs.imageTofile, {
                crossorigin : "anonymous",
                backgroundColor: null,
                useCORS: true, // 如果截图的内容里有图片,可能会有跨域的情况,加上这个参数,解决文件跨域问题
            }).then((canvas) => {
                this.htmlUrl = canvas.toDataURL('image/png')
            })
            //提示成功
            this.$message({
                message: '生成成功',
                type: 'success'
            });
            //打开预览框
            this.dialogVisible = true;
        },
        //点击保存图片
        downloadIamge(){
            let image = new Image()
            image.setAttribute("crossOrigin", "anonymous")
            image.onload = function() {
                let picCanvas = document.createElement("canvas")
                picCanvas.width = image.width
                picCanvas.height = image.height
                picCanvas.getContext("2d").drawImage(image, 0, 0, image.width, image.height)
                let aPic = document.createElement("a") // 生成一个a元素
                aPic.download = 'GenshinCard' // 设置图片名称没有设置则为默认
                aPic.href = picCanvas.toDataURL("image/png") // 得到图片的base64编码数据,将生成的URL设置为aPi.href属性
                aPic.dispatchEvent(new MouseEvent("click")) // 触发aPi的单击事件
            };
            image.src = this.htmlUrl
            this.dialogVisible = false
        },
        //关闭预览框后的操作
        closePic(){
            //关闭预览框
            this.dialogVisible = false
            //0.5秒后清除预览图片
            setTimeout(function(){this.htmlUrl=''}, 500)
        },
        //切换深渊模式
        changeDeepDark(){
            if(this.rolePicList.length>4){
                
                this.deepdark=true
            }
            else if(this.rolePicList.length<=4){
                 this.deepdark=false
            }
        },
        //设置名字字号
        changeNameSize(){
        document.getElementById("username").style.fontSize=(3.1-(this.userInf.name.length-1)*0.15).toString()+"em"
        }
        //弹出框的函方法
    //     handleClose(done) {
    //     this.$confirm('确认关闭？')
    //       .then(_ => {
    //         done();
    //       })
    //       .catch(_ => {});
    //   },
        //删除所有角色名片的函数（暂时废弃
        // clearRoleList(){
        //     console.log("review里面的clear函数被调用了")
        //     this.rolePicList=''
        // },
    },
    watch:{
        deep:true,
        'rolePicList':{
            handler: function(){
                this.changeDeepDark()
            }
        },
        'userInf.name':{
            handler:function(){
                this.changeNameSize()
            }
        }
    },
    mounted() {
        // 如果页面一加载就需要生成图片,就在mounted里调用方法,给一个setTimeout,保证页面元素已存在
        setTimeout(this.toImage, 500)

        //删除所有角色名片的函数（暂时废弃
        //this.$bus.$on('clearRolePicListB',this.clearRoleList)

        //分别获取角色图片列表，背景图片，生成图片函数
        this.$bus.$on('rolePicList',this.setrolePicList)
        this.$bus.$on('backPicName',this.getBackPic)
        this.$bus.$on('getPic',this.getReviewPic)
    },
    beforeDestroy() {
        //删除所有角色名片的函数（暂时废弃
        //this.$bus.$off('clearRolePicListB')

        //分别解绑角色图片列表，背景图片，生成图片函数
        this.$bus.$off('rolePicList')
        this.$bus.$off('backPicName')
        this.$bus.$off('getPic')
    },
}
</script>

<style scoped>
    #cardReview{
        /* 尺寸为500*160 */ 
        width: 50em;
        height: 15em;
        position: relative;
        background-color: aquamarine;
        border-radius: 10px;
        overflow: hidden;
    }
    #top{
        position: absolute;
        display: flex;
        width: 100%;
        padding-bottom: 20px;
        background-image: inherit;
        background-size: 100%;
        text-shadow: 0px 0px 10px rgba(19, 19, 19, 50%);
    }
    #userbox{
        color: white;
        position: relative;
        display: inline-block;
        width: 50%;
        padding: 8px 8px;
        z-index: 1;
    }
    #usernr{
        display:flex;
    }
    #username{
        font-size: 2.8em;
        float: left;
        white-space: nowrap;
        /*overflow: hidden;*/
        text-overflow: ellipsis;
    }
    #userrank{
        font-size: 1.3em;
        margin: .2em;
        margin-top: 12px;
        margin-left: 8px;
        font-weight: bold;
    }
    #useruid{
        float: left;
        font-size: 1.5em;
        margin: .3em .3em;
        line-height: 1;
    }
    .rolePic{
        position:absolute;
        top:2em;
        right:.8em;
    }
    .rolePicDeep{
        width: 28em;
        position:absolute;
        top:0.8em;
        right:-3em;
    }
    .pic{
        float: left;
        margin: auto 1px;
    }
    .picImg{
        max-width:7.5em;
    }
    .picImgDeep{
        max-width:5.5em;
    }
    #shotPic{
        position: relative;
        left:0px;
        width: 60%;
    }
</style>