package com.group5.stackoverflowclone.auth.oauth2;

import com.nimbusds.oauth2.sdk.GeneralException;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;
import org.springframework.security.oauth2.core.OAuth2ErrorCodes;

import java.util.HashMap;
import java.util.Map;

@ToString
@Builder(access = AccessLevel.PRIVATE)
@Getter
public class OAuth2Attribute {

    private Map<String, Object> attributes;
    private String attributeKey;
    private String email;
    private String name;

    public static OAuth2Attribute of(String registrationId, String attributeKey, Map<String, Object> attributes) {
        switch (registrationId) {
            case "google" :
                return ofGoogle(attributeKey, attributes);
            default:
                return null;
        }
    }

    private static OAuth2Attribute ofGoogle(String attributeKey, Map<String, Object> attributes) {
        return OAuth2Attribute.builder()
                .name((String) attributes.get("name"))
                .email((String) attributes.get("email"))
                .attributes(attributes)
                .attributeKey(attributeKey)
                .build();

    }

    public Map<String, Object> convertToMap() {
        Map<String, Object> map = new HashMap<>();
        map.put("attributeKey", attributeKey);
        map.put("name", name);
        map.put("email", email);

        return map;
    }
}
