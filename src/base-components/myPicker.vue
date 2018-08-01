<template>
    <van-popup v-model="showPicker" position="bottom">
        <van-picker :title="title" :columns="pickerArr" @cancel="toggle()" @confirm="getVal" :show-toolbar="true"/>
    </van-popup>
</template>

<script>
import storage from 'good-storage';
export default{
    props:{
        pickerArr:{
            type:Array,
            default:[]
        },
        title:{
            type:String,
            default:''
        }
    },
    data(){
        return{
            showPicker:false,
        }
    },
    methods:{
        getVal(e){
            this.$emit('getVal',e)
            this.toggle()
        },
        toggle(){
            this.showPicker = !this.showPicker
        }
    },
    created(){
    },
}
</script>

<style lang="stylus" scoped>

</style>