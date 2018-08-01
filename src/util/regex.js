export default{
    //手机号 1开头 + 3到9 + 9位数字
    telRegExp(str){
        let reg = /^[1][3-9]\d{9}/;
        return reg.test(str) ? true : false
    },
    //身份证号 15位全为数字 或18位 最后一位可能为X 
    idRegExp(str){
        var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        return reg.test(str) ? true : false
    },
    //密码 6位以上任意
    passwordRegExp(str){
        let reg = /.{6,}/;
        return reg.test(str) ? true : false
    },
    //姓名 1-20位的中英文和空格
    nameRegExp(str){
        let reg = /^[a-zA-Z\u4e00-\u9fa5 ]{1,20}$/;
        return reg.test(str) ? true : false
    },
    //邮箱 邮箱 m_p.12-34.qq.com
    emailRegExp(str){
        let reg = /[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+/;
        return reg.test(str) ? true : false
    },
    //日期是否存在
    isDate(year,month,day){
        if((month==4||month==6||month==9||month==11)&&(day>30)){
            return false
        }
        if(month==2){
            if(day>29){
                return false
            }
            if((((year%100==0)&&(year%400!=0))||(year%4!=0))&&(day>28)){
                return false
            }
        }
        return true;
    }

}