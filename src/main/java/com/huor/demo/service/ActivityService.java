package com.huor.demo.service;

import com.huor.demo.model.ActivityEntity;
import com.huor.demo.repository.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
public class ActivityService {

    @Autowired
    private ActivityRepository activityRepository;

    public void updateCollection(Integer orderId,Integer collection){
        activityRepository.updateCollection(orderId,collection);
    }

    public void updateJoinStatus(Integer orderId,Integer joinStatus){
        activityRepository.updateJoinStatus(orderId,joinStatus);
    }

    public ActivityEntity getById(Long id) {
//        System.out.println("1");
        return activityRepository.findAllById(id);
    }

    public List<ActivityEntity> getAllOrderByIdDesc(){
        return activityRepository.findAllByOrderByIdDesc();
    }

    public List<ActivityEntity> getCollectedActivities(){
        return activityRepository.findAllCollectedActivities();
    }

    public void insertActivity(String title, String address,String createTime,String startTime,String endTime, int limitNum,int state,String description){
        Random random = new Random();
        int temp = 0;
        while (temp<=0){
            temp = random.nextInt();
        }
        int orderId = temp;
//        System.out.println(orderId);
        int tag = 0;
        activityRepository.insertActivity(title,address,orderId,createTime,startTime,endTime,limitNum,state,description,tag);
    }
//
    public List<ActivityEntity> getJoinedActivities(){
        return this.activityRepository.findAllJoinedActivities();
    }


}
