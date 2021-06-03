import {ActivityType} from "../../core/enum";

const activityStatusBehavior = Behavior({
    data:{

    },

    methods:{
        activityTypeText(type){
            switch (type){
                case ActivityType.STUDY:
                    return "Let's Study";
                case ActivityType.MOVIE:
                    return "Watching Movie";
                case ActivityType.FOOD:
                    return "Enjoy Delicacy";
                case ActivityType.CLUB:
                    return "Club activity"
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
