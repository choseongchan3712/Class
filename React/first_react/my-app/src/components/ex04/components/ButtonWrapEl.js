import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  i {
    font-size: 40px;
  }
  svg {
    font-size: 40px;
  }
`;

export const ButtonWrapEl = () => {
  return (
    <ButtonWrap>
      <FontAwesomeIcon icon={faBackward} />
      <FontAwesomeIcon icon={faPause} />
      <FontAwesomeIcon icon={faForward} />
    </ButtonWrap>
  );
};
