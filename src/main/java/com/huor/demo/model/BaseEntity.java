
package com.huor.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import java.util.Date;


@Getter
@Setter
@MappedSuperclass
public abstract class BaseEntity {

    @Column(insertable=false, updatable=false)
    private String createTime;

    @Column(insertable=false, updatable=false)
    private String updateTime;
    @JsonIgnore
    @Column(insertable=false, updatable=false)
    private String deleteTime;
}
