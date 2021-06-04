package com.huor.demo.api;

import com.huor.demo.model.ActivityEntity;
import com.huor.demo.service.SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/search")
@RestController
public class SearchController {

    @Autowired
    private SearchService searchService;

    @GetMapping("")
    public List<ActivityEntity> search(@RequestParam String q){
        return this.searchService.search(q);
    }

}
