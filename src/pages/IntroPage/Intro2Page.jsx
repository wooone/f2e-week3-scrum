import Background from "../../components/Background/Background";
import Header from "../../components/Header/Header";
import { BodyBgDiv, ButtonStyled } from "./IntroPage.style";
import teamImg from "../../assets/images/team.png";
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
            className="w-[80%] py-10"
          >
            <p className="text-gray-400 tracking-wide text-[23px]">
              聽過 Scrum 嗎 ?
              Scrum是一種輕量級的協作框架，以固定時間週期長度持續開發商品
              在這套框架的運作下，主要運作的三種角色分別是：SM、PO、TEAM。
            </p>
            <div className="flex justify-between items-center mt-[20px] gap-6">
              <div className="card bak-card purple-card">
                <h3>SM ( Srum Master )</h3>
                <p>
                  ScrumMaster（一般無中文翻譯，以下簡稱 SM）是團隊執行 Scrum
                  的必備角色之一，需要確保團隊運行在 Scrum
                  的框架，激發團隊的溝通與效能。根據《Scrum 指南》的定義，SM
                  的職責依照Scrum Guide 來建立 Scrum，並確認團隊遵循 Scrum
                  理論、實踐、規則。
                </p>
              </div>
              <div className="card bak-card pink-card ">
                <h3>PO ( Product Owner )</h3>
                <p>
                  產品負責人會負責評估產品待辦清單的價值與重要性，依序排列要執行的優先順序，對齊產品目標。最後排出產品待辦清單（Product
                  Backlog）唷！
                </p>
              </div>
              <img className="h-[320px]" src={teamImg} alt="" />
            </div>
            <div className="flex justify-end mt-[40px] ">
              <Link to="/intro3">
                <ButtonStyled>我都看完了!</ButtonStyled>
              </Link>
            </div>
          </div>
        </Background>
      </BodyBgDiv>
    </>
  );
};

export default IntroPage;
