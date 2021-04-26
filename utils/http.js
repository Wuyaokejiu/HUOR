import {config} from "../config/config";
import {promisic} from "./utils";
// import {Token} from "../model/token";
import {codes} from "../config/exception-config";
import {HttpException} from "../core/http-exception";

class Http{

    static async request({
                             url,
                             data,
                             method='Get',
                             refetch = true,
                             throwError = false
                        }){
        let res
        try{
            res = await promisic(wx.request)({
                url:`${config.apiBaseUrl}${url}`,
                data,
                method,
                header:{
                    'content-type':'application/json;charset=utf-8',
                    // 'authorization':`Bearer ${wx.getStorageSync('token')}`
                    // appkey:config.appkey
                }
            })
        }catch (e){
            //1.无网络
            //2.api 参数不符合规范 正整数 -1 （成功调用api，但发生了错误） 服务器挂掉了
            //这里面只能捕捉第一种错误，不能捕捉第二种错误
            //如果token失效，二次重发，但是要判断httpstatuscode ==401
            if (throwError){
                throw new HttpException(-1,code[-1])
            }
            Http.showError(-1)
            return null
        }
        const code = res.statusCode.toString()
        if (code.startsWith('2')){
            return res.data
        }else {
            if (code === '401'){
                //二次重发
                if (data.refetch){
                    await Http._refetch({
                        url,
                        data,
                        method
                    })
                }
            }
            else {
                if (throwError){
                    throw new HttpException(res.data.code,res.data.message, code)
                }
                if (code === '404'){
                    if (res.data.code !== undefined){
                        return null
                    }
                    return res.data
                }
                const error_code = res.data.code
                Http.showError(error_code,res.data)
            }
        }

        return res.data
    }

    static async _refetch(data){
        // const token = new Token()
        // await token.getTokenFromServer()
        data.refetch = false
        return await Http.request(data)
    }

    static showError(error_code,serverError){
        let tip

        if (!error_code){
            tip = codes[9999]
        }
        else {
            if (codes[error_code] === undefined){
                tip = serverError.message
            }
            else {
                tip = codes[error_code]
            }
        }

        wx.showToast({
            icon:"none",
            title:tip,
            duration:3000
        })
    }
}

export {
    Http
}