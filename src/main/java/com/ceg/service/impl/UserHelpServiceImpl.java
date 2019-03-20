package com.ceg.service.impl;

import com.ceg.commons.response.DataRespWithPage;
import com.ceg.dto.UserHelpQuery;
import com.ceg.mapper.UserHelpEntityMapper;
import com.ceg.pojo.UserHelpEntity;
import com.ceg.service.UserHelpService;
import com.github.pagehelper.PageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/7/22.
 */

@Service("userHelpService")
public class UserHelpServiceImpl implements UserHelpService {
    @Autowired
    private UserHelpEntityMapper userHelpEntityMapper;
    @Override
    public DataRespWithPage<List<UserHelpEntity>> queryUserHelpListByPage(UserHelpQuery userHelpEntity, Integer pageNo, Integer pageSize) {
        PageHelper.startPage(pageNo,pageSize);
        List<UserHelpEntity> userHelpEntityList =userHelpEntityMapper.queryUserHelpListByPage();
        DataRespWithPage<List<UserHelpEntity>> resp = new DataRespWithPage<>();
        resp.setData(userHelpEntityList);
        resp.setLimit(pageSize);
        resp.setPageNo(pageNo);
        resp.setTotalCount(PageHelper.count(()->userHelpEntityMapper.queryUserHelpListByPage()));
        return resp;
    }

    @Transactional
    @Override
    public UserHelpEntity queryUserHelpDetail(Long id) {
        UserHelpEntity userHelpEntity = userHelpEntityMapper.selectByPrimaryKey(id);
        return userHelpEntity;
    }
}