import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

const Ex07 = () => {
return (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  </HashRouter>
);
};

export default Ex07;

//! 쿠키


//! 세션
//? 로그인 기록으로 유효기간을 보는 듯. 시간이 만료되면 세션이 만료되었다가 그 말인 듯.

//! 토큰
//? 토큰이 있는지 없는지, 맞는지 안 맞는지 확인하여 로그인 상태를 부여하는 듯.

//! 캐시
//? 사이트의 일정 정보를 저장하게 하는 개념인 듯
