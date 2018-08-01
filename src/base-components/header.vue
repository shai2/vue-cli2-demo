<template>
    <div v-if="!isWeixin" class="flex-row-between header" :class="{'header-white':type===2}">
        <div class="header-left">
            <slot name="left-icon">
                <Back></Back>
            </slot>
        </div>
        <div class="header-middle">
            {{title}}
        </div>
        <div class="header-right" @click="headerEvent">
            <slot name="right-icon" >
                <!-- <i class="iconfont icon-jiantouyou"></i> -->
            </slot>
        </div>
    </div>
</template>

<script>
import Back from 'base-components/back'
export default{
    data(){
        return{
            isWeixin:false
        }
    },
    props:{
        title:{
            type:String,
            default:'无标题',
        },
        type:{
            type:Number,
            default:1
        }
    },
    created(){
        // 判断微信浏览器
        if(navigator.userAgent.toLowerCase().indexOf('micromessenger') != -1){
            console.log('微信打开')
            this.isWeixin = true
            this.$nextTick(()=>{
                $('.container-width-header').css('padding-top',0)
            })
        }
    },
    methods:{
        headerEvent(){
            this.$emit("headerEvent")
        }
    },
    components:{
        Back
    }
}
</script>

<style scoped lang="stylus">
.header
    position:fixed
    top:0
    left:0
    right:0
    height:44px
    width:100%
    background:#29a1f7
    color:#fff
    padding:0 4%
    font-size:16px
    z-index:9
    *
        // line-height:44px
    .header-left
        font-size:15px
        width:100px
        text-align:left
    .header-middle
        font-size:15px
    .header-right
        font-size:15px
        width:100px
        text-align:right
.header-white
    background:#fff
    color:#000
</style>
