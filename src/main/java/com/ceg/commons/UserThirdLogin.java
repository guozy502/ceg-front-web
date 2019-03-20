/*
package com.ceg.commons;

import com.fasterxml.jackson.core.type.TypeReference;

import java.util.HashMap;
import java.util.Map;

*/
/**
 * 第三方登录类
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/7/22.
 *//*

public class UserThirdLogin {

    */
/**
     * 第三方登录，该方法会生成用户表中自增id 与 密码，前端需拿到这两个参数，在调用登录接口即可(也可以自己主动调用登录方法)
     * 微信-1 QQ-2  新浪微博-3
     * 微博是需要申请者的微博号才能登录(可以增加其他账户)
     * 数据入库，不同的项目，不同的操作(例子可查看电鼓项目中LoginService.java文件)
     * *//*

    public Map<String, Object> requestPassword(String openid, String access_token, int type) {
        log.info("获取随机密码:开始");
        Map<String, Object> mapRes = new HashMap<>();
        //微信登录
        if (type == 1) {
            String path = "https://api.weixin.qq.com/sns/auth?access_token=" + access_token + "&openid=" + openid + "";
            log.info("获取随机密码-微信:openid:" + openid + "   access_token:" + access_token);
            try {
                String result = HttpUtil.sendPost(path, "");
                Map<String, String> map = JSON.parseObject(result, new TypeReference<Map<String, String>>() {

                });
                String errcode = map.get("errcode");
                String errmsg = map.get("errmsg");
                if (errcode.equals("0")) {
                    log.info("获取随机密码:凭证有效!");
                    mapRes.put("errcode", errcode);

                    // 利用openid和token生成一个加密密码
                    String password = CodeUtil.enCodeWithBCrypt(openid + access_token);
                    // 获取用户微信信息     只会把openid给存进去
                    ElecPlayer player = getPlayerInfoWX(openid, access_token);

                    if (player.getWxOpenid() == null || player.getWxOpenid().length() == 0) {
                        mapRes.put("success", 0);
                        log.info("获取随机密码:玩家openID为空!");
                        return mapRes;
                    }
                    log.info("player" + player);
                    log.info("password-------------------------------" + password);
                    log.info("获取随机密码:开始查找是否已经存在用户!");
                    ElecPlayer playertemp = playerMapper.selectByWX(player.getWxOpenid());// 从本地库查询用户

                    if (playertemp == null || playertemp.getWxOpenid() == null || playertemp.getWxOpenid().length() == 0) {
                        // 设置新加用户信息 --微信

                        player.setNickname(removeNonBmpUnicode(player.getNickname()));
                        player.setPassword(password);
                        player.setCreateTime(new Date());
                        //player.setRoleType(0);
                        log.info("获取随机密码:新加用户信息!");
                        playerMapper.insertSelective(player);
                    } else {
                        //判断是否被停用

                        // 更新用户信息
                        log.info("获取随机密码:更新用户信息!");
                        playertemp.setPassword(password);
                        playerMapper.updateByPrimaryKeySelective(playertemp);
                    }
                    ElecPlayer newPlayer = playerMapper.selectByWX(player.getWxOpenid());//最新
                    mapRes.put("success", 1);
                    mapRes.put("message", "获取微信用户成功!");
                    mapRes.put("userId", newPlayer.getId());// 玩家存入表中的id
                    mapRes.put("password", password);        // 生成的加密密码
                } else {
                    log.info("获取随机密码:凭证无效!errcode:" + errcode + " errmsg:" + errmsg);
                    mapRes.put("errcode", errcode);
                    mapRes.put("errmsg", errmsg);
                    mapRes.put("message", "获取出错," + errcode + ":" + errmsg);
                    mapRes.put("success", 0);
                }
            } catch (Exception e) {
                log.info("获取随机密码出现异常:" + e.toString());
                mapRes.put("success", 0);
            }
        }
        //qq登录
        if (type == 2) {
            String openId = getPlayerInfoQQ(access_token);
            String path = "https://graph.qq.com/user/get_user_info?access_token=" + access_token + "&oauth_consumer_key=" + QQ_Appid + "&openid=" + openId + "";
            log.info("获取随机密码-openId:" + openId + " oauth_consumer_key:" + QQ_Appid + "  access_token:" + access_token);
            try {
                String result = HttpUtil.sendGet(path, "");
                log.info("QQ用户信息、result:：" + result);

                Map<String, String> map = JSON.parseObject(result, new TypeReference<Map<String, String>>() {
                });
                String errcode = map.get("ret");
                String errmsg = map.get("msg");
                if (errcode.equals("0")) {
                    log.info("获取随机密码:QQ凭证有效!");
                    mapRes.put("errcode", errcode);

                    // 利用openid和token生成一个加密密码
                    String password = CodeUtil.enCodeWithBCrypt(openId + access_token);

                    ElecPlayer playertemp = playerMapper.selectByQQ(openId);// 从本地库查询用户
                    if (playertemp == null || playertemp.getQqOpenid() == null || playertemp.getQqOpenid().length() == 0) {
                        //if (playertemp == null ) {
                        // 设置新加用户信息 --QQ
                        ElecPlayer player = new ElecPlayer();
                        player.setNickname(removeNonBmpUnicode((String) map.get("nickname")));
                        player.setPassword(password);
                        player.setCreateTime(new Date());
                        //player.setRoleType(0);

                        player.setQqOpenid(openId);
                        player.setQqHead((String) map.get("figureurl_qq_1 "));
                        player.setQqUnionid(QQ_Appid);

                        if ("男".equals(map.get("gender"))) {
                            player.setSex(0);
                        } else {
                            player.setSex(1);
                        }

                        log.info("获取随机密码:新加用户信息!");
                        playerMapper.insertSelective(player);
                    } else {
                        // 更新用户信息
                        log.info("获取随机密码:更新用户信息!");
                        playertemp.setPassword(password);
                        playerMapper.updateByPrimaryKeySelective(playertemp);
                    }
                    ElecPlayer newPlayer = playerMapper.selectByQQ(openId);//最新
                    mapRes.put("success", 1);
                    mapRes.put("message", "获取QQ用户成功!");
                    mapRes.put("userId", newPlayer.getId());// 玩家存入表中的id
                    mapRes.put("password", password);        // 生成的加密密码
                } else {
                    log.info("获取随机密码:QQ凭证无效!errcode:" + errcode + " errmsg:" + errmsg);
                    mapRes.put("errcode", errcode);
                    mapRes.put("errmsg", errmsg);
                    mapRes.put("message", "获取出错," + errcode + ":" + errmsg);
                    mapRes.put("success", 0);
                }
            } catch (Exception e) {
                log.info("获取QQ随机密码出现异常:" + e.toString());
                mapRes.put("success", 0);
            }
        }
        //微博登录
        if (type == 3) {
            String path = "https://api.weibo.com/2/users/show.json?access_token=" + access_token + "&uid=" + openid;
            log.info("获取随机密码-新浪微博:access_token:" + access_token);
            try {
                String result = HttpUtil.sendGet(path, "");
                System.out.println("微博返回值：" + result);

                Map<String, String> map = JSON.parseObject(result, new TypeReference<Map<String, String>>() {
                });
                String errmsg = map.get("id");
                if (errmsg != null) {
                    log.info("获取随机密码:微博凭证有效!");
                    // 利用openid和token生成一个加密密码
                    String password = CodeUtil.enCodeWithBCrypt(openid + access_token);
                    ElecPlayer player = new ElecPlayer();

                    ElecPlayer playertemp = playerMapper.selectByWB(player.getSinaOpenid());// 从本地库查询用户
                    if (playertemp == null || playertemp.getSinaOpenid() == null || playertemp.getSinaOpenid().length() == 0) {
                        // 设置新加用户信息 --新浪微博
                        player.setNickname(removeNonBmpUnicode(map.get("name")));
                        player.setPassword(password);
                        player.setCreateTime(new Date());
                        player.setCity(map.get("city"));
                        //player.setRoleType(0);
                        player.setSinaOpenid(openid);
                        player.setQqHead(map.get("url"));
                        player.setQqUnionid("");

                        if ("m".equals(map.get("gender"))) {//男
                            player.setSex(0);
                        } else {
                            player.setSex(1);
                        }

                        log.info("获取随机密码:新加用户信息!");
                        playerMapper.insertSelective(player);
                    } else {
                        // 更新用户信息
                        log.info("获取随机密码:更新用户信息!");
                        playertemp.setPassword(password);
                        playerMapper.updateByPrimaryKeySelective(playertemp);
                    }
                    ElecPlayer newPlayer = playerMapper.selectByWB(openid);//最新
                    mapRes.put("success", 1);
                    mapRes.put("message", "获取新浪用户成功!");
                    mapRes.put("userId", newPlayer.getId());// 玩家存入表中的id
                    mapRes.put("password", password);        // 生成的加密密码
                } else {
                    */
