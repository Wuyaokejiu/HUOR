package com.huor.demo.service;

import com.huor.demo.model.draftEntity;
import com.huor.demo.repository.DraftRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
public class DraftService {

    @Autowired
    private DraftRepository draftRepository;

    public List<draftEntity> getAll(){
        return draftRepository.findAllByOrderByIdDesc();
    }

    public void insertDraft(String title, String address,String createTime,String startTime,String endTime, int limitNum,int state,String description){
        Random random = new Random();
        int temp = 0;
        while (temp<=0){
            temp = random.nextInt();
        }
        int orderId = temp;
//        System.out.println(orderId);
        int tag = 0;
        draftRepository.insertDraft(title,address,orderId,createTime,startTime,endTime,limitNum,state,description,tag);
    }
}
