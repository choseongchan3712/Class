import { useForm } from "react-hook-form";

const Ex07 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // errors라는 에러를 설정한 객체를 불러 오는 듯
  } = useForm();

  const loginSubmit = (data) => {
    console.log(data);
    // {username: 'ssss', password: 'sssss'}
  };

  console.log(errors);

  return (
    <div>
      <form onSubmit={handleSubmit(loginSubmit)}>
        <h2>로그인</h2>

        <input
          {...register("username", {
            required: "아이디는 필수 입니다.",
          })}
          type="text"
          placeholder="아이디"
        />
        <p>{errors?.username?.message}</p>
        {/* 옵셔널 체이닝(.?): 객체 속성의 유무에 따라 undefinded로 반환이 아닌 값이 있으면 값을 반환하고, 없으면 빈값으로 반환함 */}
        <input
          {...register("password", {
            required: "비밀번호는 필수 입니다.",
          })}
          type="password"
          placeholder="비밀번호"
        />
        <p>{errors?.password?.message}</p>
        <button>로그인</button>
      </form>
    </div>
  );
};

export default Ex07;