package com.ceg.service;

import com.ceg.dto.VisionRecordQuery;
import com.ceg.pojo.VisionRecordEntity;
import com.ceg.vo.VisionRecordVo;

import java.util.List;

/**
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/8/25.
 */
public interface VisionRecordService {


    List<VisionRecordEntity>  findVisionCaseList(VisionRecordVo visionRecordVo);

    boolean addVisionCaseInfo(VisionRecordQuery visionRecordQuery);
}
