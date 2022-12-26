import "./App.css";
import styled from "styled-components";
import SignUp from "./pages/user/SingUp";
import Login from "./pages/user/Login";
// import HeaderLayout from "./components/layout/HeaderLayout";
import Questions from "./pages/question/Questions";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Tags from "./pages/Tags";
import Profile from "./pages/user/Profile";
import SearchResults from "../src/pages/SearchResults";

import QuestionDetail from "./pages/question/QuestionDetail";
import AskQuestion from "./pages/question/AskQuestion";
import Header from "./components/common/Header";

const PageLayout = styled.div`
  max-width: 126.4rem;
  height: 100vh;
  margin: auto;
`;
function App() {
  return (
    <>
      <Header />
      <PageLayout>
        <QuestionDetail />
        {/* <AskQuestion /> */}
        {/* <Home /> */}
        {/* <Questions /> */}
        {/* <Tags /> */}
        {/* <Login /> */}
        {/* <SignUp /> */}
        {/* <Profile></Profile> */}
        {/* <SearchResults></SearchResults> */}
      </PageLayout>
    </>
  );
}

export default App;
