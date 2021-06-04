package com.huor.demo.api;

import com.huor.demo.model.ActivityEntity;
import com.huor.demo.service.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/activity")
@RestController()
public class ActivitiesController {

    @Autowired
    private ActivityService activityService;

    @GetMapping("/{id}")
    public ActivityEntity getActivityByOrderId(@PathVariable Long id) {
        ActivityEntity activity = activityService.getById(id);
//        if (activity == null){
//            throw new NotFoundException(40001);
//        }
        return activity;
    }

    @GetMapping("/all")
    public List<ActivityEntity> getAllActivity(){
        List<ActivityEntity> activities = activityService.getAllOrderByIdDesc();
        return activities;
    }

    @GetMapping("/collected")
    public List<ActivityEntity> getCollectedActivity(){
        List<ActivityEntity> activities = activityService.getCollectedActivities();
        return activities;
    }

    @GetMapping("/joined")
    public List<ActivityEntity> getJoinedActivity(){
        return this.activityService.getJoinedActivities();
    }

    @GetMapping("/changeCollectedStatus/{orderId}/{collection}")
    public void UpdateCollection(@PathVariable Integer orderId,@PathVariable Integer collection){
        this.activityService.updateCollection(orderId,collection);
    }

    @GetMapping("/changeJoinedStatus/{orderId}/{joinStatus}")
    public void UpdateJoinStatus(@PathVariable Integer orderId,@PathVariable Integer joinStatus){
        this.activityService.updateJoinStatus(orderId,joinStatus);
    }

    @PostMapping("/insert")
    public void InsertActivity(@RequestBody ActivityEntity activityEntity){
        String tilte = activityEntity.getTitle();
        String address = activityEntity.getAddress();
        String description = activityEntity.getDescription();
        int state = activityEntity.getState();
        Integer limitNum = activityEntity.getLimitNum();
        String createTime = activityEntity.getCreateTime();
        String startTime = activityEntity.getStartTime();
        String endTime = activityEntity.getUpdateTime();

//        System.out.print(createTime);
//        System.out.print(startTime);
//        System.out.print(endTime);

        activityService.insertActivity(tilte,address,createTime,startTime,endTime,limitNum,state,description);
    }


}
