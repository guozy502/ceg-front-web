package com.ceg.mapper;

import com.ceg.dto.DoctorQuery;
import com.ceg.pojo.DoctorEntity;
import com.ceg.vo.DoctorVo;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface DoctorEntityMapper {
    Integer deleteByPrimaryKey(Long id);

    Integer insert(DoctorEntity record);

    Integer insertSelective(DoctorEntity record);

    DoctorEntity selectByPrimaryKey(Long id);

    Integer updateByPrimaryKeySelective(DoctorEntity record);

    Integer updateByPrimaryKey(DoctorEntity record);

    List<DoctorEntity> queryDoctorListByPage(DoctorQuery doctorQuery);

    List<DoctorVo> queryDoctorList(DoctorQuery doctorQuery);
}