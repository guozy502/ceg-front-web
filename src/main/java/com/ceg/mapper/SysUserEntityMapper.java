package com.ceg.mapper;

import com.ceg.dto.SysUserQuery;
import com.ceg.vo.SysUserVo;
import com.ceg.pojo.SysUserEntity;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface SysUserEntityMapper {
    int deleteByPrimaryKey(Long id);

    int insert(SysUserEntity record);

    int insertSelective(SysUserEntity record);

    SysUserEntity selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(SysUserEntity record);

    int updateByPrimaryKey(SysUserEntity record);

    SysUserVo querySimpleUserInfo(SysUserQuery sysUserVo);

    SysUserVo queryUserByEmail(String email);

    SysUserVo queryUserByMobile(String mobile);
}