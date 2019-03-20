package com.ceg.mapper;

import com.ceg.dto.HospitalQuery;
import com.ceg.pojo.HospitalEntity;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface HospitalEntityMapper {
    Integer deleteByPrimaryKey(Long id);

    Integer insert(HospitalEntity record);

    Integer insertSelective(HospitalEntity record);

    HospitalEntity selectByPrimaryKey(Long id);

    Integer updateByPrimaryKeySelective(HospitalEntity record);

    Integer updateByPrimaryKey(HospitalEntity record);

    List<HospitalEntity> queryHospitalList(HospitalQuery hospitalQuery);

    List<HospitalEntity> queryHospitalListByPage();
}