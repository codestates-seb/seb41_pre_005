package com.group5.stackoverflowclone.domain.tag.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
public class TagResponseDto {
    private long tagId;

    private String tagName;
}
