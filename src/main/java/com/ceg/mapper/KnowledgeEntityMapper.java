package com.ceg.mapper;

import com.ceg.dto.KnowledgeQuery;
import com.ceg.pojo.KnowledgeEntity;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface KnowledgeEntityMapper {
    int deleteByPrimaryKey(Long id);

    int insert(KnowledgeEntity record);

    int insertSelective(KnowledgeEntity record);

    KnowledgeEntity selectSimpleKnowledge(KnowledgeQuery knowledgeQuery);

    int updateByPrimaryKeySelective(KnowledgeEntity record);

    int updateByPrimaryKey(KnowledgeEntity record);

    List<KnowledgeEntity> queryKnowLedgeListByPage(KnowledgeQuery knowledgeQuery);

    List<KnowledgeEntity> selectBothSideKnowledgeList(KnowledgeQuery knowledgeQuery);
}