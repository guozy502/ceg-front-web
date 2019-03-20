package com.ceg.mapper;

import com.ceg.pojo.GameEntity;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface GameEntityMapper {
    int deleteByPrimaryKey(Long id);

    int insert(GameEntity record);

    int insertSelective(GameEntity record);

    GameEntity selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(GameEntity record);

    int updateByPrimaryKey(GameEntity record);

    List<GameEntity> queryGameList(Boolean isTrue);
}