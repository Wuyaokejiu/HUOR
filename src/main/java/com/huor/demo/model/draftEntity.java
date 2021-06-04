package com.huor.demo.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "draft", schema = "huor", catalog = "")
public class draftEntity extends BaseEntity{
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
    private Boolean tag;
    private Integer collection;
    private Integer joinStatus;
}
