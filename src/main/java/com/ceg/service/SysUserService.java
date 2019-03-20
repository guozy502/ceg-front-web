package com.ceg.service;

import com.ceg.dto.SysUserQuery;
import com.ceg.pojo.SysUserEntity;
import com.ceg.vo.SysUserVo;

import java.util.List;

/**
 * @Author：guozhenyu
 * @date: 2018/7/15.
 */
public interface SysUserService {

     List<SysUserEntity> findUserList();

    void addUserInfo(SysUserEntity sysUser);

    SysUserVo findUserInfo(SysUserQuery name);

    boolean updateUserInfo(SysUserEntity sysUser);

    SysUserVo findUserByEmail(String emailOrMobile);

    SysUserEntity getCurrentUser();

    SysUserEntity findSysUserByUserId(Long userId);

    SysUserVo findUserByMobile(String mobile);
}
