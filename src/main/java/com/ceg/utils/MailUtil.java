package com.ceg.utils;

import freemarker.template.Template;
import org.apache.commons.collections.map.HashedMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;
import org.springframework.web.servlet.view.freemarker.FreeMarkerConfigurer;
import org.thymeleaf.spring5.context.SpringContextUtils;

import javax.mail.internet.MimeMessage;
import java.util.Map;

/**
 * 邮件工具类
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/10/1.
 */
public class MailUtil {

    @Value("${spring.mail.username}")
    private static String sender; //读取配置文件中的参数
    public static String sendTemplateMail(Map<String, Object> model){
        MimeMessage message = null;
        JavaMailSender mailSender = SpringBeanUtil.getBean(JavaMailSender.class);
        FreeMarkerConfigurer freeMarkerConfigurer = SpringBeanUtil.getBean(FreeMarkerConfigurer.class);
        try {
            message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);
            helper.setFrom(sender);
            helper.setTo(sender);
            helper.setSubject("主题：模板邮件");

            //Map<String, Object> model = new HashedMap();
            //model.put("username", "zggdczfr");

            //修改 application.properties 文件中的读取路
            // FreeMarkerConfigurer configurer = new FreeMarkerConfigurer();
            //configurer.setTemplateLoaderPath("classpath:templates");
            //读取 html 模板
            Template template = freeMarkerConfigurer.getConfiguration().getTemplate("mailTemplate.html");
            String html = FreeMarkerTemplateUtils.processTemplateIntoString(template, model);
            helper.setText(html, true);
        } catch (Exception e) {
            e.printStackTrace();
        }
        mailSender.send(message);
        return null;
    }
}
