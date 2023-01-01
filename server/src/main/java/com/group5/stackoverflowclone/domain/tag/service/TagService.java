package com.group5.stackoverflowclone.domain.tag.service;

import com.group5.stackoverflowclone.domain.tag.entity.Tag;
import com.group5.stackoverflowclone.domain.tag.repository.TagRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Transactional
@Service
public class TagService {
    private final TagRepository tagRepository;

    public TagService(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

    public List<Tag> createTagByName(List<String> tagNames) {
        return tagNames.stream()
                .filter(tag -> !tag.isEmpty())
                .map(String::trim)
                .map(tag -> new Tag(tag, ""))
                .map(this::verifyTag).collect(Collectors.toList());
    }

    public List<Tag> getAllTags() {
        return tagRepository.findAll();
    }

    private Tag verifyTag(Tag tag) {
        Optional<Tag> optionalTag = tagRepository.findByTagName(tag.getTagName());
        return optionalTag.orElseGet(() -> tagRepository.save(tag));
    }
}
