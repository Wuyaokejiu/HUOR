import {Http} from "../utils/http";
import {formatTime} from "../utils/util";



class Activity{

    activities = []

    async getAllActivities(){
        const activities = await Http.request({
            url:`activity/all`
        })
        this.activities = activities
        // console.log(this.activities)
        return this.activities
    }

    async getCollectedActivities(){
        const collectedActivities = await Http.request({
            url:`activity/collected`
        })
        return collectedActivities
    }

    async getJoinedActivities(){
        const joinedActivities = await Http.request({
            url:`activity/joined`
        })
        return joinedActivities
    }

    async changeCollectedStatus(orderId,collection){
        await Http.request({
            url:`activity/changeCollectedStatus/${orderId}/${collection}`,
        })
    }

    async changeJoinedStatus(orderId,joinStatus){
        await Http.request({
            url:`activity/changeJoinedStatus/${orderId}/${joinStatus}`,
        })
    }

    async postActivity(title,state,limitNum,address,description,startTime,endTime){
        const createTime = formatTime(new Date())

        // console.log(title,state,limitNum,address,description,startTime,endTime,createTime)
        await Http.request({
            url:`activity/insert`,
            method:'POST',
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
    Activity
}