package com.ceg.dto;

import lombok.Data;

import java.util.Date;

/**
 *
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/10/1.
 */
@Data
public class GameDto {
    private Long id;

    private String gameName;

    private Date createTime;

    private Date updateTime;

    private String gameType;
}
