package com.ceg.dto;

import com.ceg.pojo.DoctorEntity;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import org.hibernate.validator.constraints.Length;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

/**
 * 查询用户对象
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/8/25.
 */
@Data
public class SysUserOutDto {
    private Long id;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss",timezone = "GMT+8") //Jackson包使用注解
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Long doctorId;
    private String updateUser;

    private String createUser;
    @NotEmpty(message="用户名不能为空")
    private String userName;

    @Email(message="请输入正确的邮箱")
    private String email;
    private String mobile;
    private String type;
    private Boolean status;
    private String imgUrl;
    private DoctorEntity doctor;
    private String address;
    private String idNumber;
    private String linkName;
    private String nickName;
    //TODO 临时
    private Integer stage;
}
