import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "/Users/lyuna/Desktop/assignment-3-answer-props-drilling/src/assets/logo.png";
import { StBtn, StInput, StLayout, StLogo, Wrapper } from "./Login.styled";

const Login = () => {
  const navigate = useNavigate();
  const idRef = useRef();
  const passwordRef = useRef();

  const handleLogoClick = () => {
    navigate("/auths/logIn");
  };

  const handleLogInClick = async () => {
    navigate("/");
  };

  const handleSignUpClick = async () => {
    navigate("/auths/signup");
  };
  return (
    <Wrapper>
      <StLayout>
        <StInput>
          <StLogo onClick={handleLogoClick} src={logo} alt="로고이미지" />
          <input type="text" placeholder="이메일" ref={idRef} />
          <input type="password" placeholder="비밀번호" ref={passwordRef} />
        </StInput>
        <StBtn>
          <button type="submit" onClick={handleLogInClick}>
            로그인
          </button>
          <button type="submit" onClick={handleSignUpClick}>
            회원가입
          </button>
        </StBtn>
      </StLayout>
    </Wrapper>
  );
};

export default Login;
