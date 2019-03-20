package com.ceg;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@SpringBootApplication
@MapperScan("com.ceg.mapper")
//@EnableWebMvc
public class WebApplication extends SpringBootServletInitializer {


	public static void main(String[] args) {
		SpringApplication.run(WebApplication.class, args);
	}

}

