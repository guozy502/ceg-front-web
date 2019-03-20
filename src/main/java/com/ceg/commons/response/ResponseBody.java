package com.ceg.commons.response;
/**
 * @description:    返回实体类
 * @author:         zdl
 * @createDate:     2018/8/16 17:08
 * @updateUser:     zdl
 * @updateDate:     2018/8/16 17:08
 * @updateRemark:   修改内容
 * @version:        1.0
 */
public class ResponseBody {

    private String code;

    private String msg;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    @Override
    public String toString() {
        return "ResponseBody{" +
                "code='" + code + '\'' +
                ", msg='" + msg + '\'' +
                '}';
    }
}
