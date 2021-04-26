import {ActivityType} from "../core/enum";

class ActivityDetail{


    constructor(activityDetail) {
        Object.assign(this,activityDetail)
    }

    activityTypeText(type){
        switch (type){
            case ActivityType.STUDY:
                return "学习局";
            case ActivityType.MOVIE:
                return "电影局";
            case ActivityType.FOOD:
                return "美食局";
            case ActivityType.CLUB:
                return "社团活动"
        }
    }

    activityTypeIcon(type){
        switch (type){
            case ActivityType.STUDY:
                return "study";
            case ActivityType.MOVIE:
                return "movie";
            case ActivityType.FOOD:
                return "food";
            case ActivityType.CLUB:
                return "club"
        }
    }

}

export {
    ActivityDetail
}