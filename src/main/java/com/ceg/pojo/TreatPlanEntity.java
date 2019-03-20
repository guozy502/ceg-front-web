package com.ceg.pojo;

import java.util.Date;

public class TreatPlanEntity {
    private Long id;

    private String name;

    private Date createTime;

    private Date updateTime;

    private Boolean deleted;

    private Integer sinmultaneousPerceptionDuration;

    private Integer fusionFountionDuration;

    private Integer stereoscopinVisionDuration;

    private Integer visualStimulusDuration;

    private Integer visualFineDuration;

    private Long userId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    public Boolean getDeleted() {
        return deleted;
    }

    public void setDeleted(Boolean deleted) {
        this.deleted = deleted;
    }

    public Integer getSinmultaneousPerceptionDuration() {
        return sinmultaneousPerceptionDuration;
    }

    public void setSinmultaneousPerceptionDuration(Integer sinmultaneousPerceptionDuration) {
        this.sinmultaneousPerceptionDuration = sinmultaneousPerceptionDuration;
    }

    public Integer getFusionFountionDuration() {
        return fusionFountionDuration;
    }

    public void setFusionFountionDuration(Integer fusionFountionDuration) {
        this.fusionFountionDuration = fusionFountionDuration;
    }

    public Integer getStereoscopinVisionDuration() {
        return stereoscopinVisionDuration;
    }

    public void setStereoscopinVisionDuration(Integer stereoscopinVisionDuration) {
        this.stereoscopinVisionDuration = stereoscopinVisionDuration;
    }

    public Integer getVisualStimulusDuration() {
        return visualStimulusDuration;
    }

    public void setVisualStimulusDuration(Integer visualStimulusDuration) {
        this.visualStimulusDuration = visualStimulusDuration;
    }

    public Integer getVisualFineDuration() {
        return visualFineDuration;
    }

    public void setVisualFineDuration(Integer visualFineDuration) {
        this.visualFineDuration = visualFineDuration;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}