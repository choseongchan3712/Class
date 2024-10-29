import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  max-width: 450px;
  width: 100%;
  padding: 80px 20px;
  border: 1px solid #dbdbdb;
  border-radius: 20px;

  h2 {
    font-size: 50px;
    text-align: center;
    font-weight: 600;
    letter-spacing: -2px;
    margin-bottom: 50px;
  }

  input {
    all: unset;
    width: 100%;
    height: 50px;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    margin-top: 10px;
    padding: 5px;
    box-sizing: border-box;
    /* &::placeholder {
    color: red;
  } */
  }

  p {
    font-size: 14px;
    color: crimson;
    margin-top: 3px;
  }
`;

const Button = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  background-color: cornflowerblue;
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
  font-weight: 500;
  color: white;
  cursor: ${(props) => props.$ispointer};
  border-radius: 10px;
  opacity: ${(props) => props.$isActive};
`;

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    // errors라는 에러를 설정한 객체를 불러 오는 듯
  } = useForm();

  const nav = useNavigate();

  const signupSubmit = (data) => {
    alert(`${data.username}님 회원가입 되었습니다, 로그인 해주세요.`);
    nav("/login");
  };

  // console.log(isValid);

  return (
    <Container>
      <Form onSubmit={handleSubmit(signupSubmit)}>
        <h2>회원가입</h2>

        <input
          {...register("username", {
            required: "아이디는 필수 입니다.",
            minLength: {
              value: 2,
              message: "아이디는 두자리 이상으로 하세요.",
            },
          })}
          type="text"
          placeholder="아이디"
        />
        <p>{errors?.username?.message}</p>
        {/* 옵셔널 체이닝(.?): 객체 속성의 유무에 따라 undefinded로 반환이 아닌 값이 있으면 값을 반환하고, 없으면 빈값으로 반환함 */}
        <input
          {...register("password", {
            required: "비밀번호는 필수 입니다.",
            // minLength: {
            //   value: 8,
            //   message: "패스원드는 8자 이상 작성해 주세요.",
            // },
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
              message: "영문 숫자 특수기호 조합 8~15자리 으로 설정하세요",
            },
          })}
          type="password"
          placeholder="비밀번호"
        />
        <p>{errors?.password?.message}</p>
        <input
          {...register("email", {
            required: false,
            // minLength: {
            //   value: 8,
            //   message: "패스원드는 8자 이상 작성해 주세요.",
            // },
            pattern: {
              value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
              message: "유효한 이메일을 작성해 주세요",
            },
          })}
          type="text"
          placeholder="email"
        />
        <p>{errors?.email?.message}</p>
        <input
          {...register("name", {
            required: false,
            // minLength: {
            //   value: 8,
            //   message: "패스원드는 8자 이상 작성해 주세요.",
            // },
            pattern: {
              value: /^[가-힣]{2,4}$/,
              message: "유효한 이름을 작성해 주세요(한글)",
            },
          })}
          type="text"
          placeholder="이름"
        />
        <p>{errors?.name?.message}</p>
        <Button $isActive={isValid ? "1" : "0.5"} $ispointer={isValid ? "pointer": "unset"}>회원가입</Button>
      </Form>
    </Container>
  );
};

export default SignUp;