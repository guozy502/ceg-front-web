package com.ceg.service;

import com.ceg.commons.response.DataRespWithPage;
import com.ceg.dto.QuestionQuery;
import com.ceg.pojo.QuestionEntity;
import java.util.List;

/**
 * 问题service层
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/10/11.
 */
public interface QuestionService {
    DataRespWithPage<List<QuestionEntity>> findQuestionByPage(QuestionQuery questionQuery, Integer pageNo, Integer pageSize);

    QuestionEntity queryQuestionDetail(Long id);

    void updateQuestion(QuestionEntity questionEntity);
}
