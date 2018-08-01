<template>
    <mt-popup v-model="popupShow" :position="position" class="w100">
            <div class="content-container">
                <div class="button-line flex-row-between">
                    <mt-button size='small' style="width:70px;" type="primary" plain @click="_hide">取消</mt-button>
                    <span class="title">{{popTitle}}</span>
                    <mt-button @click="getPopValue" size='small' style="width:70px;" type="primary">确定</mt-button>
                </div>
            </div>
            <slot></slot>
    </mt-popup>
</template>

<script>
export default{
    data(){
        return{
            popupShow:false,
            popValue:'没有值'
        }
    },
    props:{
        position:{
            type:String,
            default:"bottom"
        },
        popTitle:{
            type:String,
            default:'默认标题'
        }
    },
    methods:{
        getPopValue(){
            this.$emit('getPopValue',this.popValue)
            this._hide()
        },
        myPopShow(){
            this.popupShow = true
        },
        _hide(){
            this.popupShow = false
        }
    }
}
</script>

<style lang="stylus" scoped>
.bg-container
    position:fixed
    top:0
    bottom:0
    left:0
    right:0
    background:#000
    opacity:0.5
    z-index:9000
.content-container
    width:100%
    background:#fff
.button-line
    padding:15px
    font-size:0
    border-bottom: solid 1px #eaeaea;
.botton
    display: inline-block;
    width: 50%;
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    color: #26a2ff;
    font-size:16px
.title
    font-size:18px
    line-height:33px
</style>