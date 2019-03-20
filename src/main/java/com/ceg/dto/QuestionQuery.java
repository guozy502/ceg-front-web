package com.ceg.dto;

import lombok.Data;

import java.util.Date;

/**
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/10/11.
 */
@Data
public class QuestionQuery {
    private Long id;

    private String name;

    private String content;

    private String author;

    private Date createTime;
}
