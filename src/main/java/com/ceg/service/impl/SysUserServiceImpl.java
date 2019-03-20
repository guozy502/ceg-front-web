package com.ceg.service.impl;

import com.ceg.dto.SysUserQuery;
import com.ceg.vo.SysUserVo;
import com.ceg.mapper.SysUserEntityMapper;
import com.ceg.pojo.SysUserEntity;
import com.ceg.service.SysUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * @Author：guozhenyu
 * @date: 2018/7/15.
 */

@Service("sysUserService")
public class SysUserServiceImpl implements SysUserService {

    @Autowired
    private SysUserEntityMapper sysUserEntityMapper;
    @Override
    public List<SysUserEntity> findUserList() {
        //return sysUserEntityMapper.queryUserList();
        return null;
    }

    @Override
    public void addUserInfo(SysUserEntity sysUser) {
        sysUserEntityMapper.insertSelective(sysUser);
    }

    @Override
    public SysUserVo findUserInfo(SysUserQuery sysUser) {
        SysUserVo  sysUserVo = sysUserEntityMapper.querySimpleUserInfo(sysUser);
        return sysUserVo;
    }

    @Override
    public boolean updateUserInfo(SysUserEntity sysUser) {
       int bool = sysUserEntityMapper.updateByPrimaryKeySelective(sysUser);
       boolean isTrue = bool == 1 ? true :false;
        return isTrue;
    }

    @Transactional(readOnly = true)
    @Override
    public SysUserVo findUserByEmail(String emailOrMobile) {
        SysUserVo sysUserVo = sysUserEntityMapper.queryUserByEmail(emailOrMobile);
        return sysUserVo;
    }

    @Transactional(readOnly = true)
    @Override
    public SysUserVo findUserByMobile(String mobile) {
        SysUserVo sysUserVo = sysUserEntityMapper.queryUserByMobile(mobile);
        return sysUserVo;
    }

    @Override
    public SysUserEntity getCurrentUser() {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
        SysUserEntity currentUser =(SysUserEntity) request.getSession().getAttribute("currentUser");
        request.getAttribute("");
        return null;
    }

    @Override
    public SysUserEntity findSysUserByUserId(Long userId) {
       return sysUserEntityMapper.selectByPrimaryKey(userId);

    }
}
