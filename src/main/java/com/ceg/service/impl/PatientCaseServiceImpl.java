package com.ceg.service.impl;

import com.ceg.commons.response.DataRespWithPage;
import com.ceg.dto.PatientCaseQuery;
import com.ceg.mapper.PatientCaseEntityMapper;
import com.ceg.pojo.NewsEntity;
import com.ceg.pojo.PatientCaseEntity;
import com.ceg.service.PatientCaseService;
import com.github.pagehelper.PageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.List;

/**
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/12/29.
 */
@Service
public class PatientCaseServiceImpl implements PatientCaseService {

    @Autowired
    private PatientCaseEntityMapper patientCaseEntityMapper;
    @Override
    public PatientCaseEntity queryPatientCaseInfoById(Long id) {

        PatientCaseEntity patientCaseEntity = null;
        if (!StringUtils.isEmpty(id)){
            patientCaseEntity = patientCaseEntityMapper.selectByPrimaryKey(id);
        }
        return patientCaseEntity;
    }

    @Override
    public DataRespWithPage<List<PatientCaseEntity>> queryPatientCaseListByPage(PatientCaseQuery patientCaseEntity, Integer pageNo, Integer pageSize) {
        if (pageNo == null){
            pageNo = 1;
        }
        if (pageSize == null){
            pageSize = 10;
        }
        PageHelper.startPage(pageNo, pageSize);
        DataRespWithPage data = new DataRespWithPage();
        data.setLimit(pageSize);
        List<PatientCaseEntity> patientCaseEntityList =patientCaseEntityMapper.selectPatientCaseListByPage(patientCaseEntity);
        data.setTotalCount((int) PageHelper.count(()->patientCaseEntityMapper.selectPatientCaseListByPage(patientCaseEntity)));
        int count =  data.getTotalCount() % pageSize == 0 ? (int) (data.getTotalCount()/pageSize) :(int) (data.getTotalCount()/pageSize) +1 ;
        data.setTotalPages(count);
        data.setPageNo(pageNo);
        data.setData(patientCaseEntityList);
        return data;
    }

    @Override
    public List<PatientCaseEntity> queryPatientCaseList(PatientCaseQuery patientCaseEntity) {
        List<PatientCaseEntity> patientCaseEntityList =patientCaseEntityMapper.selectPatientCaseList(patientCaseEntity);
        return patientCaseEntityList;
    }

}
