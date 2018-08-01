<template>
<!-- 这是登录页面 -->
	<div class="full">
        <div class="login-top">
            <Header></Header>
            <img src="../../assets/img/banner-00.png">
        </div>
        <div class="login-middle">
            <van-field class="my-input" v-model="telNumber" placeholder="请输入手机号" />
            <van-field class="my-input flex-row-center" v-model="code" placeholder="请输入验证码" >
                <van-button class="codebutton" :disabled="!canSendCode" @click.native="sendCode" slot="button" size="small" type="primary">{{showMsg}}</van-button>
            </van-field>
            <van-button @click.native="login" block :disabled="cantLogin" type="primary">登录</van-button>
            <!-- <router-link class="link" to="/sendPW">忘记密码</router-link> -->
            <!-- <router-link class="link" to="/registerInfo1">注册</router-link> -->
        </div>
	</div>
</template>

<script>
import storage from 'good-storage'
import Vue from 'vue'
import api from 'api/api.js';
import { Toast } from 'vant';
export default {
    data(){
        return{
            telNumber:'',
            code:'',
            showMsg:"发送验证码",
            timer:'',
            canSendCode:true,
        }
    },
    computed:{
        cantLogin(){
            return this.telNumber&&this.code ? false : true
        }
    },
	methods:{
        sendCode(){
            if(this.telNumber.trim().length===0){
                Toast({message:'手机号不能为空',duration:1000});
                return
            }
            if(!this.canSendCode) return
            this.$ajax.get(api.sendVerifyCode,{params:{"mobile": this.telNumber}}).then(res=>{
                console.log(res.data)   
                if(res.data.code===0){
                    this.canSendCode = false
                    this.timer = 120
                    this.showMsg = this.timer + 's';
                    var T=setInterval(()=>{
                        this.timer--;
                        this.showMsg = this.timer + 's';
                        if(this.timer==0){
                            this.showMsg="重新发送";
                            this.canSendCode = true
                            clearInterval(T)
                        }
                    }, 1000)
                } else{
                    this.$Toast(res,'发送验证码')
                }     
            }).catch(res=>{
                this.$Toast(res,'发送验证码')
            })
        },
        login(){
            this.$ajax.post(api.codeLogin,{
                    'mobile':this.telNumber,
                    'code':this.code,
                    'inviteCode':this.$route.query.inviteCode,
                    'jobId':this.$route.query.jobId
                }).then((res)=>{
                if(res.data.code===0){
                    console.log(res.data.data,'验证码登录');
                    storage.set('userPhone', this.telNumber) //手机号 登录成功记录下来
                    storage.set('sessionId', res.data.data.sessionId) //token 全局请求
                    storage.set('jobIntentionFlag', res.data.data.jobIntentionFlag) //是否有意向（是否弹窗） 1是需要弹窗 0是不需要
                    this.$ajax.defaults.headers = {'sessionId':storage.get('sessionId','')} //axios加全局sessionId
                    this.$router.push('/job')
                }else{
                    this.$Toast(res,'验证码登录')
                }
            }).catch((res)=>{
                this.$Toast(res,'验证码登录')
            })
        }
	},
    created(){
        if(storage.get('sessionId')){ //有sessionId
            this.$router.push('/job')
        }
        this.telNumber = storage.get('userPhone' ,'')
    },
    components:{
    }
}
</script>

<style lang="stylus" scoped>
.codebutton
    width:88px
.full
    position:fixed
    top:0
    bottom:0
    left:0
    right:0
    background:#fff
.login-top
    img
        height:auto
        width:100%
.login-middle
    padding:0 15px
    height:50%
    width:100%
    background:#fff
.my-input
    margin:5% 0
.link
    display:inline-block
    margin-top:5%
    color:#bbb
</style>