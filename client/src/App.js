import "./App.css";
import Home from "./pages/Home";
import styled from "styled-components";
const PageLayout = styled.div`
  max-width: 126.4rem;
  margin: auto;
`;
function App() {
  return (
    <PageLayout>
      <Home />
    </PageLayout>
  );
}

export default App;
