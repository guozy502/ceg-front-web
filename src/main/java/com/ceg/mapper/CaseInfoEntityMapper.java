package com.ceg.mapper;

import com.ceg.dto.CaseAndVisionRecordDto;
import com.ceg.pojo.CaseInfoEntity;
import com.ceg.vo.CaseInfoVo;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface CaseInfoEntityMapper {
    int deleteByPrimaryKey(Long id);

    int insert(CaseInfoEntity record);

    int insertSelective(CaseInfoEntity record);

    CaseInfoEntity selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(CaseInfoEntity record);

    int updateByPrimaryKey(CaseInfoEntity record);

    List<CaseAndVisionRecordDto> findCaseInfoByUserInfo(CaseInfoVo caseInfoVo);
}