<template>
    <div class="myMessageBox">
        <div class="bg-container" v-show="bgShow" @click="myMessageBoxHide"></div>
        <transition name="fade">
            <div class="content-container" v-show="show">
                <div class="title">{{messageBoxTitle}}</div>
                <div class="message-content flex-column-center">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default{
    data(){
        return{
            show:false,
            bgShow:false
        }
    },
    props:{
        messageBoxTitle:{
            type:String,
            default:'默认标题'
        }
    },
    methods:{
        myMessageBoxShow(){
            this.show = true
            this.bgShow = true
        },
        myMessageBoxHide(){
            this._hide()
        },
        _hide(){
            this.show = false
            setTimeout(()=>{
                this.bgShow = false
            },150)
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
    border-radius:5px
    overflow:hidden
    position:fixed
    height:auto
    top:30%
    left:30px
    right:30px
    background:#fff
    z-index:9500
.message-content
    padding:10px
.title
    color:#fff
    font-weight:bold
    width:100%
    display:inline-block
    font-size:16px
    line-height:33px
    padding:20px 0
    text-align:center
    background:url(../../assets/pop-bg.png) no-repeat center/100% 100%
.fade-enter-active, .fade-leave-active
  transition: opacity 0.15s
.fade-enter, .fade-leave-to
  opacity: 0
</style>