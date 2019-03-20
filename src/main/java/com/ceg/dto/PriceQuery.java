package com.ceg.dto;

import lombok.Data;
import lombok.ToString;

import java.util.Date;

@Data
@ToString
public class PriceQuery {
    private Long id;
    private String name;
    private Date createTime;
    private Date updateTime;
    private Double money;
    private Boolean deleted;
    private Double visualMoney;
    private Double visionMoney;
    private Double bothMoney;
    private Long hospitalId;
    private Integer discountCycle;
    private Integer discountDay;
    private Long createUser;
    private Long updateUser;
    private String extendOne;
    private String extendTwo;

}