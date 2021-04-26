import {Http} from "../utils/http";



class Activity{

    activities = []

    async getAllActivities(){
        this.activities = await Http.request({
            url:`activity/all`
        })
        // console.log(this.activities)
        return this.activities
    }

    getActivityById(id){
        return this.activities.find(t => t.id === id)
    }

    // async postActivity(title,state,limitNum,address,description){
    //     console.log(title,state,limitNum,address,description)
    //     await Http.request({
    //         url:`activity/insert`,
    //         method:'POST',
    //         data:{
    //             title:title,
    //             state:state,
    //             limitNum:limitNum,
    //             address:address,
    //             description:description,
    //         }
    //     })
    // }

}

export {
    Activity
}