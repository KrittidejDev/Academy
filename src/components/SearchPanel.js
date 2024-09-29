import React from "react";
import styled from "styled-components";
import { GoSearch } from "react-icons/go";

const Container = styled.div`
  width: 90%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-top: 50px;
  padding: 20px;

  h2 {
    font-size: 36px;
    font-weight: 600;

    span {
      background: linear-gradient(90deg, #b176f2, #fac1f1); /* ใช้เกรเดี้ยน */
      -webkit-background-clip: text; /* คลิปพื้นหลังกับตัวอักษร */
      -webkit-text-fill-color: transparent; /* ตั้งค่าตัวอักษรให้โปร่งใส */
      background-clip: text; /* รองรับเบราว์เซอร์อื่นๆ */
    }
  }

  .SearchTab {
    height: 64px;
    width: 80%;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    margin-top: 20px;
    justify-content: center;

    button {
      font-size: 14;
      color: #fff;
      padding: 10px 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      background: #080808;
    }

    .Search {
      position: relative;
      width: 100%;
      max-width: 400px;
      border-radius: 20px;
      background: transparent;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 0 10px;
      transition: background 0.3s ease-in-out;
      opacity: 0.6;

      input {
        flex: 1;
        max-width: 100%;
        height: 64px;
        border: none;
        padding-left: 15px;
        border-radius: 10px;
        outline: none;
        background: #fafafa;
        color: #000;
      }

      button {
        color: #080808;
        position: absolute;
        right: 25px;
        font-size: 18px;
        align-items: center;
        background: none;
        border: none;
        cursor: pointer;
      }
    }
    p {
      font-size: 12px;
      white-space: nowrap;
    }
  }
`;

const SearchPanel = () => {
  return (
    <Container>
      <h2>
        Search among <span>58340</span> courses and
      </h2>
      <h2>find your favorite course</h2>

      <div className="SearchTab">
        <button>Categories</button>
        <div className="Search">
          <input type="text" placeholder="Search Anything" />
          <button>
            <GoSearch />
          </button>
        </div>
        <p>Or view the following courses...</p>
      </div>
    </Container>
  );
};

export default SearchPanel;
