package com.huor.demo.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Time;
import java.sql.Timestamp;
import java.util.Arrays;
import java.util.Date;
import java.util.Objects;

@Entity
@Getter
@Setter
@Table(name = "activity", schema = "huor", catalog = "")
public class ActivityEntity extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private String address;
    private Long orderId;
    private String startTime;
    private Integer accessNum;
    private Integer joinNum;
    private Integer limitNum;
    private Integer likeNum;
    private Integer state;
    private String description;
    private String tag;
    private Integer collection;
    private Integer joinStatus;


}
