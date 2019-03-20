package com.ceg.service.impl;

import com.ceg.dto.HospitalQuery;
import com.ceg.mapper.HospitalEntityMapper;
import com.ceg.pojo.HospitalEntity;
import com.ceg.pojo.SysUserEntity;
import com.ceg.service.HospitalService;
import com.github.pagehelper.PageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/7/22.
 */
@Service("hospitalService")
public class HospitalServiceImpl implements HospitalService {

    @Autowired
    private HospitalEntityMapper hospitalEntityMapper;


    @Transactional(readOnly = true)
    @Override
    public List<HospitalEntity> findUserList(HospitalQuery hospitalQuery) {
        //TODO 处理实体类参数
        List<HospitalEntity> hospitalEntityList = hospitalEntityMapper.queryHospitalList(hospitalQuery);
        return hospitalEntityList;
    }
    @Transactional(readOnly = true)
    @Override
    public List<HospitalEntity> findHospitalEntityListByPage(HospitalEntity hospitalEntity, Integer pageNo, Integer pageSize) {
        //TODO 处理实体类参数
        Integer number = pageNo != null ? pageNo : 1;
        Integer size = pageSize != null ? pageSize : 10;
        PageHelper.startPage(number,size);
        List<HospitalEntity> hospitalEntityList = hospitalEntityMapper.queryHospitalListByPage();
        return hospitalEntityList;
    }

    @Transactional(readOnly = true)
    @Override
    public HospitalEntity findHospitalDetail(Long id) {
        HospitalEntity hospitalEntity = hospitalEntityMapper.selectByPrimaryKey(id);
        return hospitalEntity;
    }
}
