import "./App.css";
import styled from "styled-components";
import SignUp from "./pages/user/SingUp";
import Login from "./pages/user/Login";
// import HeaderLayout from "./components/layout/HeaderLayout";
import Questions from "./pages/question/Questions";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Tags from "./pages/Tags";
import QuestionDetail from "./pages/question/QuestionDetail";
import AskQuestion from "./pages/question/AskQuestion";

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
      </PageLayout>
    </>
  );
}

export default App;
