package com.huor.demo.repository;

import com.huor.demo.model.draftEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface DraftRepository extends JpaRepository<draftEntity,Long> {

    List<draftEntity> findAllByOrderByIdDesc();

    @Transactional
    @Query(value = "insert into draft values(id, :title , :address , :orderId ,:createTime ,:startTime ,:updateTime,null ,0,1,:limitNum,0 ,:state, :description,:tag,collection,join_status)",nativeQuery = true)
    @Modifying
    //updateTime 实际为endTime
    void insertDraft(@Param("title") String title,
                               @Param("address") String address,
                               @Param("orderId") int orderId,
                               @Param("createTime") String createTime,
                               @Param("startTime") String startTime,
                               @Param("updateTime") String endTime,
                               @Param("limitNum") int limitNum,
                               @Param("state") int state ,
                               @Param("description") String description,
                               @Param("tag") int tag
    );
}
