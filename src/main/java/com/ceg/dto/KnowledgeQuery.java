package com.ceg.dto;

import lombok.Data;

/**
 * @author admin
 * @Description
 * @createTime 2018/10/11
 * @version 1.0
 **/

@Data
public class KnowledgeQuery {
    private Long id;

    private String name;

    private String content;

    private String author;
    private Integer readNumber;
    private boolean isNext;
    private boolean isBefore;

}
