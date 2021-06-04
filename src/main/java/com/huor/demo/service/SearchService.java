package com.huor.demo.service;

import com.huor.demo.model.ActivityEntity;
import com.huor.demo.repository.SearchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SearchService {

    @Autowired
    private SearchRepository searchRepository;

    public List<ActivityEntity> search(String q){
        String likeQ = "%"+q+"%";
        return this.searchRepository.findByTitleLikeOrDescriptionLike(likeQ,likeQ);
    }
}
