const Box = ({ name, main, sub, bgColor }) => {
  return (
    <div className="section" style={{backgroundColor: bgColor}}>
      <div className="name" >{name}</div>
      <div className="main">{main}</div>
      <div className="sub">{sub}</div>
    </div>
  );
};

export default Box;
