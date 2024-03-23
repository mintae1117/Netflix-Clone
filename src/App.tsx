import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 400px 200px;
  width: 50vw;
  gap: 10px;
`;


const Box1 = styled(motion.div)`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  width: 400px;
  height: 200px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  cursor: pointer;
`;
const Box2 = styled(motion.div)`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  width: 400px;
  height: 200px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const overlay = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

const Mybtn = styled(motion.button)`
  position: absolute;
  bottom: 180px;
  left: 50%;
  font-size: 30px;
`;

function App() {
  const [id, setId] = useState<null | string>(null);
  return (
    <>
    <Wrapper>
      <Grid>
        <Box1 onClick={() => setId("1")} key={"1"} layoutId={"1"} whileHover={{scale:1.1}} />
        <Box2 />
        <Box2 />
        <Box1 onClick={() => setId("4")} key={"4"} layoutId={"4"} />
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            variants={overlay}
            onClick={() => setId(null)}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Box1 layoutId={id} style={{ width: 400, height: 200 }} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
    <Mybtn whileHover={{scale:1.1}}>click!</Mybtn>
    </>
  );
}

export default App;
