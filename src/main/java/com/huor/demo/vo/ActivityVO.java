package com.huor.demo.vo;


import com.huor.demo.model.ActivityEntity;
import org.springframework.beans.BeanUtils;

import java.util.Date;

public class ActivityVO {

    private Long id;
    private String title;
    private String address;
    private String description;
    private Date createTime;
    private Date persistantTime;
    private Boolean online;
    private String tags;
    private Integer anumber;
    private Integer jnumber;
    private Integer pnumber;
    private Integer like;

//    public ActivityPureVO(Activity activity) {
//        BeanUtils.copyProperties(activity,this);
//    }
//
//    public ActivityPureVO(Object object){
//        BeanUtils.copyProperties(object, this);
//    }


    public ActivityVO(ActivityEntity activity){
        BeanUtils.copyProperties(activity,this);
    }

    public ActivityVO(Object object){
        BeanUtils.copyProperties(object,this);
    }

}
