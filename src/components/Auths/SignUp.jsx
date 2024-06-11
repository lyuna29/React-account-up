import { useRef } from "react";
import { StBtn, StInput, StLogo, StSignup, Wrapper } from "./Login.styled";

import logo from "/Users/lyuna/Desktop/assignment-3-answer-props-drilling/src/assets/logo.png";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const nicknameRef = useRef();

  const handleLogoClick = () => {
    navigate("/auths/login");
  };

  const handleSignUpClick = async () => {
    navigate("/auths/signup");
  };
  return (
    <Wrapper>
      <StSignup>
        <StInput>
          <StLogo onClick={handleLogoClick} src={logo} alt="로고이미지" />
          <input type="text" ref={emailRef} placeholder="이메일을 입력하세요" />
          <input
            type="password"
            ref={passwordRef}
            placeholder="비밀변호를 입력하세요"
          />
          <input
            type="text"
            ref={nicknameRef}
            placeholder="닉네임을 입력하세요"
          />
        </StInput>
        <StBtn>
          <button type="submit" onClick={handleSignUpClick}>
            가입하기
          </button>
        </StBtn>
      </StSignup>
    </Wrapper>
  );
};

export default SignUp;
