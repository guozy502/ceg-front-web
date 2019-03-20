package com.ceg.dto;

import lombok.Data;
import lombok.ToString;

import java.util.Date;

/**
 * 游戏记录表查询类
 * @author admin
 */
@Data
@ToString
public class GameRecordDto {
    private Long id;
    /*用户id*/
    private Long userId;
   /*用户每周游戏时长*/
    private Integer weekSumTime;
    /*每周训练次数*/
    private Integer weekCount;



}