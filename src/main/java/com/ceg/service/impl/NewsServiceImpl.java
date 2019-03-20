package com.ceg.service.impl;

import com.ceg.commons.PageResultBean;
import com.ceg.commons.response.DataRespWithPage;
import com.ceg.dto.NewsQuery;
import com.ceg.mapper.NewsEntityMapper;
import com.ceg.pojo.NewsEntity;
import com.ceg.service.NewsService;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * @Author：guozhenyu
 * @date: 2018/7/16.
 */
@Service("newsService")
public class NewsServiceImpl implements NewsService {

    @Autowired
    private NewsEntityMapper newsEntityMapper;
    @Transactional
    @Override
    public List<NewsEntity> findNewsList(NewsQuery news) {
        ArrayList<NewsEntity> list = new ArrayList<>();
        NewsEntity newsEntity = newsEntityMapper.selectByPrimaryKey(news.getId());
        list.add(newsEntity);
        return list;
    }

    @Transactional
    @Override
    public DataRespWithPage<List<NewsEntity>> findNewsListByPage(NewsQuery news,Integer pageNo, Integer pageSize) {
        //TODO 分页查询
        if (pageNo == null){
            pageNo = 1;
        }
        if (pageSize == null){
            pageSize = 10;
        }
        PageHelper.startPage(pageNo, pageSize);
        DataRespWithPage data = new DataRespWithPage();
        data.setLimit(pageSize);
        List<NewsEntity> newsList = newsEntityMapper.findNewsListByPage(news);
        data.setTotalCount((int) PageHelper.count(()->newsEntityMapper.findNewsListByPage(news)));
        int count =  data.getTotalCount() % pageSize == 0 ? (int) (data.getTotalCount()/pageSize) :(int) (data.getTotalCount()/pageSize) +1 ;
        data.setTotalPages(count);
        data.setPageNo(pageNo);
        data.setData(newsList);
        return data;
    }

    @Override
    public NewsEntity queryNewsDetail(Long id) {
        NewsEntity newsEntity = newsEntityMapper.selectByPrimaryKey(id);
        return newsEntity;
    }

    @Override
    public void updateNewsInfo(NewsQuery newsQuery) {
        NewsEntity newsEntity = new NewsEntity();
        newsEntity.setReadNumber(newsQuery.getReadNumber());
        newsEntity.setId(newsQuery.getId());
        newsEntity.setUpdateTime(new Date());
        newsEntityMapper.updateByPrimaryKeySelective(newsEntity);
    }

}
