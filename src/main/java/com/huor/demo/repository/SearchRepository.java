package com.huor.demo.repository;

import com.huor.demo.model.ActivityEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SearchRepository extends JpaRepository<ActivityEntity, Long> {

    List<ActivityEntity> findByTitleLikeOrDescriptionLike(String keyword, String keyword2);
}
