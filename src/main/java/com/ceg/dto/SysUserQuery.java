package com.ceg.dto;

import com.ceg.pojo.DoctorEntity;
import lombok.Data;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

/**
 * 查询用户对象
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/8/25.
 */
@Data
public class SysUserQuery {
    private Long id;
    private Long doctorId;
    private String updateUser;
    private String createUser;
    @NotEmpty(message="用户名不能为空")
    private String userName;
    @NotEmpty(message="密码不能为空")
    @Length(min=6,message="密码长度不能小于6位")
    private String password;
    private String newPassword;
    private String address;
    private String linkName;
    private String nickName;
    @Email(message="请输入正确的邮箱")
    private String email;
    private String mobile;
    private Integer stage;
    private String type;
    private Boolean status;
    private String imgUrl;
    private String postCode;
    private String qq;
}
