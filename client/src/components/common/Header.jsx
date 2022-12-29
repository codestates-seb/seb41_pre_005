import { Link } from "react-router-dom";
import styled from "styled-components";
import HeaderLayout from "../layout/HeaderLayout";
// import {Link} from "react-router-dom";

const Bluebutton = styled.button`
  background: #0995ff;
  color: #ffffff;
  font-weight: bold;
  border: 1px solid #0995ff;
  border-radius: 4px;
  box-shadow: inset 0 1px 0 0 #ffffff;
  width: ${(props) => props.width || "100px"};
  height: ${(props) => props.height || "40px"};
  font-size: ${(props) => props.fontSize || "14px"};
  font-weight: ${(props) => props.fontWeight || "700"};
  :hover {
    background: #0063bf;
  }
  &:disabled {
    opacity: 50%;
    cursor: not-allowed;
    :hover {
      background-color: #0995ff;
    }
  }
`;

const SkyblueButton = styled.button`
  background: #e1ecf4;
  color: #3a739d;
  border-radius: 4px;
  border: ${(props) => props.border || "1px solid #3a739d"};
  width: ${(props) => props.width || "100px"};
  height: ${(props) => props.height || "40px"};
  font-size: ${(props) => props.fontSize || "14px"};
  font-weight: ${(props) => props.fontWeight || "700"};
  margin-right: 0.5rem;
  margin-left: -2rem;
  :hover {
    background: #b3d3ea;
  }
`;

export function ButtonBlue({
  children,
  border,
  width,
  height,
  fontSize,
  fontWeight,
  type,
  disabled,
}) {
  return (
    <Bluebutton
      type={type ? type : "submit"}
      border={border}
      width={width}
      height={height}
      fontSize={fontSize}
      fontWeight={fontWeight}
      disabled={disabled}
    >
      {children}
    </Bluebutton>
  );
}

export function ButtonSblue({ children, width, height, fontSize, fontWeight }) {
  return (
    <SkyblueButton
      width={width}
      height={height}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {children}
    </SkyblueButton>
  );
}

const ButtonComponent = styled.button`
  position: relative;
  display: inline-block;
  padding: 0.8em;
  color: #0074cc;
  border: 1px solid transparent;
  border-radius: 3px;
  background-color: transparent;
  outline: none;
  font-family: inherit;
  font-size: 13px;
  font-weight: normal;
  line-height: calc((13 + 2) / 13);
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  white-space: ${(props) =>
    props.whiteSpace === "nowrap" ? "nowrap !important" : "normal"};

  &.primary {
    color: #ffffff;
    background-color: #0a95ff;
    box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  }

  :hover,
  :focus,
  :active {
    color: #ffffff;
    background-color: #0074cc;
  }
  :active {
    background-color: #0063bf;
    box-shadow: none;
  }
`;

export const Button = ({ children }) => {
  return <ButtonComponent>{children}</ButtonComponent>;
};

const HeaderContinaer = styled.div`
  box-sizing: border-box;
  position: fixed;
  left: 0;
  top: 0;
  box-sizing: border-box;
  min-width: auto;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 4px 0px, rgba(0, 0, 0, 0.05) 0px 2px 8px 0px;
  width: 100%;
  z-index: 5050;
  background-color: #f8f9f9;
  height: 5rem;
  display: flex;
  border-top: 3px solid #f48225;
  align-items: center;
`;

const HeaderTopbarContainer = styled.div`
  width: 160rem;
  max-width: 100%;
  height: 100%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  box-sizing: border-box;
`;

const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
  margin-left: 10rem;
  margin-bottom: 0.2rem;

  img {
    width: 14.6rem;
    height: 3rem;
  }
  &:hover {
    background-color: #e4e6e8;
  }
  /* padding: 0 var(--su8);
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #00000000;
  margin-left: 8px;

  @media screen and (max-width: 640px) {
    display: none;
  }
  img {
    margin-left: 0;
    width: 150px;
    height: 30px;
    margin-top: -4px;
  }
  &:hover {
    width: -30px;
    background-color: #e4e6e8;
  } */
