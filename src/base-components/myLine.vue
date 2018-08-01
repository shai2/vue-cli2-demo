<template>
    <div class="myline-with-icon" @click="toUrl">
        <div class="inner flex-row-between" :class="{'has-top-border':hasTopBorder}">
            <div class="left flex-row-center">
                <img v-if="!!this.icon" class="left-icon" :src="iconShow">
                <div class="linetitle">
                    {{title}}
                </div>
            </div>
            <div class="right flex-row-between">
                <!-- 右边的值 -->
                <slot></slot>
                <img v-if="showRightIcon" @click="del" class="right-icon" :src="rightIconShow">
            </div>
        </div>
    </div>

</template>

<script>
export default{
    props:{
        url:{ //跳转的url
            type:String,
            default:''
        },
        icon:{ //左边的icon地址
            type:String,
            default:''
        },
        title:{ //左边的标题
            type:String,
            default:'default'
        },
        hasTopBorder:{ //上边线条 第一个需要加false
            type:Boolean,
            default:true
        },
        showRightIcon:{ //是否显示右边的icon 默认箭头
            type:Boolean,
            default:true
        },
        rightIcon:{  //右边的icon地址
            type:String
        },
    },
    computed:{
        iconShow(){
            if(this.icon){
                return require(`img/${this.icon}`)
            }
        },
        rightIconShow(){
            return this.rightIcon?require(`img/${this.rightIcon}`):require('img/arrow-right.png')
        }
    },
    methods: {
        del(){
            if(this.rightIcon) this.$emit("del")
        },
        toUrl(){
            if(this.url.length>0){  //有链接才跳转
                this.$router.push(this.url)
            }
        }
    },
}
</script>

<style lang="stylus" scoped>
.myline-with-icon{
    line-height:1.4;
    width:100%;
    background:#fff;
    overflow:hidden;
    padding:0 15px;
}
.inner{padding:12px 0;}
.has-top-border{border-top:1px solid #e4e9f0;}
.linetitle{
    color:#546373;
    font-size:14px;
    line-height:21px;
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow:hidden;
}
.myline-text{line-height:21px;}
.left{max-width:80%;}
.left-icon{width:24px;height:24px;margin-right:5px;}
.right-icon{width:12px;height:12px;}
</style>