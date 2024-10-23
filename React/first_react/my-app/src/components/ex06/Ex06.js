import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sub01 from "./pages/Sub01";
import Sub02 from "./pages/Sub02";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";

export const Ex06 = () => {
  return (
    <HashRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sub01" element={<Sub01 />} />
        <Route path="/sub02" element={<Sub02 />} />
        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>
    </HashRouter>
  );
};

// react-router-dom
// 리액트 경로 설정할 때 사용
// HashRouter -> Routes -> Route
// Router의 path props로 경로 설정
// Router의 element props로 컴포넌츠 설정
// 404 페이지는 /* 로 설정