`;
const HeadBtnContainer = styled.div`
  /* background-color: var(--_na-item-bg);
  color: var(--_na-item-fc); */
  font: unset;
  font-size: 1.3rem;
  /* padding: var(--_na-item-p);
  white-space: var(--_na-item-ws); */
  align-items: center;
  border: none;
  border-radius: 1000px;
  box-shadow: none;
  cursor: pointer;
  display: flex;
  position: relative;
  user-select: auto;

  @media screen and (max-width: 820px) {
    display: none;
  }

  .about_btn {
    width: 70px;
    height: 29px;
    background-color: #f8f9f9;
    color: #525960;
    font-size: 13px;
    font-weight: 400;
    border: none;
    border-radius: 20px;
    margin-left: 10px;
    &:hover {
      background-color: #e3e5e8;
      color: black;
      cursor: pointer;
    }
  }
  .forTeams_btn {
    width: 7.5rem;
    height: 2.9rem;
    background-color: #f8f9f9;
    color: #525960;
    font-size: 1.3rem;
    font-weight: 40rem;
    border: none;
    border-radius: 20px;
    &:hover {
      background-color: #e3e5e8;
      color: black;
      cursor: pointer;
    }
  }
`;

const SearchbarContainer = styled.div`
  box-sizing: border-box;
  padding: 0 3.5rem;
  position: relative;
  display: flex;
  font-family: inherit;
  margin-left: -1.5rem;
  @media screen and (max-width: 820px) {
    width: auto;
  }
`;

const SearchbarInput = styled.input`
  box-sizing: border-box;
  max-width: ${(props) => props.width || "1000px"};
  height: ${(props) => props.height || "30px"};

  border: 1px solid #babfc4;
  border-radius: 3px;
  padding-left: 30px;
  font-size: 1.3rem;
  background-color: white;
  &:focus {
    outline: none;
    border: 1px solid #6bbbf7;
    box-shadow: 0px 0px 0px 4px #d8e5f2;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 4.2rem;
  top: 7px;
  svg {
    color: #81878c;
  }
`;

const HeaderSearchbarContainer = styled(SearchbarContainer)`
  flex-grow: 1;
  max-width: 756px;
`;

const HeaderSearchbarInput = styled(SearchbarInput)`
  width: 100%;
  height: 33px;
  position: relative;
`;

const LoginContainer = styled.div`
  @media screen and (max-width: 590px) {
    display: none;
  }
`;
const HeaderSearchIcon = styled(SearchIcon)``;
const HeaderSearchbar = () => {
  return (
    <HeaderSearchbarContainer id="search">
      <HeaderSearchbarInput
        type="text"
        placeholder="Search..."
      ></HeaderSearchbarInput>
      <HeaderSearchIcon>
        <svg
          aria-hidden="true"
          className="svg-icon iconSearch"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <path
            style={{ fill: "rgb(131, 140, 149)" }}
            d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"
          />
        </svg>
      </HeaderSearchIcon>
    </HeaderSearchbarContainer>
  );
};

const LoginBtn = styled(ButtonSblue)``;
const SignupBtn = styled(ButtonBlue)``;

const Header = () => {
  return (
    <HeaderLayout>
      <HeaderContinaer>
        <HeaderTopbarContainer>
          <LogoContainer>
            <Link to="/">
              <img
                src={process.env.PUBLIC_URL + "/images/main_logo.svg"}
                alt="Stack Overflow logo"
              ></img>
            </Link>
          </LogoContainer>
          <HeadBtnContainer>
            <button className="about_btn">About</button>
          </HeadBtnContainer>
          <HeadBtnContainer>
            <button className="forTeams_btn">Products</button>
          </HeadBtnContainer>
          <HeadBtnContainer>
            <button className="forTeams_btn">For Teams</button>
          </HeadBtnContainer>
          <HeaderSearchbar></HeaderSearchbar>
          <LoginContainer className="LogSinb">
            <Link to="/login">
              <LoginBtn
                width="59.45px"
                height="32px"
                fontSize="13px"
                fontWeight="400"
              >
                Log in
              </LoginBtn>
            </Link>
            <Link to="/signup">
              <SignupBtn
                to="signup"
                width="64.44px"
                height="33px"
                fontSize="13px"
                fontWeight="400"
              >
                Sign up
              </SignupBtn>
            </Link>
          </LoginContainer>
        </HeaderTopbarContainer>
      </HeaderContinaer>
    </HeaderLayout>
  );
};

export default Header;
