package com.ceg.mapper;

import com.ceg.pojo.SysUserLogEntity;

public interface SysUserLogEntityMapper {
    int deleteByPrimaryKey(Long id);

    int insert(SysUserLogEntity record);

    int insertSelective(SysUserLogEntity record);

    SysUserLogEntity selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(SysUserLogEntity record);

    int updateByPrimaryKey(SysUserLogEntity record);
}