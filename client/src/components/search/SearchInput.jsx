import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
const HeaderSearchIcon = styled(SearchIcon)``;
const SearchInputSvg = styled.img``;
const Form = styled.form`
  width: 100%;
`;
const SearchInput = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    navigate("/search", { state: data });
  };
  return (
    <HeaderSearchbarContainer id="search">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <HeaderSearchbarInput
          {...register("search")}
          type="text"
          placeholder="Search..."
        ></HeaderSearchbarInput>
      </Form>
      <HeaderSearchIcon>
        <SearchInputSvg
          src={process.env.PUBLIC_URL + "/images/searchInput.svg"}
        ></SearchInputSvg>
      </HeaderSearchIcon>
    </HeaderSearchbarContainer>
  );
};

export default SearchInput;
