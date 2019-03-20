package com.ceg.pojo;

import lombok.Data;
import lombok.ToString;

import java.util.Date;

@Data
@ToString
public class PatientCaseEntity {
    private Long id;
    private String name;
    private String patientName;
    private String imgUrl;
    private String description;
    private String content;

    private Boolean deleted;

    private String beforeSight;

    private String afterSight;

    private String sex;
    private String caseType;
    private Date createTime;
    private Date updateTime;
    private Integer age;

}