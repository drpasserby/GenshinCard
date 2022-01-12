<template>
  <el-row>
        <el-col :span="12">
            <!-- 选择背景图片 -->
            <span class="seltext">选择背景</span>
            <br>
            <el-cascader
                v-model="backPic"
                :options="backPicList"
                :props="{ expandTrigger: 'hover' }"
                @change="sendBackPic"
                leaf>
            </el-cascader>
        </el-col>
        <el-col :span="12">
            <!-- 选择角色图片 -->
            <span class="seltext" style="margin-left:2.2em;">选择角色</span>
            <br>
            <el-cascader
                v-model="oneRolePic"
                :options="rolePicList"
                :props="{ expandTrigger: 'hover' }"
                leaf>
            </el-cascader>
            <span id="selbtn">
                <el-button 
                type="primary" 
                icon="el-icon-plus" 
                @click="addRolePic"
                :disabled="!!oneRolePic?false:true"
                circle></el-button>
                <el-button 
                type="danger" 
                icon="el-icon-minus" 
                @click="delRolePic"
                circle></el-button>
            </span>

            
        </el-col>
    </el-row> 
</template>

<script>
export default {
    name:'HandleUser',
    props:['userInf'],
    data(){
        return{
            //背景图片列表
            //尺寸：88*240px
            backPicList: [{
                value: 'roleCard',
                label: '人物名片',
                children:[],
                }, {
                value: 'wallpaper',
                label: '壁纸',
                children:[{
                    value: 'other/000',
                    label: '胡桃88505493',
                },{
                    value: 'other/001',
                    label: '重云94327484',
                },{
                    value: 'other/002',
                    label: '托马93985187',
                },{
                    value: 'other/003',
                    label: '温迪88511285',
                },{
                    value: 'other/004',
                    label: '荧85543107',
                },{
                    value: 'other/005',
                    label: '甘雨88062650',
                },{
                    value: 'other/006',
                    label: '优菈89927268',
                },{
                    value: 'other/007',
                    label: '琴&可莉90515771',
                },{
                    value: 'other/008',
                    label: '绫华&宵宫91452046',
                },{
                    value: 'other/009',
                    label: '影&九条92298341',
                },{
                    value: 'other/010',
                    label: '荧&天理93302401',
                },{
                    value: 'other/011',
                    label: '胡桃93995273',
                },{
                    value: 'other/012',
                    label: '雷电影92536275',
                },{
                    value: 'other/013',
                    label: '心海92155093',
                },{
                    value: 'other/014',
                    label: '早柚92038536',
                },{
                    value: 'other/015',
                    label: '宵宫91338358',
                },{
                    value: 'other/016',
                    label: '绫华91223236',
                },{
                    value: 'other/017',
                    label: '琴91105193',
                },{
                    value: 'other/018',
                    label: '烟绯91060409',
                },{
                    value: 'other/019',
                    label: '戴因90988010',
                },{
                    value: 'other/020',
                    label: '万叶90898356',
                },{
                    value: 'other/021',
                    label: '芭芭拉90873487',
                },{
                    value: 'other/022',
                    label: '阿贝多90666224',
                },{
                    value: 'other/023',
                    label: '甘雨88505522',
                },{
                    value: 'other/024',
                    label: '钟离85839109',
                },{
                    value: 'other/025',
                    label: '散兵85813475',
                },{
                    value: 'other/026',
                    label: '魈85771751',
                },{
                    value: 'other/027',
                    label: '公子85647662',
                },{
                    value: 'other/028',
                    label: '雷泽85569641',
                },{
                    value: 'other/029',
                    label: '可莉85523453',
                },{
                    value: 'other/030',
                    label: '莫娜85270043',
                },{
                    value: 'other/031',
                    label: '凝光85191094',
                },{
                    value: 'other/032',
                    label: '七七85154442',
                },{
                    value: 'other/033',
                    label: '行秋85114928',
                },{
                    value: 'other/034',
                    label: '菲谢尔85096989',
                },{
                    value: 'other/035',
                    label: '荧85030428',
                },{
                    value: 'other/036',
                    label: '温迪85011957',
                },{
                    value: 'other/037',
                    label: '安柏84976526',
                },{
                    value: 'other/038',
                    label: '迪卢克84976487',
                },{
                    value: 'other/039',
                    label: '钟离93250799',
                },{
                    value: 'other/040',
                    label: '芭芭拉&荧84993805',
                },{
                    value: 'other/041',
                    label: '胡桃&荧90640803',
                },
                ],
                }],
            //选中的背景图片
            backPic: '',
            //角色图片列表
            rolePicList:[{
                value: 'wind',
                label: '风元素',
                children: [{
                    value: 'KaedeharaKazuha',
                    label: '枫原万叶',
                },
                {
                    value: 'Jean',
                    label: '琴',
                    children: [{
                    value: 'Jean',
                    label: '琴',
                },{
                    value: 'Jean01',
                    label: '海风之梦',
                },]
                },
                {
                    value: 'Sucrose',
                    label: '砂糖',
                },
                {
                    value: 'Venti',
                    label: '温迪',
                },
                {
                    value: 'Xiao',
                    label: '魈',
                },
                {
                    value: 'Sayu',
                    label: '早柚',
                }
                ]},{
                value: 'rock',
                label: '岩元素',
                children: [{
                    value: 'Albedo',
                    label: '阿贝多',
                },{
                    value: 'AratakiItto',
                    label: '荒泷一斗',    
                },{
                    value: 'Ningguang',
                    label: '凝光',
                    children: [{
                    value: 'Ningguang',
                    label: '凝光',
                },{
                    value: 'Ningguang01',
                    label: '纱中幽兰',
                },]
                },
                {
                    value: 'Noelle',
                    label: '诺艾尔',    
                },
                {
                    value: 'Gorou',
                    label: '五郎',    
                },
                {
                    value: 'Yunjin',
                    label: '云堇',    
                },
                {
                    value: 'Zhongli',
                    label: '钟离',    
                }]
                },{
                value: 'thunder',
                label: '雷元素',
                children: [{
                    value: 'Yaemiko',
                    label: '八重神子',    
                },{
                    value: 'Beidou',
                    label: '北斗',
                },{
                    value: 'Fischl',
                    label: '菲谢尔',    
                },{
                    value: 'KujouSara',
                    label: '九条裟罗',    
                },{
                    value: 'Keqing',
                    label: '刻晴',
                    children: [{
                    value: 'Keqing',
                    label: '刻晴',
                },{
                    value: 'Keqing01',
                    label: '霓裾翩跹',
                },]
                },{
                    value: 'RaidenShogun',
                    label: '雷电将军',    
                },{
                    value: 'Razor',
                    label: '雷泽',    
                },{
                    value: 'Lisa',
                    label: '丽莎',    
                }]
                },{
                value: 'fire',
                label: '火元素',
                children: [{
                    value: 'Amber',
                    label: '安柏',
                }, {
                    value: 'Bennett',
                    label: '班尼特',
                },{
                    value: 'Diluc',
                    label: '迪卢克',    
                },{
                    value: 'HuTao',
                    label: '胡桃',    
                },{
                    value: 'Klee',
                    label: '可莉',    
                },{
                    value: 'Thoma',
                    label: '托马',    
                },{
                    value: 'Yanfei',
                    label: '烟绯',    
                },{
                    value: 'Xiangling',
                    label: '香菱',    
                },{
                    value: 'Yoimiya',
                    label: '宵宫',    
                },{
                    value: 'Xinyan',
                    label: '辛焱',    
                }]
                },{
                value: 'water',
                label: '水元素',
                children: [{
                    value: 'Barbara',
                    label: '芭芭拉',
                     children: [
                         {
                            value: 'Barbara',
                            label: '芭芭拉',
                         },
                         {
                            value: 'Barbara01',
                            label: '闪耀协奏',
                         }
                     ]
                },{
                    value: 'Tartaglia',
                    label: '达达利亚',
                },{
                    value: 'Mona',
                    label: '莫娜',
                },{
                    value: 'SangonomiyaKokomi',
                    label: '珊瑚宫心海',
                },{
                    value: 'Xingqiu',
                    label: '行秋',
                }]
                },{
                value: 'ice',
                label: '冰元素',
                children: [{
                    value: 'Aloy',
                    label: '埃洛伊',
                },{
                    value: 'Chongyun',
                    label: '重云',
                },{
                    value: 'Diona',
                    label: '迪奥娜',
                },{
                    value: 'Ganyu',
                    label: '甘雨',
                },{
                    value: 'Kaeya',
                    label: '凯亚',
                },{
                    value: 'Rosaria',
                    label: '罗莎莉亚',
                },{
                    value: 'Qiqi',
                    label: '七七',
                },{
                    value: 'Shenhe',
                    label: '申鹤',
                },{
                    value: 'KamisatoAyaka',
                    label: '神里绫华',
                },{
                    value: 'Eula',
                    label: '优菈',
                },]
                },{
                value: 'grass',
                label: '草元素',
                children: [{
                    value: '',
                    label: '吾律心尘',
                    disabled: true,
                }]
                },{
                value: 'Traveler',
                label: '爷',
                children: [{
                    value: 'Kong',
                    label: '空',
                },{
                    value: 'Ying',
                    label: '荧',
                }]
                }
            ],
            //选中的角色图片
            oneRolePic:'',
            //角色列表
            setRolePicList:[]
        }
    },
    methods: {
        //选择背景图片
        sendBackPic(){
            this.$bus.$emit('backPicName',this.backPic[this.backPic.length-1])
        },
        //增加一个角色图片
        addRolePic(){
            //判断剩余的图片数量
            if(this.setRolePicList.length<=7)
            {   
                //通知启动深渊模式
                if(this.setRolePicList.length==4)
                this.$message('启动深境螺旋模式了惹~');
            //增加一张角色图片
            this.setRolePicList.push(this.oneRolePic[this.oneRolePic.length-1])
            }
            else
            {   //警告太多了
                this.$notify({
                title: '警告',
                message: this.$createElement('i', { style: 'color: teal'}, '你最多只能添加八位角色'),
                type: 'warning'
                });
            }
            this.$bus.$emit('rolePicList',this.setRolePicList)
        },
        //删除一个角色图片
        delRolePic(){
            //判断剩余的图片数量
            if(this.setRolePicList.length>=1){
                //通知关闭深渊模式
                if(this.setRolePicList.length==5)
                this.$message('关闭深境螺旋模式了惹~');
                //删除一张角色图片
                this.setRolePicList.pop()
            }
            else
            {
                //警告已经删光了
                this.$notify({
                title: '警告',
                message: this.$createElement('i', { style: 'color: teal'}, '住手！都被你删光了还点？'),
                type: 'warning'
                });
            }
            this.$bus.$emit('rolePicList',this.setRolePicList)
        },
        
        //删除所有角色名片的函数（暂时废弃
        // clearRoleList(){
        //     console.log("pic里面的clear函数被调用了")
        //     this.setRolePicList=''
        // },
    },
    mounted() {
        //获取列表
        this.backPicList[0].children=this.rolePicList
    },
    //删除所有角色名片的函数（暂时废弃
    // mounted() {
    //     this.$bus.$on('clearRolePicListA',this.clearRoleList)
    // },
    // beforeDestroy() {
    //     this.$bus.$off('clearRolePicListA')
    // },
}
</script>

<style scoped>
    .seltext{
        float: left;
        margin-left: 5.8em;
    }
    #selbtn{
        margin: 0px 15px;
    }
</style>