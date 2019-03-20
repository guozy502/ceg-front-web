package com.ceg.mapper;

import com.ceg.pojo.GameRecordEntity;
import com.ceg.pojo.GameVersionEntity;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface GameRecordEntityMapper {
    int deleteByPrimaryKey(Long id);

    int insert(GameRecordEntity record);

    int insertSelective(GameRecordEntity record);

    List<GameRecordEntity> selectGameRecordByUserId(GameRecordEntity userId);

    int updateByPrimaryKeySelective(GameRecordEntity record);

    int updateByPrimaryKey(GameRecordEntity record);

}