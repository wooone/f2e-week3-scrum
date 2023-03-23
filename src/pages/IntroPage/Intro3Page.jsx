import Background from "../../components/Background/Background";
import Header from "../../components/Header/Header";
import { BodyBgDiv, ButtonStyled } from "./IntroPage.style";
import bgFLowImg from '../../assets/images/flow.png'
import { Link } from "react-router-dom";

const IntroPage = () => {
  return (
    <>
      <BodyBgDiv className="flex items-center justify-center flex-col">
        <Header></Header>
        <Background>
          <div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-[80%] py-10 flex flex-col align-center justify-center"
          >
            <p className="text-gray-400 tracking-wide text-[23px]">
              而在 Scrum
              開發的框架裡，為了能團隊作業能有更快速的短衝，將流程劃分為下列五個階段，接下來，我們將會詳細介紹這五個階段如何運作。沒問題的話，就按下＂前往觀看介紹＂按鈕囉！
            </p>
            <div className="flex justify-center items-center mt-[20px] gap-6">
				<div className="flex relative">
					<img className="w-full" src={bgFLowImg} alt="" />
				</div>
            </div>
            <div className="flex justify-end mt-[40px] ">
              <Link to="/intro">
                <ButtonStyled>前往觀看介紹</ButtonStyled>
              </Link>
            </div>
          </div>
        </Background>
      </BodyBgDiv>
    </>
  );
};

export default IntroPage;
