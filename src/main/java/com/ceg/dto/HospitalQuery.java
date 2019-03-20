package com.ceg.dto;

import lombok.Data;
import lombok.ToString;

import java.util.Date;

/**
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/12/23.
 */
@Data
@ToString
public class HospitalQuery {
    private Long id;
    private String hospitalName;
    private Long areaId;
    private String telephone;
}