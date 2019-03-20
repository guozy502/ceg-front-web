package com.ceg.dto;

import com.ceg.pojo.AreaEntity;
import lombok.Data;

/**
 * @author admin
 * @version 1.0
 * @Description
 * @createTime 2018/9/28
 **/
@Data
public class DoctorQuery {
    private Long id;

    private String name;

    private String position;

    private String hospitalName;

    private String telephone;
    private String expertise;
    private Long  areaId;
    private String  areaName;

}
