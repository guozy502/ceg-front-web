package com.ceg.vo;

import lombok.Data;

/**
 * @author admin
 * @Description 视力查询类
 * @createTime 2018/9/30
 * @version 1.0
 **/
@Data
public class VisionRecordVo {
    private Long id;
    private Long userId;
    private String patient;
    private Long sex;
    private Integer age;
}
