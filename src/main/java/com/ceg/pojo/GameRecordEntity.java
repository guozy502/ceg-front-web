package com.ceg.pojo;

import lombok.Data;
import lombok.ToString;

import java.util.Date;
@Data
@ToString
public class GameRecordEntity {
    private Long id;
    private Long userId;
    private String gameName;
    private Date loginTime;
    private Date logoutTime;
    private String gameMode;
    private Integer score;
    private Integer accuracy;
    private Integer type;
}