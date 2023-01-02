import "./App.css";
import styled from "styled-components";
import SignUp from "./pages/user/SingUp";
import Login from "./pages/user/Login";
import Questions from "./pages/question/Questions";
import Home from "./pages/Home";
import Tags from "./pages/Tags";
import Profile from "./pages/user/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import QuestionDetail from "./pages/question/QuestionDetail";
import AskQuestion from "./pages/question/AskQuestion";
import { Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import EditQuestion from "./pages/question/EditQuestion";
import SearchResults from "./pages/SearchResults";

const PageLayout = styled.div`
  max-width: 126.4rem;
  height: calc(100vh-5rem);
  margin: auto;
`;
function App() {
  return (
    <>
      <Header />
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/questions/:id" element={<QuestionDetail />} />
          <Route path="/questions/ask" element={<AskQuestion />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users/:id" element={<Profile />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/questions/edit" element={<EditQuestion />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </PageLayout>
    </>
  );
}

export default App;
