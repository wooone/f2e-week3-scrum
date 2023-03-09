import Background from "../../components/Background/Background";
import Header from "../../components/Header/Header";
import { BodyBgDiv, ButtonStyled } from "./IntroPage.style";
import smImg from "../../assets/images/sm.png";
import poImg from "../../assets/images/po.png";
import teamImg from "../../assets/images/team.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const IntroPage = () => {
  return (
    <>
      <BodyBgDiv className="flex items-center justify-center flex-col">
        <Header></Header>
        <Background>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-[80%] py-10"
          >
            <p className="text-gray-400 tracking-wide text-[23px]">
              聽過 Scrum 嗎 ?
              Scrum是一種輕量級的協作框架，以固定時間週期長度持續開發商品
              在這套框架的運作下，主要運作的三種角色分別是：SM、PO、TEAM。
            </p>
            <div className="flex justify-between items-center gap-6 mt-[20px]">
              <div className="card">
                <img className="h-[320px]" src={smImg} alt="" />
              </div>
              <div className="card">
                <img className="h-[320px]" src={poImg} alt="" />
              </div>
              <img className="h-[320px]" src={teamImg} alt="" />
            </div>
            <div className="flex justify-end mt-[40px]">
              <Link to="/intro">
                <ButtonStyled>下一頁</ButtonStyled>
              </Link>
            </div>
          </motion.div>
        </Background>
      </BodyBgDiv>
    </>
  );
};

export default IntroPage;
