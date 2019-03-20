package com.ceg.mapper;

import com.ceg.dto.PatientCaseQuery;
import com.ceg.pojo.PatientCaseEntity;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface PatientCaseEntityMapper {
    int deleteByPrimaryKey(Long id);

    int insert(PatientCaseEntity record);

    int insertSelective(PatientCaseEntity record);

    PatientCaseEntity selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(PatientCaseEntity record);

    int updateByPrimaryKey(PatientCaseEntity record);

    List<PatientCaseEntity> selectPatientCaseList(PatientCaseQuery patientCaseQuery);

    List<PatientCaseEntity> selectPatientCaseListByPage(PatientCaseQuery patientCaseQuery);
}