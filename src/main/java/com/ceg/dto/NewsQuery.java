package com.ceg.dto;


import lombok.Data;
@Data
public class NewsQuery {
    private Long id;

    private String newsName;
    private String content;

    private String author;
    private String introduction;
    private Integer readNumber;
}