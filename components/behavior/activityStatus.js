import {ActivityType} from "../../core/enum";

const activityStatusBehavior = Behavior({
    data:{

    },

    methods:{
        activityTypeText(type){
            switch (type){
                case ActivityType.STUDY:
                    return "约学习";
                case ActivityType.MOVIE:
                    return "约电影";
                case ActivityType.FOOD:
                    return "约美食";
                case ActivityType.CLUB:
                    return "社团活动"
            }
        },

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
})

export {
    activityStatusBehavior,
}
