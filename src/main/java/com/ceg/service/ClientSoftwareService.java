package com.ceg.service;

import com.ceg.dto.ClientSoftwareQuery;
import com.ceg.pojo.ClientSoftwareEntity;

import java.util.List;

/**
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/12/28.
 */
public interface ClientSoftwareService {

    List<ClientSoftwareEntity> queryClientSoftwareList(ClientSoftwareQuery clientSoftwareQuery);
}
