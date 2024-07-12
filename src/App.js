import "./App.css";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import CommentList from "./components/CommentList";
import styled from "styled-components";

function App() {
  return (
    <AppBox>
      <Navbar />
      <Feed />
      <CommentList />
    </AppBox>
  );
}

export default App;

const AppBox = styled.div`
  width: 800px;
  height: 100%;
  border: 1px solid #ccc;
`;
