package com.ceg.controller.front;

import com.ceg.commons.CodeEnum;
import com.ceg.commons.response.DataRespBody;
import com.ceg.commons.response.DataRespWithPage;
import com.ceg.dto.KnowledgeQuery;
import com.ceg.pojo.KnowledgeEntity;
import com.ceg.service.KnowledgeService;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * @Author：guozhenyu
 * @date: 2018/7/15.
 */
@Controller
@Slf4j
public class KnowledgeController {

    @Autowired
    private KnowledgeService knowledgeService;

    @ApiOperation(value = "分页查询常识的集合",notes = "查询参数为：knowledgeQuery")
    @RequestMapping(value = "/ceg/front/getKnowledgeList")
    public String findKnowledgeListByPage(Model model,KnowledgeQuery knowledgeQuery, Integer pageNo, Integer pageSize){
        //分页查询
        DataRespWithPage<List<KnowledgeEntity>> knowledgeData = knowledgeService.findKnowledgesByPage(knowledgeQuery,pageNo,pageSize);
        model.addAttribute("knowledgeData",knowledgeData);
        return "new/knowledgeList";
    }

    @RequestMapping(value = "/ceg/front/getKnowledgeListBothSide",method = RequestMethod.POST)
    @ResponseBody
    public DataRespBody<List<KnowledgeEntity>> findKnowledgeListBothSide(@RequestBody KnowledgeQuery knowledgeQuery){
        DataRespBody<List<KnowledgeEntity>> dataRespBody = new DataRespBody<>();
        List<KnowledgeEntity> knowledgeList;
        try {
            knowledgeList = knowledgeService.findBothSideKnowledgeList(knowledgeQuery);
            dataRespBody.setCode(CodeEnum.IS_SUCCESS.getCode());
            dataRespBody.setMsg(CodeEnum.IS_SUCCESS.getValue());
            dataRespBody.setData(knowledgeList);
        }catch (Exception e){
            dataRespBody.setCode(CodeEnum.IS_FAIL.getCode());
            dataRespBody.setMsg(CodeEnum.IS_FAIL.getValue());
            log.error("查询上下条数据失败！",e);
        }
        return dataRespBody;
    }

    @ApiOperation(value = "查询常识性知识详情",notes = "查询参数为主键ID")
    @RequestMapping(value = "/ceg/front/showKnowledgeDetail")
    public String findKnowledgeDetail(Model model, KnowledgeQuery knowledgeQuery){
        KnowledgeEntity knowledgeEntity = knowledgeService.queryKnowledgeDetail(knowledgeQuery);
        knowledgeQuery.setReadNumber(knowledgeEntity.getReadNumber()+1);
        knowledgeService.updateKnowledgeInfo(knowledgeQuery);
        model.addAttribute("knowledgeDetail",knowledgeEntity);
        return "new/knowledgeDetail";
    }
}
