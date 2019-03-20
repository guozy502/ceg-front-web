package com.ceg.service;

import com.ceg.commons.response.DataRespWithPage;
import com.ceg.dto.UserHelpQuery;
import com.ceg.pojo.UserHelpEntity;

import java.util.List;

/**
 * @Author：guozhenyu
 * @date: 2018/7/22.
 */
public interface UserHelpService {
    DataRespWithPage<List<UserHelpEntity>> queryUserHelpListByPage(UserHelpQuery userHelpEntity, Integer pageNo, Integer pageSize);

    UserHelpEntity queryUserHelpDetail(Long id);
}
