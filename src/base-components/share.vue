<template>
    <!-- 带蒙版的分享提示组件 -->
    <van-popup class="my-van-pop" @click.native="toggle" v-model="show" overlay-class="myshadowbg" :close-on-click-overlay="false">
        <img src="../assets/img/share-bg.png" alt="">
    </van-popup>
</template>

<script>
import Back from 'base-components/back'
export default{
    data(){
        return{
            show:false
        }
    },
    methods:{
        toggle(){
            this.show = !this.show
        }
    },
}
</script>

<style scoped lang="stylus">
.my-van-pop
    position:fixed
    right:10px
    width:100%
    height:100%
    z-index:10
    background:rgba(0,0,0,0.5)!important
.my-van-pop
    img 
        width:200px
        position:fixed
        right:10px
        top:10px
</style>
