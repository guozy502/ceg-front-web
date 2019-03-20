package com.ceg.controller.front;

import com.ceg.dto.ClientSoftwareQuery;
import com.ceg.pojo.ClientSoftwareEntity;
import com.ceg.service.ClientSoftwareService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

/**
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/12/28.
 */
@Controller
public class ClientSoftwareController {

    @Autowired
    private ClientSoftwareService clientSoftwareService;

    @RequestMapping(value = "/ceg/front/getClientSoftwareList")
    public String queryClientSoftwareList(Model model,ClientSoftwareQuery clientSoftwareQuery){
        List<ClientSoftwareEntity> clientSoftwareEntityList = clientSoftwareService.queryClientSoftwareList(clientSoftwareQuery);
        model.addAttribute("clientSoftwareEntityList",clientSoftwareEntityList);
        return "new/download";
    }
}
