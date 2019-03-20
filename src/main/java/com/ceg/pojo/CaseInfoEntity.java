package com.ceg.pojo;

import lombok.Data;

import java.util.Date;
@Data
public class CaseInfoEntity {
    private Long id;

    private Long userId;

    private Date createTime;

    private Date updateTime;

    private String userEmail;

    private String name;

    private Integer sex;

    private Integer age;

    private Integer category;

    private String caseHistory;

    private String checker;

    private String ip;

    private String diagnosis;

    private String paperCaseId;

    private Long commendTreatId;

    private String poster;

    private String chiefDoctor;

    private Long caseDoctorId;

}