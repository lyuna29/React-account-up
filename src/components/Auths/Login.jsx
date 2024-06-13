import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "/Users/lyuna/Desktop/assignment-3-answer-props-drilling/src/assets/logo.png";
import { StBtn, StInput, StLayout, StLogo, Wrapper } from "./Login.styled";
import { login } from "../../../lib/api/auth";

export default function Login({ setUser }) {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogoClick = () => {
    navigate("/auths/logIn");
  };

  const handleLogInClick = async () => {
    const { userId, nickname, avatar } = await login({
      id: id,
      password: password,
    });
    alert("로그인이 되었습니다");
    setUser({ userId, nickname, avatar });
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
          <input
            type="text"
            onChange={(e) => setId(e.target.value)}
            placeholder="이메일"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
          />
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
}
