import { DialogBgDiv } from "./Background.style";

const Background = ({ children }) => {
  return (
    <>
      <DialogBgDiv>{children}</DialogBgDiv>
    </>
  );
};

export default Background;
