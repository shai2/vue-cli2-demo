<template>
    <div class="text-box">
        <p class="text">
            <span>{{text}}</span>
        </p>
    </div>
</template>

<script>
export default {
    props:{
        text:{
            type:String,
            default:"文字"
        }
    },
    data(){
        return {

        }
    }
}
</script>

<style scoped>
.text-box{text-align:center;margin:15px 0;}
.text{color:#909ba3;font-size:15px;position:relative;padding:0 15px;display:inline-block;line-height:20px;background:#f3f5f7;z-index:1;}
.text:after{position:absolute;left:-70px;right:-70px;top:10px;content:'';display:block;background:#e4e9f0;height:1px;z-index:-1;}
.text span{background:#f3f5f7;padding:0 5px;}
</style>
