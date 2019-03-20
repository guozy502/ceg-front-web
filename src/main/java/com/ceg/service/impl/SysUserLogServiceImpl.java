package com.ceg.service.impl;

import com.ceg.mapper.SysUserLogEntityMapper;
import com.ceg.pojo.SysUserLogEntity;
import com.ceg.service.SysUserLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/8/25.
 */
@Service("sysUserLogService")
public class SysUserLogServiceImpl implements SysUserLogService {

   @Autowired
   private SysUserLogEntityMapper sysUserLogEntityMapper;

   @Override
    public void insertUserLog(SysUserLogEntity sysUserLogEntity) {
       int id = sysUserLogEntityMapper.insert(sysUserLogEntity);

   }
}