/*log.info("获取随机密码:新浪凭证无效!errcode:" + errcode + " errmsg:" + errmsg);*//*

                    //mapRes.put("errcode", errcode);
                    mapRes.put("errmsg", errmsg);
                    //mapRes.put("message", "获取出错," + errcode + ":" + errmsg);
                    mapRes.put("success", 0);
                }
            } catch (Exception e) {
                log.info("获取新浪随机密码出现异常:" + e.toString());
                mapRes.put("success", 0);
            }
        }
        return mapRes;
    }

    //1.1 获取微信用户信息
    public ElecPlayer getPlayerInfoWX(String openid, String access_token) {
        String path = "https://api.weixin.qq.com/sns/userinfo?access_token="+access_token+"&openid="+openid+"";
        log.info("微信用户:openid:"+openid+"access_token"+access_token);
        try {
            String result=HttpUtil.sendPost(path, "");//通过openid与访问令牌获取用户基本信息
            //ElecPlayer player = JSON.parseObject(result,new TypeReference<ElecPlayer>(){} ); //单人，多人需要分开
            ElecPlayer player = new ElecPlayer();
            Map<String, String> map = JSON.parseObject(result, new TypeReference<Map<String, String>>() {});

            player.setWxOpenid(map.get("openid"));
            player.setWxHead(map.get("headimgurl"));
            player.setNickname(map.get("nickname"));
            player.setWxUnionid(map.get("unionid"));
            player.setSex(Integer.parseInt(map.get("sex")));
            player.setCity(map.get("city"));
            player.setProvince(map.get("province"));

            playerMapper.updateByPrimaryKeySelective(player);
            log.info("获取用户资料成功:"+result);
            return player;
        }catch (Exception e) {
            log.info("获取用户资料失败:"+e.toString());
        }
        return null;
    }

    //1.2.获取QQ用户openId信息
    public String getPlayerInfoQQ(String access_token) {
        String openId=null;
        String path = "https://graph.qq.com/oauth2.0/me?access_token="+access_token+"";
        try {
            String result=HttpUtil.sendGet(path, "");//通过openid与访问令牌获取用户基本信息
            log.info("获取用户资料成功:"+result);
            result = result.replace("callback(", "");
            result = result.replace(");", "");
            log.info("获取用户资料成功:"+result);
            Map<String, String> map = JSON.parseObject(result, new TypeReference<Map<String, String>>() {});

            ElecPlayer player = new ElecPlayer();
			*/
