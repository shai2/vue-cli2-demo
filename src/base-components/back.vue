<template>
    <div class="button-big">
        <i @click="back" class="iconfont icon-jiantouzuo"></i>
    </div>
</template>

<script>
// 返回的箭头
export default{
    props:{

    },
    methods:{
        back(){
            this.$router.back()
        }
    }
}
</script>

<style lang="stylus" scoped>
@import "~util/base.styl"
.iconfont
    extend-click()
.color-black
    color:#000
</style>