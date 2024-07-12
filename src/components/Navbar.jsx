import styled from "styled-components";
import profileImg from "../images/profile.jpg";

const Navbar = () => {
  return (
    <Container>
      <Prople />
      <h4>
        nice_man
        <InstaName>나이스</InstaName>
      </h4>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  display: flex;
  margin: 10px 0;
`;

const Prople = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-image: url(${profileImg});
  background-position: dover;
  background-size: 100%;
  margin: 5px 10px;
`;

const InstaName = styled.p`
  font-size: 12px;
  font-waigint: normal;
  color: #999;
`;
