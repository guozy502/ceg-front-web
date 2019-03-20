package com.ceg.pojo;

import lombok.Data;
import lombok.ToString;

import java.util.Date;

@Data
@ToString
public class AreaEntity {
    private Long areaId;
    private String areaName;
    private Long fatherId;
    private Date createTime;
    private Date updateTime;
    private Boolean deleted;


}