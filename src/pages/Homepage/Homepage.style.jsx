import styled from "styled-components";
import bgImg from "../../assets/images/homepage-bg.png";

export const BgDivStyled = styled.div`
  background: url(${bgImg});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  min-height: 100vh;
  overflow: hidden;
`;

export const DialogBgDiv = styled.div`
  background: rgb(241, 243, 255);
  background: linear-gradient(
    0deg,
    rgba(241, 243, 255, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  width: 808px;
  border-radius: 0 0 20px 20px;
`;
