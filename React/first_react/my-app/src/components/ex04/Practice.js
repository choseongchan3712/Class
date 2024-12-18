import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

import TimerWrapEl from "./components/TimerWrapEl";
import styled from "styled-components";
import { ButtonWrapEl } from "./components/ButtonWrapEl";

const Wrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Contents_wrap = styled.div`
  width: 400px;
  height: 600px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 10px solid black;
  border-radius: 30px;
  padding: 20px;
  .music_name {
    position: relative;
    margin-top: 10px;
    font-size: 25px;
    font-weight: bold;
    width: 100%;
  }
`;

const Img_wrap = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const BarWrap = styled.div`
  width: 100%;
  height: 6px;
  background-color: lightgray;
  border-radius: 5px;
  margin-top: 10px;
  div {
    width: 60%;
    height: 100%;
    border-radius: 5px;
    background-color: gray;
  }
`;



const SoundConWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

const SoundWrap = styled.div`
  width: 100%;
  width: 80%;
  height: 6px;
  background-color: lightgray;
  border-radius: 5px;

  .sound_bar {
    width: 40%;
    height: 100%;
    border-radius: 5px;
    background-color: gray;
  }
`;

const More = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Practice = () => {
  return (
    <Wrap>
      <Contents_wrap>
        <Img_wrap>
          <img
            src="https://cdn.pixabay.com/photo/2024/09/25/14/32/lighthouse-9073925_640.png"
            alt="img"
          />
        </Img_wrap>
        <More>
          <div className="music_name">music name</div>
          <FontAwesomeIcon icon={faEllipsis} />
        </More>
        <BarWrap>
          <div className="bar"></div>
        </BarWrap>
        <TimerWrapEl></TimerWrapEl>
        <ButtonWrapEl></ButtonWrapEl>
        <SoundConWrap>
          <i class="fa-solid fa-volume-off"></i>
          <SoundWrap>
            <div className="sound_bar"></div>
          </SoundWrap>
          <i class="fa-solid fa-volume-high"></i>
        </SoundConWrap>
      </Contents_wrap>
    </Wrap>
  );
};
