package com.ceg.service;

import com.ceg.dto.CaseAndVisionRecordDto;
import com.ceg.vo.CaseInfoVo;

/**
 * 病例信息查询service层
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/10/1.
 */
public interface CaseInfoService {

    CaseAndVisionRecordDto queryCaseInfoList(CaseInfoVo caseInfoVo) throws Exception;

}
