package com.ceg.mapper;

import com.ceg.pojo.GameVersionEntity;
import org.springframework.stereotype.Component;

@Component
public interface GameVersionEntityMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(GameVersionEntity record);

    int insertSelective(GameVersionEntity record);

    GameVersionEntity selectNewGameVersionInfo();

    int updateByPrimaryKeySelective(GameVersionEntity record);

    int updateByPrimaryKey(GameVersionEntity record);
    GameVersionEntity selectGameVersionByVersion();
}