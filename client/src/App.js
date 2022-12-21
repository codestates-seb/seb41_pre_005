import "./App.css";
import Home from "./pages/Home";
import styled from "styled-components";
import SignUp from "./pages/user/SingUp";
const PageLayout = styled.div`
  max-width: 126.4rem;
  height: 100vh;
  margin: auto;
`;
function App() {
  return (
    <PageLayout>
      <SignUp />
    </PageLayout>
  );
}

export default App;
