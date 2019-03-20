package com.ceg.pojo;

import lombok.Data;
import lombok.ToString;

import java.util.Date;

/**
 * 用户帮助类
 * @author admin
 */
@Data
@ToString
public class UserHelpEntity {
    private Long id;

    private String name;

    private Date createTime;

    private Date updateTime;

    private String content;

    private Boolean deleted;

    private Integer readNumber;
}