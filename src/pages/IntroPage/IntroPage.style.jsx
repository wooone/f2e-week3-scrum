import styled from "styled-components";
import IntroBgImg from "../../assets/images/bg-light.png";

export const BodyBgDiv = styled.div`
  background: url(${IntroBgImg});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  min-height: 100vh;
  overflow: hidden;
`;

export const ButtonStyled = styled.span`
  background: rgb(255, 168, 231);
  background: linear-gradient(
    0deg,
    rgba(255, 168, 231, 1) 0%,
    rgba(255, 199, 11, 1) 100%
  );
  border-radius: 999px;
  color: #fff;
  padding: 12px 35px;
  font-size: 18px;
`;
