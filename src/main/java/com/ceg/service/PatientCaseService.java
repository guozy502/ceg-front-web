package com.ceg.service;

import com.ceg.commons.response.DataRespWithPage;
import com.ceg.dto.PatientCaseQuery;
import com.ceg.pojo.PatientCaseEntity;

import java.util.List;

/**
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/12/29.
 */
public interface PatientCaseService {
    PatientCaseEntity queryPatientCaseInfoById(Long id);

    DataRespWithPage<List<PatientCaseEntity>> queryPatientCaseListByPage(PatientCaseQuery patientCaseEntity, Integer pageNo, Integer pageSize);
    List<PatientCaseEntity> queryPatientCaseList(PatientCaseQuery patientCaseEntity);


}
