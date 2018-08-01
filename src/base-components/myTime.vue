<template>
    <van-popup v-model="show" position="bottom">
        <van-datetime-picker
            v-model="currentDate"
            type="date"
            :min-date="minDate"
            @confirm="getTime"
            @cancel="toggle()"
        />
    </van-popup>
</template>

<script>
import { DatetimePicker } from 'vant';
export default{
    data(){
        return{
            show:false,
            currentDate: new Date(),
            minDate: new Date(1942,10,1),           
        }
    },
    methods:{
        getTime(e){
            this.toggle()
            let _time = new Date(e).toLocaleDateString().replace(/\//g,'-');
            this.$emit('getTime',_time)
        },
        toggle(){
            this.show = !this.show
        }
    },
    created(){
    },
}
</script>

<style lang="stylus" scoped>

</style>