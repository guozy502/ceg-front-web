package com.ceg.service;

import com.ceg.commons.response.DataRespWithPage;
import com.ceg.dto.KnowledgeQuery;
import com.ceg.pojo.KnowledgeEntity;
import java.util.List;

/**
 * @Author：guozhenyu
 * @date: 2018/7/16.
 */
public interface KnowledgeService {
    List<KnowledgeEntity> findKnowledgeList();

    KnowledgeEntity queryKnowledgeDetail(KnowledgeQuery knowledgeQuery);

    DataRespWithPage<List<KnowledgeEntity>> findKnowledgesByPage(KnowledgeQuery knowledgeQuery, Integer pageNo, Integer pageSize);
    void updateKnowledgeInfo(KnowledgeQuery knowledgeQuery);

    List<KnowledgeEntity> findBothSideKnowledgeList(KnowledgeQuery knowledgeQuery);
}
