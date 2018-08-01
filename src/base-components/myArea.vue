<template>
    <van-popup v-model="showAreaList" position="bottom">
        <van-area :area-list="areaList" @confirm="getArea" @cancel="toggle()"/>
    </van-popup>
</template>

<script>
import { Area } from 'vant';
import areaListOrigin from 'util/area.js'
export default{
    props:{

    },
    data(){
        return{
            areaList:(()=>areaListOrigin)(),
            showAreaList:false
        }
    },
    methods:{
        getArea(e){
            this.$emit('getArea',e)
            this.toggle()
        },
        toggle(){
            this.showAreaList = !this.showAreaList
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>