import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
li {
    padding: 10px;
}
`;

const Home = () => {
  return (
    <Wrap>
      <ul>
        <li>
        <Link to="/login">로그인하기</Link>
        </li>
        <li>
        <Link to="/signup">회원가입하기</Link>
        </li>
      </ul>
    </Wrap>
  );
};

export default Home;