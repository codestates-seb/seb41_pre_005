package com.group5.stackoverflowclone.domain.tag.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter
@NoArgsConstructor
public class TagSimplePostDto {
    @NotNull
    @Setter
    private long tagId;
}
