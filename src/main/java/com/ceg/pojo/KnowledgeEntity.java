package com.ceg.pojo;

import lombok.Data;

import java.util.Date;
@Data
public class KnowledgeEntity {
    private Long id;

    private String name;

    private String content;

    private String description;

    private String author;

    private Date createTime;

    private Date updateTime;

    private Boolean deleted;
    private Integer readNumber;

}