import React from "react";
import { BgDivStyled, DialogBgDiv } from "./Homepage.style";
import headerImg from "../../assets/images/header.png";
import userImg from "../../assets/images/user.png";
import buttonImg from "../../assets/images/ok-button.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <BgDivStyled>
        <div className="flex justify-center items-center flex-col">
          <img
            className="flex mt-[10rem]"
            src={headerImg}
            alt="dislog header"
          />
          <DialogBgDiv>
            <div className="flex pt-10 justify-between px-8">
              <div className="text-gray-500 flex flex-col leading-8">
                <h1 className="text-blue-700 text-4xl font-semibold mb-[5rem]">
                  歡迎來到三明治科技
                </h1>
                <p>自我介紹一下,</p>
                <p>讓我認識一下你是誰吧!</p>
                <p>
                  我是{" "}
                  <span className="text-red-600 underline">❤純愛戰士❤</span>
                </p>
              </div>
              <img className="w-[273px]" src={userImg} alt="" />
            </div>
            <div className="flex justify-between px-8 pb-8 mt-8 items-center">
              <div className="toggle section">
                <span className="text-gray-400 text-sm">
                  想試試看暗黑模式嗎？
                </span>
              </div>
              <Link to="/intro">
                <img className="w-full" src={buttonImg} alt="" />
              </Link>
            </div>
          </DialogBgDiv>
        </div>
      </BgDivStyled>
    </>
  );
};

export default HomePage;
