package com.ceg.dto;

import lombok.Data;
import lombok.ToString;

/**
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/12/29.
 */
@Data
@ToString
public class PatientCaseQuery {

    private Long id;
    private String patientName;

    private String imgUrl;

    private String content;

    private Boolean deleted;

    private String beforeSight;

    private String afterSight;


}
