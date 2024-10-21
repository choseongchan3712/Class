import styled from "styled-components";

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

const TimerWrap = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 10px;
color: gray;
`;

const ButtonWrap = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 30px;
i {
    font-size: 40px;
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

export const Practice = () => {
    return (
        <Wrap>
            <Contents_wrap>
                <Img_wrap>
                    <img src="https://cdn.pixabay.com/photo/2024/09/25/14/32/lighthouse-9073925_640.png" alt="img" />
                </Img_wrap>
                <div className="music_name">music name</div>
                <BarWrap>
                    <div className="bar"></div>
                </BarWrap>
                <TimerWrap>
                    <div className="now">1:45</div>
                    <div className="logo">logo</div>
                    <div className="end">3:45</div>
                </TimerWrap>
                <ButtonWrap>
                <i class="fa-solid fa-backward"></i>
                <i class="fa-solid fa-pause"></i>
                <i class="fa-solid fa-forward"></i>
                </ButtonWrap>
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