package com.ceg.service;

import com.ceg.commons.response.DataRespWithPage;
import com.ceg.dto.NewsQuery;
import com.ceg.pojo.NewsEntity;

import java.util.List;

/**
 * @Author：guozhenyu
 * @date: 2018/7/16.
 */
public interface NewsService {

    List<NewsEntity> findNewsList(NewsQuery news);

    DataRespWithPage<List<NewsEntity>> findNewsListByPage(NewsQuery newsQuery, Integer pageNo, Integer pageSize);

    NewsEntity queryNewsDetail(Long id);

    void updateNewsInfo(NewsQuery newsQuery);
}
