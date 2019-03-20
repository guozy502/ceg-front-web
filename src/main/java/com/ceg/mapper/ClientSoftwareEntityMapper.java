package com.ceg.mapper;

import com.ceg.dto.ClientSoftwareQuery;
import com.ceg.pojo.ClientSoftwareEntity;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface ClientSoftwareEntityMapper {
    int deleteByPrimaryKey(Long id);

    int insert(ClientSoftwareEntity record);

    int insertSelective(ClientSoftwareEntity record);

    ClientSoftwareEntity selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(ClientSoftwareEntity record);

    int updateByPrimaryKey(ClientSoftwareEntity record);
    
    List<ClientSoftwareEntity> selectClientSoftwareList(ClientSoftwareQuery clientSoftwareQuery);
}