/*player.setQqOpenid((String)map.get("openid"));
			playerMapper.updateByPrimaryKeySelective(player);*//*

            log.info("获取用户资料成功:"+result);
            log.info("QQ的openid为:"+map.get("openid"));
            openId = map.get("openid");
            return openId;
        }catch (Exception e) {
            log.info("获取用户资料失败:"+e.toString());
        }
        return null;
    }
    //1.3.获取新浪用户信息
    public ElecPlayer getPlayerInfoXL(String openid, String access_token) {
        String path = "https://graph.qq.com/user/get_user_info?access_token=" + access_token + "&oauth_consumer_key="+ QQ_Appid +"&openid=" + openid + "";
        log.info("新浪微博用户:openid:"+openid+"access_token"+access_token);
        try {
            String result=HttpUtil.sendPost(path, "");//通过openid与访问令牌获取用户基本信息
            //ElecPlayer player = JSON.parseObject(result,new TypeReference<ElecPlayer>(){} ); //单人，多人需要分开
            ElecPlayer player = new ElecPlayer();
            Map<String, String> map = JSON.parseObject(result, new TypeReference<Map<String, String>>() {});
            player.setWxOpenid(map.get("openid"));
            player.setWxHead(map.get("headimgurl"));
            player.setWxUnionid(map.get("unionid"));
            player.setSex(Integer.parseInt(map.get("sex")));
            player.setCity(map.get("city"));
            player.setProvince(map.get("province"));

            playerMapper.updateByPrimaryKeySelective(player);

            log.info("获取用户资料成功:"+result);
            return player;
        }catch (Exception e) {
            log.info("获取用户资料失败:"+e.toString());
        }
        return null;

    }
*/
