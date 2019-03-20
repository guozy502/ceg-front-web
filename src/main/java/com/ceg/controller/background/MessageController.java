package com.ceg.controller.background;

import com.aliyuncs.dysmsapi.model.v20170525.SendSmsResponse;
import com.aliyuncs.exceptions.ClientException;
import com.ceg.commons.MD5Util;
import com.ceg.utils.AliyunMessageUtil;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.HashMap;
import java.util.Map;

import static com.ceg.utils.AliyunMessageUtil.createRandomNum;

/**
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/10/20.
 */
@RestController
public class MessageController {
    private static final String KEY = "abc123"; // KEY为自定义秘钥

    @RequestMapping(value = "/ceg/back/sendMsg", method = RequestMethod.POST, headers = "Accept=application/json")
    public Map<String, Object> sendMsg(@RequestBody Map<String,Object> requestMap) {
       String phoneNumber = requestMap.get("phoneNumber").toString();
        String randomNum = createRandomNum(6);// 生成随机数
        SimpleDateFormat sf = new SimpleDateFormat("yyyyMMddHHmmss");
        Calendar c = Calendar.getInstance();
        c.add(Calendar.MINUTE, 5);
        String currentTime = sf.format(c.getTime());// 生成5分钟后时间，用户校验是否过期
        try {
            sendMsg(); //此处执行发送短信验证码方法
        } catch (ClientException e) {
            e.printStackTrace();
        }
        String hash =  MD5Util.MD5EncodeUtf8(KEY + "@" + currentTime + "@" + randomNum);//生成MD5值
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("hash", hash);
        resultMap.put("tamp", currentTime);
        return resultMap; //将hash值和tamp时间返回给前端
    }

    @RequestMapping(value = "/ceg/back/validateNum", method = RequestMethod.POST, headers = "Accept=application/json")
    public void validateNum(@RequestBody Map<String,Object> requestMap) {
        String requestHash = requestMap.get("hash").toString();
        String tamp = requestMap.get("tamp").toString();
        String msgNum = requestMap.get("msgNum").toString();
        String hash = MD5Util.MD5EncodeUtf8(KEY + "@" + tamp + "@" + msgNum);
        if (tamp.compareTo("") > 0) {
            if (hash.equalsIgnoreCase(requestHash)){
            //校验成功
            }else {
        //验证码不正确，校验失败
            }
        } else {
        // 超时
        }
    }

    private static void sendMsg() throws ClientException {
        String phoneNumber = "15210058085";
        String randomNum = createRandomNum(6);
        String jsonContent = "{\"code\":\"" + randomNum + "\"}";

        Map<String, String> paramMap = new HashMap<>();
        paramMap.put("phoneNumber", phoneNumber);
        paramMap.put("msgSign", "测试短信");
        paramMap.put("templateCode", "SMS_148611988");
        paramMap.put("jsonContent", jsonContent);
        SendSmsResponse sendSmsResponse = AliyunMessageUtil.sendSms(paramMap);
        if(!(sendSmsResponse.getCode() != null && sendSmsResponse.getCode().equals("OK"))) {
            if(sendSmsResponse.getCode() == null) {
                //这里可以抛出自定义异常
            }
            if(!sendSmsResponse.getCode().equals("OK")) {
                //这里可以抛出自定义异常
            }
        }

    }

}
