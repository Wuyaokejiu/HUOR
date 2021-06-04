package com.huor.demo.api;

import com.huor.demo.model.ActivityEntity;
import com.huor.demo.model.draftEntity;
import com.huor.demo.service.DraftService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/draft")
@RestController
public class DraftController {

    @Autowired
   private DraftService draftService;


    @GetMapping("/all")
    public List<draftEntity> getAll(){
        return draftService.getAll();
    }

    @PostMapping("/insert")
    public void InsertActivity(@RequestBody draftEntity draftEntity){
        String tilte = draftEntity.getTitle();
        String address = draftEntity.getAddress();
        String description = draftEntity.getDescription();
        Integer state = draftEntity.getState();
        Integer limitNum = draftEntity.getLimitNum();
        String createTime = draftEntity.getCreateTime();
        String startTime = draftEntity.getStartTime();
        String endTime = draftEntity.getUpdateTime();
        System.out.println(state);
        draftService.insertDraft(tilte,address,createTime,startTime,endTime,limitNum,state,description);
    }
}
