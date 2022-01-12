<template>
        <!-- 网页头部 -->
    <div id="pageHeader">
        <!-- LOGO和标题 -->
        <img src='https://my.wulvxinchen.cn/genshincard/allpic/LOGO.png' width="60px">
        <p id="pageHeaderTitle">原神名片生成器</p>        
        <hr/> 
        <!-- 跳转链接 -->
        <span id="toLink">To &nbsp;&nbsp;&nbsp;
            <a href="https://wulvxinchen.cn/">导航站</a>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <a href="./about.html">关于</a>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <a href="https://bbs.nga.cn/read.php?tid=29830696">使用方法(NGA文字版)</a>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <a href="https://www.bilibili.com/video/av80433022">使用方法(B站视频版)</a>
        </span>
    </div>
</template>

<script>
export default {
    name:'MyHeader',
}
</script>

<style scoped>
    #pageHeader{
        text-align: left;
        margin-bottom: 2em;
        height: 8em;
        padding: 2em;
        background-color: aquamarine;
        border-radius: 1em;
        box-shadow:
            2.2px 1.9px 4.3px rgba(0, 0, 0, 0.03),
            5.3px 4.7px 10.3px rgba(0, 0, 0, 0.044),
            10px 8.8px 19.4px rgba(0, 0, 0, 0.055),
            17.9px 15.6px 34.6px rgba(0, 0, 0, 0.065),
            33.4px 29.2px 64.8px rgba(0, 0, 0, 0.079),
            80px 70px 155px rgba(0, 0, 0, 0.11);
    }
    #pageHeader img{
        float: left;
        transition: all 1s;
        margin-top: 5px;
        margin-right: 5px;
    }
    #pageHeader img:hover{
        transform: rotate(360deg);
    }
    #pageHeaderTitle{
        margin: .3em auto;
        font-size: 2.5em;
        font-weight: 200;
        color: #ffaa7f;
        text-shadow: 1px 1px 2px #00000062;
        
    }
    #pageHeader hr{
        margin: 0em auto 2em 0em;
        height:1px;
        width: 10em;
        border:none;
        border-top:3px solid #555555;
    }
    #toLink{

    }
    #toLink a{
        color: black;
		text-decoration: none;
        transition: all 0.3s;
    }
    #toLink a:hover{
        color: #ffaa7f;
    }
</style>