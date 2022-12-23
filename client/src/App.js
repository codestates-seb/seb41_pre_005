import "./App.css";
import Home from "./pages/Home";
import styled from "styled-components";
import SignUp from "./pages/user/SingUp";
import Login from "./pages/user/Login";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

const PageLayout = styled.div`
  max-width: 126.4rem;
  height: 100vh;
  margin: auto;
`;
function App() {
  return (
    <>
      <PageLayout>
        <Header />
        <Home />
      </PageLayout>
    </>
  );
}

export default App;
