import styled from "styled-components";
import Header from "./components/Header";
import TopCategory from "./components/TopCategory";
import TopPanel from "./components/TopPanel";
import SearchPanel from "./components/SearchPanel";
import NewCrouse from "./components/NewCrouse";

const Body = styled.div`
  width: 100%;
  max-width: 1440px;
  min-height: 100dvh;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <Body>
      <Header />
      <TopCategory />
      <TopPanel />
      <SearchPanel />
      <NewCrouse />
    </Body>
  );
}

export default App;
