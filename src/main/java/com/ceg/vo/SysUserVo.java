package com.ceg.vo;

import com.ceg.pojo.DoctorEntity;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import org.hibernate.validator.constraints.Length;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import java.util.Date;

/**
 * 查询用户对象
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/8/25.
 */
@Data
public class SysUserVo {
    private Long id;
    private Long doctorId;
    private String updateUser;
    private String createUser;
    @NotEmpty(message="用户名不能为空")
    private String userName;
    private String password;
    private String email;
    private String mobile;
    private String type;
    private Boolean status;
    private String imgUrl;
    private String address;
    private String nickName;
    private String postCode;
    private String qq;
}
