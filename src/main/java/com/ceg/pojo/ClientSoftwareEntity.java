package com.ceg.pojo;

import lombok.Data;
import lombok.ToString;

import java.util.Date;

@Data
@ToString
public class ClientSoftwareEntity {
    private Long id;
    private String name;
    private String downloadUrl;
    private String size;
    private String platform;
    private Date createTime;
    private Date updateTime;
    private Boolean deleted;
    private String description;
    private String version;

}