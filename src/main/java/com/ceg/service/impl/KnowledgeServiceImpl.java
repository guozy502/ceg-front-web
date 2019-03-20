package com.ceg.service.impl;

import com.ceg.commons.response.DataRespWithPage;
import com.ceg.dto.KnowledgeQuery;
import com.ceg.mapper.KnowledgeEntityMapper;
import com.ceg.pojo.KnowledgeEntity;
import com.ceg.service.KnowledgeService;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * @Author：guozhenyu
 * @date: 2018/7/16.
 */
@Service("knowledgeService")
public class KnowledgeServiceImpl implements KnowledgeService {

    @Autowired
    private KnowledgeEntityMapper knowledgeEntityMapper;
    @Override
    public List<KnowledgeEntity> findKnowledgeList() {
        return null;
    }

    @Override
    public KnowledgeEntity queryKnowledgeDetail(KnowledgeQuery knowledgeQuery) {
        KnowledgeEntity knowledgeEntity = knowledgeEntityMapper.selectSimpleKnowledge(knowledgeQuery);
        return knowledgeEntity;
    }

    @Override
    public DataRespWithPage<List<KnowledgeEntity>> findKnowledgesByPage(KnowledgeQuery knowledgeQuery,Integer pageNo, Integer pageSize) {
        //TODO 分页查询
        if (pageNo == null){
            pageNo = 1;
        }
        if (pageSize == null){
            pageSize = 10;
        }
        Page<KnowledgeEntity> page = PageHelper.startPage(pageNo, pageSize);
        DataRespWithPage data = new DataRespWithPage();
        data.setLimit(pageSize);
        List<KnowledgeEntity> knowledgeEntityList = knowledgeEntityMapper.queryKnowLedgeListByPage(knowledgeQuery);
        data.setTotalCount((int) PageHelper.count(()->knowledgeEntityMapper.queryKnowLedgeListByPage(knowledgeQuery)));
        int count =  data.getTotalCount() % pageSize == 0 ? (int) (data.getTotalCount()/pageSize) :(int) (data.getTotalCount()/pageSize) +1 ;
        data.setTotalPages(count);
        data.setData(knowledgeEntityList);
        return data;
    }

    @Override
    public void updateKnowledgeInfo(KnowledgeQuery knowledgeQuery) {
        KnowledgeEntity knowledgeEntity = new KnowledgeEntity();
        knowledgeEntity.setId(knowledgeQuery.getId());
        knowledgeEntity.setReadNumber(knowledgeQuery.getReadNumber());
        knowledgeEntity.setUpdateTime(new Date());
        knowledgeEntityMapper.updateByPrimaryKeySelective(knowledgeEntity);

    }

    @Override
    public List<KnowledgeEntity> findBothSideKnowledgeList(KnowledgeQuery knowledgeQuery) {
        return knowledgeEntityMapper.selectBothSideKnowledgeList(knowledgeQuery);
    }
}
