package com.ceg.commons.response;

import lombok.Data;

/**
 * @description:    返回数据实体
 * @author:         zdl
 * @createDate:     2018/8/16 17:03
 * @updateUser:     zdl
 * @updateDate:     2018/8/16 17:03
 * @updateRemark:   修改内容
 * @version:        1.0
 */
@Data
public class DataRespWithPage<T> extends ResponseBody {

    private T data;

    private long totalCount;

    private int pageNo;

    private int totalPages;

    private int limit;

}
