import "./style.css";
import Header from "./components/Header";
// import Box from "./components/Box";
import {Wrap1, Wrap2, Wrap3, Wrap4, Wrap5, Wrap6, Wrap7} from "./components/Wrap";
// import Contents from "./components/Contents";


const PropsEx = () => {
  return (
    <>
      {/* <Contents text="contents1" bgColor="salmon"></Contents>
        <Contents text="contents2" bgColor="lightblue"></Contents>
        <Contents text="contents3" bgColor="lightsalmon"></Contents> */}
      <Header></Header>
      <Wrap1></Wrap1>
      <Wrap2></Wrap2>
      <Wrap3></Wrap3>
      <Wrap4></Wrap4>
      <Wrap5></Wrap5>
      <Wrap6></Wrap6>
      <Wrap7></Wrap7>
    </>
  );
};

export default PropsEx;
