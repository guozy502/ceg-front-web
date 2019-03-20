package com.ceg.service;

import com.ceg.dto.HospitalQuery;
import com.ceg.pojo.HospitalEntity;

import java.util.List;

/**
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/7/22.
 */
public interface HospitalService {
    List<HospitalEntity> findUserList(HospitalQuery hospitalQuery);

    List<HospitalEntity> findHospitalEntityListByPage(HospitalEntity hospitalEntity, Integer pageNo, Integer pageSize);

    HospitalEntity findHospitalDetail(Long id);
}
