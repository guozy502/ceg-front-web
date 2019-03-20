package com.ceg.dto;

import lombok.Data;
import lombok.ToString;

import java.util.Date;

@Data
@ToString
public class TreatPlanQuery {
    private Long id;
    private String name;
    private Boolean deleted;
    private Integer sinmultaneousPerceptionDuration;
    private Integer fusionFountionDuration;
    private Integer stereoscopinVisionDuration;
    private Integer visualStimulusDuration;
    private Integer visualFineDuration;
    private Long userId;

}