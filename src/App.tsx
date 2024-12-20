import styled from "styled-components";
import Variants from "./component/Variants";
import Gestures from "./component/Gestures";
import Drag from "./component/Drag";
import Scroll from "./component/Scroll";
import Path from "./component/Path";
import Motion from "./component/Motion";

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
      {/* <Variants /> */}
      {/* <Gestures /> */}
      {/* <Drag /> */}
      {/* <Scroll /> */}
      {/* <Path /> */}
      <Motion />
    </Wrapper>
  );
}

export default App;
