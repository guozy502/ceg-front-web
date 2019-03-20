package com.ceg.pojo;

import com.ceg.dto.AreaDto;
import lombok.Data;
import lombok.ToString;

import java.util.Date;
@Data
@ToString
public class DoctorEntity {
    private Long id;

    private String name;

    private String position;

    private String hospitalName;

    private String telephone;

    private String sex;

    private String introduce;

    private String expertise;

    private Date createTime;

    private Date updateTime;

    private String imgUrl;

    private AreaDto area;

}