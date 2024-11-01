import styled from "styled-components";
import Variants from "./component/Variants";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Wrapper>
      <Variants />
    </Wrapper>
  );
}

export default App;
