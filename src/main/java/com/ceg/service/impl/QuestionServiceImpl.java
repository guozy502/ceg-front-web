package com.ceg.service.impl;

import com.ceg.commons.response.DataRespWithPage;
import com.ceg.dto.QuestionQuery;
import com.ceg.mapper.QuestionEntityMapper;
import com.ceg.pojo.QuestionEntity;
import com.ceg.service.QuestionService;
import com.github.pagehelper.PageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * 答疑service层
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/10/11.
 */
@Service("questionService")
public class QuestionServiceImpl implements QuestionService {

    @Autowired
    private QuestionEntityMapper questionEntityMapper;
    @Transactional(readOnly = true,rollbackFor = Exception.class)
    @Override
    public DataRespWithPage<List<QuestionEntity>> findQuestionByPage(QuestionQuery questionQuery, Integer pageNo, Integer pageSize) {
        if (pageNo == null){
            pageNo = 1;
        }
        if (pageSize == null){
            pageSize = 10;
        }
        PageHelper.startPage(pageNo, pageSize);
        DataRespWithPage data = new DataRespWithPage();

        data.setLimit(pageSize);
        List<QuestionEntity> newsList = questionEntityMapper.findQuestionListByPage(questionQuery);
        data.setTotalCount((int) PageHelper.count(()->questionEntityMapper.findQuestionListByPage(questionQuery)));
        int count =  data.getTotalCount() % pageSize == 0 ? (int) (data.getTotalCount()/pageSize) :(int) (data.getTotalCount()/pageSize) +1 ;
        data.setTotalPages(count);
        data.setPageNo(pageNo);
        data.setData(newsList);
        return data;
    }

    @Transactional(readOnly = true,rollbackFor = Exception.class)
    @Override
    public QuestionEntity queryQuestionDetail(Long id) {
        return questionEntityMapper.selectByPrimaryKey(id);
    }

    @Override
    public void updateQuestion(QuestionEntity questionEntity) {
        questionEntityMapper.updateByPrimaryKey(questionEntity);
    }
}
