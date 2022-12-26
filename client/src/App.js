import "./App.css";
import styled from "styled-components";
import SignUp from "./pages/user/SingUp";
import Login from "./pages/user/Login";
import Questions from "./pages/question/Questions";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Tags from "./pages/Tags";
import Profile from "./pages/user/Profile";
import SearchResults from "../src/pages/SearchResults";

import QuestionDetail from "./pages/question/QuestionDetail";
import AskQuestion from "./pages/question/AskQuestion";

import { Route, Routes } from "react-router-dom";

import Header from "./components/common/Header";
import { useState } from "react";
import LoginHeader from "./components/common/LoginHeader";

const PageLayout = styled.div`
  max-width: 126.4rem;
  height: calc(100vh-5rem);
  margin: auto;
`;
function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <Header />
      {/* <LoginHeader /> */}
      {/* {isLogin ? <LoginHeader /> : <Header />} */}
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/questions/:id" element={<QuestionDetail />} />
          <Route path="/questions/ask" element={<AskQuestion />} />
          <Route path="/users/:id" element={<Profile />} />
          <Route path="/tags" element={<Tags />} />
        </Routes>
      </PageLayout>
    </>
  );
}

export default App;
