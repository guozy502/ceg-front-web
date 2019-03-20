package com.ceg.vo;

import lombok.Data;
import lombok.ToString;

/**
 *
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/12/16.
 */
@Data
@ToString
public class DoctorVo {
    private Long id;
    private String name;
    private String position;
    private String hospitalName;
    private String sex;
    private String expertise;
    private String imgUrl;
}
