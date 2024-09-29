import React from "react";
import styled from "styled-components";
import PanelImg from "../img/TopPanel.png";
import Booked from "../img/booked.png";
import { FcNext } from "react-icons/fc";

const Container = styled.div`
  width: 90%;
  height: 648px;
  max-width: 100%;
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  gap: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-top: 50px;

  .PanelLeft {
    width: 50%;
    height: 100%;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    p {
      font-size: 40px;
      font-weight: 600;
      line-height: 64px;

      span {
        background: linear-gradient(90deg, #b176f2, #fac1f1); /* ใช้เกรเดี้ยน */
        -webkit-background-clip: text; /* คลิปพื้นหลังกับตัวอักษร */
        -webkit-text-fill-color: transparent; /* ตั้งค่าตัวอักษรให้โปร่งใส */
        background-clip: text; /* รองรับเบราว์เซอร์อื่นๆ */
      }
    }

    div {
      display: flex;
      align-items: center;
      gap: 32px;
      margin-bottom: 50px;
      button {
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        background: #080808;
        color: #ffffff;
        padding: 20px;
        gap: 8px;
      }
    }
  }

  .PanelRight {
    width: 50%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: auto;
    }
  }
`;

const TopPanel = () => {
  return (
    <Container>
      <div className="PanelLeft">
        <p>🙌 Hello friends </p>
        <p>
          I am Sofia and we want to start a <span>web design</span> course
          together. Do you like it too 😍 ?
        </p>
        <div>
          <button>
            Start course now
            <FcNext />
          </button>
          <img src={Booked} alt="" />
        </div>
      </div>

      <div className="PanelRight">
        <img src={PanelImg} alt="" />
      </div>
    </Container>
  );
};

export default TopPanel;
