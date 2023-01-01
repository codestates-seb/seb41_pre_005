package com.group5.stackoverflowclone.auth.handler;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

// 로그인 성공 시 실행
@Slf4j
public class UserAuthenticationSuccessHandler implements AuthenticationSuccessHandler {
    @Override
    public void onAuthenticationSuccess
            (HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException {
        log.info("# Authenticated successfully!");
        // 로그 기록 및 사용자 정보를 response로 전송하는 등 추가 작업 가능
    }
}
