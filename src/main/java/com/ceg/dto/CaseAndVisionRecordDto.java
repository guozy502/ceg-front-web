package com.ceg.dto;

import com.ceg.pojo.VisionRecordEntity;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class CaseAndVisionRecordDto {
    private Long id;

    private Long userId;

    private Date createTime;

    private Date updateTime;

    private String userEmail;

    private String name;
    private String address;

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

    private List<VisionRecordEntity> visionRecordList;
}