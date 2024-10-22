import styled from "styled-components";

const TimerWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  color: gray;
`;

const TimerWrapEl = () => {
    return (
        <TimerWrap>
          <div className="now">1:45</div>
          <div className="logo">logo</div>
          <div className="end">3:45</div>
        </TimerWrap>
    );
};

export default TimerWrapEl;