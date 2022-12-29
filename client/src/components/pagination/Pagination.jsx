import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, redirect } from "react-router-dom";
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
  .selected {
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
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([1, 2, 3, 4, 5]);
  const dispatch = useDispatch();
  const lastPage = useSelector((state) => state);
  return (
    <PaginationContainer>
      {currentPage > 1 ? <a>prev</a> : null}
      {pages.map((item) => (
        <NavLink
          to={`/questions?page=${item}`}
          key={item}
          className={({ isActive }) => (isActive ? "selected" : null)}
        >
          {item}
        </NavLink>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;
