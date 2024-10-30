import { useForm } from "react-hook-form";
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

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    // errors라는 에러를 설정한 객체를 불러 오는 듯
  } = useForm();

  const loginSubmit = (data) => {
    console.log(data);
    // {username: 'ssss', password: 'sssss'}
  };

  // console.log(isValid);

  return (
    <Container>
      <Form onSubmit={handleSubmit(loginSubmit)}>
        <h2>로그인</h2>

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
        <Button $isActive={isValid ? "1" : "0.5"} $ispointer={isValid ? "pointer": "unset"}>로그인</Button>
      </Form>
    </Container>
  );
};

export default Login;

// ! useForm()
// ? const {register, handleSubmit, formState:{errors, isValid}} = useForm();
// ? register: input 태그 관리해줌
// ? handleSubmit: form 이벤트 관리
// ? formState: 폼 상태관리
// ? errors: 에러 관리
// ? isValid: 유효성 판단 후 boolean값으로 반환함
// ? handleSubmit내부 커스텀 함수 첫번째 매개변수는 input의 value값을 객체로 저장하여 반환함

