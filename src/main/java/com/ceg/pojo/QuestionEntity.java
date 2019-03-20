package com.ceg.pojo;

import lombok.Data;
import lombok.ToString;

import java.util.Date;
@Data
@ToString
public class QuestionEntity {
    private Long id;
    private String name;
    private String content;
    private String description;
    private String author;
    private Date createTime;
    private Date updateTime;
    private Boolean deleteId;
    private Integer readNumber;

}