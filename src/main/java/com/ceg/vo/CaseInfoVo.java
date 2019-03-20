package com.ceg.vo;

import lombok.Data;

@Data
public class CaseInfoVo {
    private Long id;

    private Long userId;

    private Long caseId;

    private String userEmail;

    private String name;

    private String diagnosis;

    private String paperCaseId;

    private Long commendTreatId;


    private String chiefDoctor;

    private Long caseDoctorId;

}