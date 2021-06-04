package com.huor.demo.repository;

import com.huor.demo.model.ActivityEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Repository
public interface ActivityRepository extends JpaRepository<ActivityEntity, Long> {

        ActivityEntity findAllById(Long Id);

        @Transactional
        @Modifying
        @Query(value = "update activity a set a.collection=:collection where a.order_id =:orderId",nativeQuery = true)
        public int updateCollection(@Param("orderId") Integer orderId,@Param("collection") Integer collection);

        @Transactional
        @Modifying
        @Query(value = "update activity a set a.join_status=:joinStatus where a.order_id =:orderId",nativeQuery = true)
        public int updateJoinStatus(@Param("orderId") Integer orderId,@Param("joinStatus") Integer joinStatus);

        List<ActivityEntity> findAllByOrderByIdDesc();

        @Query(value = "select * FROM activity WHERE collection=1",nativeQuery = true)
        List<ActivityEntity> findAllCollectedActivities();

        @Query(value = "select * FROM activity WHERE join_status=1",nativeQuery = true)
        List<ActivityEntity> findAllJoinedActivities();

        @Transactional
        @Query(value = "insert into activity values(id, :title , :address , :orderId ,:createTime ,:startTime ,:updateTime,null ,0,1,:limitNum,0 ,:state, :description,:tag,collection,join_status)",nativeQuery = true)
        @Modifying
        //updateTime 实际为endTime
        public void insertActivity(@Param("title") String title,
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
