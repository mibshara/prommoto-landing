import React from "react";

import Header from "components/header/header.component";
// import PartnersLogos from "components/partnersLogos/partnersLogos.component";
import BrandsIndividuals from "components/brandsIndividuals/brandsIndividuals.component";
import EarnMoney from "components/earnMoney/earnMoney.component";
import Promote from "components/promote/promote.component";
import Waitlist from "components/waitlist/waitlist.component";
import GetInTouch from "components/getInTouch/getInTouch.component";
import FormModal from "components/formModal/formModal.component";

import earnGrow3 from "assets/growSlide3.png";
import earnMoney1 from "assets/earnMoney1.svg";
import earnMoney2 from "assets/earnMoney2.svg";
import earnMoney3 from "assets/earnMoney3.png";
import earnGrow1 from "assets/growSlide1.svg";
import earnGrow2 from "assets/growSlide2.png";

const HomePage = ({ handleModalMenu, isModalOpen }) => {
  return (
    <>
      {isModalOpen && <FormModal closeClick={handleModalMenu} />}
      <Header />
      {/* <PartnersLogos /> */}
      <BrandsIndividuals />
      <EarnMoney
        handleModal={handleModalMenu}
        key={0}
        headerText="Earn money"
        subHeaderText="for driving."
        slide1MainText="Make money"
        slide1MainSubText={[
          "State of the art way to make extra money. Simply by driving you can make up to ",
          <span>$400</span>,
          " per campaign for doing what you already do",
        ]}
        slide1Img={earnMoney1}
        slide2MainText="Set your own schedule"
        slide2MainSubText="Go about your daily life and make money for doing what you already do."
        slide2Img={earnMoney2}
        slide3MainText="Let the app lead the way"
        slide3MainSubText="Cruise around and let the app lead the way to make you the most money."
        slide3Img={earnMoney3}
        mainColor="#F6555A"
        subBgColor={"#ffe100"}
        mainTextColor="#fff"
        subTextColor="#0043ea"
        scrollBg={"rgba(246, 85, 90, 0.1)"}
        borderColor="#F6555A"
        id="forDrivers"
        firstStepId={"earnMoneyFirstStep"}
        secondStepId={"earnMoneySecondStep"}
        thirdStepId={"earnMoneyThirdStep"}
        // subColor="#fff"
      />
      <Promote />
      <Waitlist handleModal={handleModalMenu} />
      <EarnMoney
        key={1}
        headerText="Earn & Grow"
        subHeaderText="for Installers."
        slide1MainText="Grow your market"
        slide1MainSubText="Diversify your market reach and client base through utilizing Prommoto to generate extra clientele. Making you extra revenue for doing what you’re already doing."
        slide1Img={earnGrow1}
        slide2MainText="Plenty of orders"
        slide2MainSubText="Boost your order volume by being part of Prommoto's platform full of drivers ready to support brand campaigns."
        slide2Img={earnGrow2}
        slide3MainText="You do you"
        slide3MainSubText="Wrap for Prommoto on your schedule. You can focus on what you do best while seamlessly managing new wraps and removals through our intuitive integrative scheduling & management platform."
        slide3Img={earnGrow3}
        mainColor="#FFE100"
        subColor="#FFE100"
        subBgColor={"#F6555A"}
        mainTextColor="#0043ea"
        subTextColor="#fff"
        scrollBg={"rgba(0, 67, 234, 0.1)"}
        borderColor="rgba(0, 67, 234, 0.54)"
        id="forInstallers"
        firstStepId={"growFirstStep"}
        secondStepId={"growSecondStep"}
        thirdStepId={"thirdStep"}
        handleModal={handleModalMenu}
      />
      <GetInTouch />
    </>
  );
};

export default HomePage;
