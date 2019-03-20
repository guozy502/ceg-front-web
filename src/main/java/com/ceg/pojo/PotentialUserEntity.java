package com.ceg.pojo;

import lombok.Data;
import lombok.ToString;

import java.util.Date;

@Data
@ToString
public class PotentialUserEntity {

    private Long id;
    private String name;
    private String telephone;
    private String email;
    private String content;
    private String address;
    private Date createTime;
    private Date updateTime;
    private Boolean deleted;

}