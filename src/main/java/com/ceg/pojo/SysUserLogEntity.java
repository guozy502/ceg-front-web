package com.ceg.pojo;

import java.util.Date;

public class SysUserLogEntity {
    private Long id;

    private Long userId;

    private String ip;

    private Date createTime;

    private Integer orginal;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip == null ? null : ip.trim();
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Integer getOrginal() {
        return orginal;
    }

    public void setOrginal(Integer orginal) {
        this.orginal = orginal;
    }
}