const Contents = ({ text, bgColor }) => {
  //   const text = props.text;
  //   const bgcolor = props.bgcolor;
  //   const { text, bgColor } = props;
  //   비구조화 할당
  return (
    <>
      <div className="box" style={{ backgroundColor: bgColor }}>
        {text}
      </div>
    </>
  );
};

export default Contents;
