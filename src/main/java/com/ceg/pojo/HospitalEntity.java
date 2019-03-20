package com.ceg.pojo;

import lombok.Data;
import lombok.ToString;

import java.util.Date;

@Data
@ToString
public class HospitalEntity {
    private Long id;
    private String hospitalName;
    private Date createTime;
    private Date updateTime;
    private Long areaId;
    private String location;
    private String telephone;
    private Boolean deleted;
    
}