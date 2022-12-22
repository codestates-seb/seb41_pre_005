package com.group5.stackoverflowclone.domain.tag.mapper;

import com.group5.stackoverflowclone.domain.tag.dto.TagResponseDto;
import com.group5.stackoverflowclone.domain.tag.entity.Tag;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface TagMapper {
    TagResponseDto tagToTagResponseDto(Tag tag);

    List<TagResponseDto> tagsToTagResponseDtos(List<Tag> tags);
}
