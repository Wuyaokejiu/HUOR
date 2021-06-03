import {Http} from "../utils/http";
import {formatTime} from "../utils/util";

class Draft{

    drafts = []

    async getAllDrafts(){
        this.drafts = await Http.request({
            url:`draft/all`
        })
        // console.log(this.activities)
        return this.drafts
    }

    async postDraft(title,state,limitNum,address,description,startTime,endTime){
        const createTime = formatTime(new Date())

        // console.log(title,state,limitNum,address,description,startTime,endTime,createTime)
        await Http.request({
            url:`draft/insert`,
            method:"POST",
            data:{
                title,
                state,
                address,
                limitNum,
                description,
                createTime,
                startTime,
                updateTime:endTime
            }
        })
    }
}

export {
    Draft,
}