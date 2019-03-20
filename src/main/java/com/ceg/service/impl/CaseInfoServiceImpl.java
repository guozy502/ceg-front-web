package com.ceg.service.impl;

import com.ceg.dto.CaseAndVisionRecordDto;
import com.ceg.mapper.CaseInfoEntityMapper;
import com.ceg.service.CaseInfoService;
import com.ceg.vo.CaseInfoVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * 个人病例service实现类
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/10/1.
 */
@Service("caseInfoService")
public class CaseInfoServiceImpl implements CaseInfoService {

    @Autowired
    private CaseInfoEntityMapper caseInfoEntityMapper;

    @Transactional(readOnly = true,rollbackFor = Exception.class)
    @Override
    public CaseAndVisionRecordDto queryCaseInfoList(CaseInfoVo caseInfoVo) {
        List<CaseAndVisionRecordDto> caseInfoEntity = caseInfoEntityMapper.findCaseInfoByUserInfo(caseInfoVo);
         CaseAndVisionRecordDto caseAndVisionRecordDto = null;
        if (!caseInfoEntity.isEmpty()){
            caseAndVisionRecordDto = caseInfoEntity.get(0);
        }
        return caseAndVisionRecordDto;
    }
}
