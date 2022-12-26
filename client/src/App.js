import "./App.css";
import Home from "./pages/Home";
import styled from "styled-components";
import SignUp from "./pages/user/SingUp";
import Login from "./pages/user/Login";
import Questions from "./pages/question/Questions";
import Footer from "./components/common/Footer";
import Profile from "./pages/user/Profile";
import Header from "./components/common/Header";
import AskQuestion from "./pages/question/AskQuestion";
import QuestionDetail from "./pages/question/QuestionDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tags from "./components/questions/Tags";

const PageLayout = styled.div`
  max-width: 126.4rem;
  height: 100vh;
  margin: auto;
`;
function App() {
  return (
    <>
      <BrowserRouter>
        <PageLayout>
          <Header />

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
      </BrowserRouter>
    </>
  );
}

export default App;
