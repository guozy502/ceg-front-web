package com.ceg.mapper;

import com.ceg.dto.QuestionQuery;
import com.ceg.pojo.QuestionEntity;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface QuestionEntityMapper {
    int deleteByPrimaryKey(Long id);

    int insert(QuestionEntity record);

    int insertSelective(QuestionEntity record);

    QuestionEntity selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(QuestionEntity record);

    int updateByPrimaryKey(QuestionEntity record);

    List<QuestionEntity> findQuestionListByPage(QuestionQuery questionQuery);
}