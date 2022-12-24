package com.group5.stackoverflowclone.domain.tag.controller;

import com.group5.stackoverflowclone.domain.tag.entity.Tag;
import com.group5.stackoverflowclone.domain.tag.mapper.TagMapper;
import com.group5.stackoverflowclone.domain.tag.service.TagService;
import com.group5.stackoverflowclone.response.SingleResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Validated
@RequestMapping("/tags")
public class TagController {
    private final TagService tagService;
    private final TagMapper mapper;

    public TagController(TagService tagService, TagMapper mapper) {
        this.tagService = tagService;
        this.mapper = mapper;
    }

    @GetMapping
    public ResponseEntity getAllTags() {
        List<Tag> tagList = tagService.getAllTags();

        return new ResponseEntity(new SingleResponseDto<>(mapper.tagsToTagResponseDtos(tagList)), HttpStatus.OK);
    }
}
