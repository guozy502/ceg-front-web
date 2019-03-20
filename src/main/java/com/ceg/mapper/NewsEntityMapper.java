package com.ceg.mapper;

import com.ceg.dto.NewsQuery;
import com.ceg.pojo.NewsEntity;
import org.springframework.stereotype.Component;


import java.util.List;

@Component
public interface NewsEntityMapper {
    int deleteByPrimaryKey(Long id);

    int insert(NewsEntity record);

    int insertSelective(NewsEntity record);


    NewsEntity selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(NewsEntity record);

    int updateByPrimaryKey(NewsEntity record);
    //分页查询
    List<NewsEntity> findNewsListByPage(NewsQuery news);
}