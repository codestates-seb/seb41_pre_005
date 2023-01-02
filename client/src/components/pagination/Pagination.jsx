import React, { useEffect, useState, useLocation } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const PaginationContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  float: left;
`;
const PageButton = styled.div``;
const activeStyle = {};
const CustomNavLink = styled(NavLink)`
  border: 1px solid hsl(210, 8%, 85%);
  border-radius: 3px;
  font-size: 13px;
  line-height: calc((13+12) / 12);
  padding: 0 8px;
  &.selected {
    background-color: rgb(244, 130, 37);
    color: white;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: 13px;
    line-height: calc((13+12) / 12);
    padding: 0 8px;
  }

  &:active {
    background-color: rgb(244, 130, 37);
    color: white;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: 13px;
    line-height: calc((13+12) / 12);
    padding: 0 8px;
  }
`;
const url = "http://ec2-3-38-98-200.ap-northeast-2.compute.amazonaws.com:8090";
const Pagination = (props) => {
  const GoToTop = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([1, 2, 3, 4, 5]);
  const dispatch = useDispatch();
  const pageInfo = useSelector((state) => state.questions.pageInfo);
  useEffect(() => {
    let newPage = [];
    for (let i = pageInfo?.page - 2; i < pageInfo?.page + 3; i++) {
      if (i >= pageInfo?.totalPages || i < 1) break;
      newPage.push(i);
      setPages(newPage);
    }
  }, [pageInfo]);
  return (
    <PaginationContainer>
      {pageInfo?.page >= 4 ? (
        <>
          <CustomNavLink to={`/questions?page=1`} onClick={GoToTop}>
            1
          </CustomNavLink>
          <span>...</span>
        </>
      ) : null}
      {pages.map((item) => (
        <CustomNavLink
          to={`/questions?page=${item}`}
          key={item}
          className={pageInfo?.page === item ? "selected" : null}
          onClick={GoToTop}
        >
          {item}
        </CustomNavLink>
      ))}
      <span>...</span>
      <CustomNavLink to={`/questions?page=${pageInfo?.totalPages}`}>
        {pageInfo?.totalPages}
      </CustomNavLink>
    </PaginationContainer>
  );
};

export default Pagination;
