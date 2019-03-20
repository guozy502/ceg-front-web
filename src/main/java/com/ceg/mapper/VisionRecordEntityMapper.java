package com.ceg.mapper;

import com.ceg.pojo.VisionRecordEntity;
import com.ceg.vo.VisionRecordVo;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface VisionRecordEntityMapper {
    int deleteByPrimaryKey(Long id);

    int insert(VisionRecordEntity record);

    int insertSelective(VisionRecordEntity record);

    VisionRecordEntity selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(VisionRecordEntity record);

    int updateByPrimaryKey(VisionRecordEntity record);

    List<VisionRecordEntity> queryVisionRecordCaseList(VisionRecordVo visionRecordVo);
}