import {ActivityType} from "../core/enum";

class ActivityDetail{

    status

    constructor(activityDetail) {
        Object.assign(this,activityDetail)
    }

    activityTypeText(type){
        switch (type){
            case ActivityType.STUDY:
                return "study";
            case ActivityType.MOVIE:
                return "movie";
            case ActivityType.FOOD:
                return "delicacy";
            case ActivityType.CLUB:
                return "club activity"
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