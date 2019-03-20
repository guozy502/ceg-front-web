package com.ceg.dto;

import lombok.Data;
import lombok.ToString;

import java.util.Date;

/**
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/12/22.
 */
@Data
@ToString
public class VisionRecordQuery {
    private Long id;
    private Long userId;
    private Long caseId;
    private String patient;
    private Long sex;
    private Integer age;
    private Integer rightNv;
    private Integer leftNv;
    private Integer rightCva;
    private Integer leftCva;
    private Integer rightDs;
    private Integer leftDs;
    private Integer rightDc;
    private Integer leftDc;
    private Integer rightAngle;
    private Integer leftAngle;
    private Integer rightCsf;
    private Integer leftCsf;
    private Integer rightVep;
    private Integer leftVep;
    private Integer rightVv;
    private Integer leftVv;
    private Integer paperCaseId;
    private String poster;
    private Date createTime;
    private Date updateTime;
    private String simultaneous;
    private String fusion;
    private String stereo;
    private String rightOne;
    private String leftOne;
    private String rightTwo;
    private String leftTwo;
    private String rightP100;
    private String leftP100;
    private Boolean restEye;
    private String domiEye;
    private String lineDive;
    private String lineConv;
    private String dotDive;
    private String dotConv;
    private String statStereo;
    private String titmus;
}
