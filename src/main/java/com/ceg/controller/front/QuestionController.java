package com.ceg.controller.front;

import com.ceg.commons.response.DataRespWithPage;
import com.ceg.dto.QuestionQuery;
import com.ceg.pojo.QuestionEntity;
import com.ceg.service.QuestionService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Date;
import java.util.List;

/**
 * @Author：guozhenyu
 * @date: 2018/7/15.
 */
@Controller
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @ApiOperation(value = "分页查询问题的集合",notes = "查询参数为：QuestionQuery")
    @RequestMapping(value = "/ceg/front/getQuestionList")
    public String findQuestionListByPage(Model model, QuestionQuery questionQuery, Integer pageNo, Integer pageSize){
        //分页查询
        DataRespWithPage<List<QuestionEntity>> questionData = questionService.findQuestionByPage(questionQuery,pageNo,pageSize);
        model.addAttribute("questionData",questionData);
        return "new/helpList";
    }


    @ApiOperation(value = "查询问题详情",notes = "查询参数为主键ID")
    @RequestMapping(value = "/ceg/front/showQuestionDetail")
    public String findQuestionDetail(Model model, Long id){
        QuestionEntity questionEntity = questionService.queryQuestionDetail(id);
        questionEntity.setReadNumber(questionEntity.getReadNumber()+1);
        questionEntity.setUpdateTime(new Date());
        questionService.updateQuestion(questionEntity);
        model.addAttribute("questionDetail",questionEntity);
        return "new/helpDetail";
    }
}
