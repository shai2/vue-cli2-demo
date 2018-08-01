<template>
    <!-- 带蒙版的Loading组件 -->
    <van-popup class="my-van-pop" v-model="isLoading" overlay-class="myshadowbg" :close-on-click-overlay="false">
        <van-loading color="white"/>
    </van-popup>
</template>

<script>
import { Toast, Loading } from 'vant';
export default{
    props:{
        isLoading:{
            type:Boolean,
            default:false
        }
    },
    methods:{

    }
}
</script>

<style lang="stylus" scoped>

</style>