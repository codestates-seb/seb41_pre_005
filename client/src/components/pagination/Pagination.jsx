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
const activeStyle = {
  backgroundColor: `red`,
};

const Pagination = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([1, 2, 3, 4, 5]);
  const dispatch = useDispatch();
  const lastPage = useSelector((state) => state);
  return (
    <PaginationContainer>
      {currentPage > 1 ? <a>prev</a> : null}
      {pages.map((item) => (
        <NavLink to={`/questions?page=${item}`} key={item}>
          {item}
        </NavLink>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;
