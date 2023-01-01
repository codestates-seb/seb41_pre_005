package com.group5.stackoverflowclone.domain.tag.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class TagResponseDto {
    private long tagId;

    private String tagName;

    private String content;
}
