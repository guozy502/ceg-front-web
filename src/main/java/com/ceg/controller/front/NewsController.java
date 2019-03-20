package com.ceg.controller.front;

import com.ceg.commons.response.DataRespWithPage;
import com.ceg.dto.NewsQuery;
import com.ceg.pojo.NewsEntity;
import com.ceg.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;


/**
 * 新闻controllwe
 * @Author：guozhenyu
 * @date: 2018/7/14.
 */
@Controller
public class NewsController {

    @Autowired
    private NewsService newsService;

    @GetMapping(value = "/ceg/front/getNewsListByPage")
    public String findNewsListByPage(Model model, NewsQuery news, Integer pageNo, Integer pageSize){

        DataRespWithPage<List<NewsEntity>> data = newsService.findNewsListByPage(news,pageNo,pageSize);
        model.addAttribute("responseData",data);
        return "new/newsList";
    }

    @RequestMapping(value = "/ceg/front/showNewsDetail")
    public String  findNewsDetail(Model model,Long id){
            NewsEntity newsEntity = newsService.queryNewsDetail(id);
        NewsQuery newsQuery = new NewsQuery();
        newsQuery.setId(newsEntity.getId());
        newsQuery.setReadNumber(newsEntity.getReadNumber()+1);
        newsService.updateNewsInfo(newsQuery);
        newsEntity.setReadNumber(newsEntity.getReadNumber()+1);
            model.addAttribute("newsEntity",newsEntity);
        return "new/newsDetail";
    }

}
