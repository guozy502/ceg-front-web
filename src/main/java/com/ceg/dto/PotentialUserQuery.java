package com.ceg.dto;

import lombok.Data;
import lombok.ToString;

import java.util.Date;

/**
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/12/25.
 */
@Data
@ToString
public class PotentialUserQuery {
    private String name;
    private String telephone;
    private String email;
    private String content;
    private String address;
    private Date createTime;
    private Date updateTime;
    private String testCode;
}
