package com.ceg.commons.response;
/**
 * @description:    返回数据体
 * @author:         zdl
 * @createDate:     2018/8/16 17:02
 * @updateUser:     zdl
 * @updateDate:     2018/8/16 17:02
 * @updateRemark:   修改内容
 * @version:        1.0
 */
public class DataRespBody<T> extends ResponseBody {

    private T data;

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    @Override
    public String toString() {
        return "DataRespBody{" +
                "data=" + data +
                '}';
    }
}
