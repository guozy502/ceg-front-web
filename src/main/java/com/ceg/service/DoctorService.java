package com.ceg.service;

import com.ceg.commons.response.DataRespWithPage;
import com.ceg.dto.DoctorQuery;
import com.ceg.pojo.DoctorEntity;
import com.ceg.vo.DoctorVo;

import java.util.List;

/**
 * @Author：guozhenyu
 * @date: 2018/7/22.
 */

public interface DoctorService {
    DataRespWithPage<List<DoctorEntity>> queryDoctorListByPage(DoctorQuery doctorQuery, Integer pageNo, Integer pageSize);

    DoctorEntity queryDoctorDetail(Long id);

    List<DoctorVo> queryDoctorList(DoctorQuery doctorQuery);
}
