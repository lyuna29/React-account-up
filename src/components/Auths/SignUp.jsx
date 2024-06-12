import { useState } from "react";
import { StBtn, StInput, StLogo, StSignup, Wrapper } from "./Login.styled";
import { register } from "../../../lib/api/auth";
import logo from "/Users/lyuna/Desktop/assignment-3-answer-props-drilling/src/assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const handleLogoClick = async () => {
    if (id.length < 4 || id.length > 10) {
      alert("아이디는 4글자에서 10글자 이내로만 가능합니다!");
      return;
    }
    if (password.length < 4 || password.length > 15) {
      alert("패스워드는 4글자에서 15글자 이내로만 가능합니다!");
      return;
    }
    if (nickname.length < 1 || nickname.length > 10) {
      alert("닉네임은 4글자에서 10글자 이내로만 가능합니다!");
      return;
    }
    navigate("/auths/login");
  };

  const handleSignUpClick = async () => {
    const response = await register({
      id: id,
      password: password,
      nickname: nickname,
    });
    if (response) {
      confirm("회원가입이 완료되었습니다.");
      navigate("/auths/login");
    }
  };
  return (
    <Wrapper>
      <StSignup>
        <StInput>
          <StLogo onClick={handleLogoClick} src={logo} alt="로고이미지" />
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="아이디를 입력하세요"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀변호를 입력하세요"
          />
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
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
}
