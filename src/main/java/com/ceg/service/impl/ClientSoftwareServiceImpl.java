package com.ceg.service.impl;

import com.ceg.dto.ClientSoftwareQuery;
import com.ceg.mapper.ClientSoftwareEntityMapper;
import com.ceg.pojo.ClientSoftwareEntity;
import com.ceg.service.ClientSoftwareService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/12/28.
 */
@Service
public class ClientSoftwareServiceImpl implements ClientSoftwareService {

    @Autowired
    private ClientSoftwareEntityMapper clientSoftwareEntityMapper;
    @Override
    @Transactional(readOnly = true)
    public List<ClientSoftwareEntity> queryClientSoftwareList(ClientSoftwareQuery clientSoftwareQuery){
        List<ClientSoftwareEntity> clientSoftwareEntityList = clientSoftwareEntityMapper.selectClientSoftwareList(clientSoftwareQuery);
        return clientSoftwareEntityList;
    }
}
