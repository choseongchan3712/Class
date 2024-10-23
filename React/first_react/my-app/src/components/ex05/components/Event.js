import { useState } from "react";
import { styled } from "styled-components";
const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.$color};
  cursor: pointer;
`;

const Event = () => {
  const [bgColor, setColor] = useState("salmon");
  const [on, setOn] = useState(true);

  const clickHandler = () => {
    if(on) {
        setOn(false);
        setColor('lightsalmon');
    } else if(!on) {
        setOn(true);
        setColor('salmon');
    }
  };
  return <Box $color={bgColor} onClick={clickHandler}></Box>;
};

export default Event;
