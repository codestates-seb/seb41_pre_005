package com.group5.stackoverflowclone.auth.userdetails;

import com.group5.stackoverflowclone.auth.utils.CustomAuthorityUtils;
import com.group5.stackoverflowclone.domain.user.entity.User;
import com.group5.stackoverflowclone.domain.user.repository.UserRepository;
import com.group5.stackoverflowclone.exception.BusinessLogicException;
import com.group5.stackoverflowclone.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserDetailService implements UserDetailsService {
    private final UserRepository userRepository;
    private final CustomAuthorityUtils authorityUtils;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> optionalMember = userRepository.findByEmail(username);
        User findUser = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));

        return new UserDetails(findUser);
    }

    private final class UserDetails extends User implements org.springframework.security.core.userdetails.UserDetails {
        UserDetails(User user) {
            setUserId(user.getUserId());
            setEmail(user.getEmail());
            setPassword(user.getPassword());
            setRoles(user.getRoles());
        }

        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
            return authorityUtils.createAuthorities(this.getRoles());
        }

        @Override
        public String getUsername() {
            return getEmail();
        }

        @Override
        public boolean isAccountNonExpired() {
            return true;
        }

        @Override
        public boolean isAccountNonLocked() {
            return true;
        }

        @Override
        public boolean isCredentialsNonExpired() {
            return true;
        }

        @Override
        public boolean isEnabled() {
            return true;
        }
    }
}
