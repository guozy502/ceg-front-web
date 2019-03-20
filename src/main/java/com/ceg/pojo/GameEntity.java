package com.ceg.pojo;

import lombok.Data;

import java.util.Date;

@Data
public class GameEntity {
    private Long id;

    private String gameName;

    private Date createTime;

    private Date updateTime;

    private String gameType;

    private String androidPackageName;

    private String androidUrl;

    private String androidApkName;

    private String androidVersion;

    private Boolean androidIsforceUpdate;

    private Date androidMaintainStarttime;

    private Date androidMaintainEndtime;

    private String iosPackgaeName;

    private String iosUrl;

    private String iosVersion;

    private Boolean iosIsforceUpdate;

    private Date iosMaintainStarttime;

    private Date iosMaintainEndtime;

    private Boolean deleted;

}