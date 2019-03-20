package com.ceg.pojo;

import lombok.Data;
import lombok.ToString;

import java.util.Date;

@Data
@ToString
public class GameVersionEntity {
    private Integer id;

    private Date createTime;

    private Date updateTime;

    private Double version;

    private String updateUrl;

    private String updateContent;

    private Boolean forcedUpdating;

    private String updateExe;

}