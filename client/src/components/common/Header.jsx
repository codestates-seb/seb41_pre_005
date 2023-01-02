import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HeaderLayout from "../layout/HeaderLayout";
import { Cookies } from "react-cookie";
import { useState, useEffect } from "react";
import LogoContainer from "./Headers/LogoContainer";
import LogOutHeader, { HeadBtnContainer } from "./Headers/LogOutHeader";
import { DropDownBottom, LoginIcon } from "./Headers/HeaderSvg";
import {
  DropDownSvg,
  EtcBtn,
  DropdownSubContainer,
  DropDownContainer,
} from "./Headers/HeaderSvg";
import {
  HeaderContinaer,
  HeaderTopbarContainer,
  RightContainer,
} from "./Headers/HeaderContainer";
import { HeaderSearchbar } from "./Headers/HeaderSearchbar";
const MenuDropdown = styled.div`
  width: 375px;
  position: absolute;
  top: 47px;
  right: 86px;
  background-color: white;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
`;
const CommunityDropdown = styled(MenuDropdown)``;

const DropdownSubTitle = styled.div`
  width: 100%;
  height: 30px;
  font-size: 11px;
  font-weight: 700;
  color: #0074cc;
  display: flex;
  align-items: center;
  padding-left: 10px;
  background-color: #f1f2f3;
  &:hover {
    cursor: pointer;
    color: hsl(206, 100%, 52%);
  }
`;

const DropdownSubContent = styled.div`
  width: 100%;
  height: 68px;
  font-size: 12px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding-left: 8px; */
  .name {
    color: #0074cc;
  }
  .discription {
    color: #3b4045;
    padding: 2px 0;
    &:hover {
      cursor: pointer;
    }
  }
  .loginout {
    color: #0074cc;
    &:hover {
      color: hsl(206, 100%, 52%);
    }
  }
`;

const Header = () => {
  const [clickedMenu, setClickedMenu] = useState(null);
  const handleClickMenu = (menu) => {
    if (menu === clickedMenu) setClickedMenu(null);
    else setClickedMenu(menu);
  };

  const cookies = new Cookies();
  const [isToken, setIsToken] = useState(false);

  const Token = cookies.get("token");
  useEffect(() => {
    Token ? setIsToken(true) : setIsToken(false);
  }, [Token]);
  console.log(isToken);
  const navigate = useNavigate();

  const logOut = () => {
    cookies.remove("token"); // 쿠키를 삭제
    setIsToken(false);
    localStorage.removeItem("userId");
    navigate("/"); // 메인 페이지로 이동
  };
  return (
    <HeaderLayout>
      <HeaderContinaer>
        <HeaderTopbarContainer>
          <LogoContainer />
          {isToken ? (
            <>
              <HeadBtnContainer>
                <button className="forTeams_btn">Products</button>
              </HeadBtnContainer>
              <HeaderSearchbar />
              <RightContainer>
                <LoginIcon></LoginIcon>
                <EtcBtn onClick={() => handleClickMenu("community")}>
                  <svg
                    aria-hidden="true"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="#53595F"
                    style={{ marginTop: "15px", marginLeft: "10px" }}
                  >
                    <path d="M15 1H3a2 2 0 0 0-2 2v2h16V3a2 2 0 0 0-2-2ZM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 0 0 2-2v-2H1v2Zm16-7H1v4h16V6Z"></path>
                  </svg>
                  {clickedMenu === "community" ? (
                    <CommunityDropdown>
                      <DropdownSubTitle>CURRENT COMMUNITY</DropdownSubTitle>
                      <DropdownSubContent>
                        <DropdownSubContainer>
                          <DropDownSvg />
                          <div
                            className="discription loginout"
                            style={{ marginLeft: "17px" }}
                            role="presentation"
                            onClick={logOut}
                          >
                            log out
                          </div>
                        </DropdownSubContainer>
                        <DropDownContainer />
                      </DropdownSubContent>
                      <DropdownSubTitle>
                        YOUR COMMUNITIES{" "}
                        <span style={{ marginLeft: "200px" }}>edit</span>
                      </DropdownSubTitle>
                      <DropDownBottom />
                    </CommunityDropdown>
                  ) : null}
                </EtcBtn>
              </RightContainer>
            </>
          ) : (
            <LogOutHeader />
          )}
        </HeaderTopbarContainer>
      </HeaderContinaer>
    </HeaderLayout>
  );
};

export default Header;
