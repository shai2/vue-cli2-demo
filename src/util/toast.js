import { Toast } from 'vant';
export const waiting = () => {
    Toast({message:'敬请期待',duration:1000});
}

export const myToast = function(res,fnName){
    if (process.env.NODE_ENV==="development"){ //开发环境
        res.data ? //promise.catch()中为undefined
        Toast({message:`页面：${this.$route.path},接口：${fnName},错误：${res.data.msg}`,duration:3000}) : 
        Toast({message:`页面：${this.$route.path},接口：${fnName},错误：${res}`,duration:3000})
    }else{
        res.data ? Toast({message:res.data.msg,duration:1000}) : Toast({message:res,duration:1000});
    }
}