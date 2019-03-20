package com.ceg.service.impl;

import com.ceg.dto.VisionRecordQuery;
import com.ceg.mapper.VisionRecordEntityMapper;
import com.ceg.pojo.VisionRecordEntity;
import com.ceg.service.VisionRecordService;
import com.ceg.vo.VisionRecordVo;
import com.fasterxml.jackson.databind.util.BeanUtil;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

/**
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/8/25.
 */
@Service("visionRecordService")
public class VisionRecordServiceImpl implements VisionRecordService {

    @Autowired
    private VisionRecordEntityMapper visionRecordEntityMapper;
    @Transactional(readOnly = true,rollbackFor = Exception.class)
    @Override
    public List<VisionRecordEntity> findVisionCaseList(VisionRecordVo visionRecordVo) {
        List<VisionRecordEntity> visionRecordCaseEntities = visionRecordEntityMapper.queryVisionRecordCaseList(visionRecordVo);
        return visionRecordCaseEntities;
    }

    @Override
    public boolean addVisionCaseInfo(VisionRecordQuery visionRecordQuery) {
        VisionRecordEntity visionRecordEntity = new VisionRecordEntity();
        BeanUtils.copyProperties(visionRecordQuery,visionRecordEntity);
        visionRecordEntity.setCreateTime(new Date());
        int insert = visionRecordEntityMapper.insert(visionRecordEntity);
        boolean isTrue = false;
        if (insert == 1){
            isTrue =true;
        }
        return isTrue;
    }
}
