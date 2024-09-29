import React, { useState } from "react";
import styled from "styled-components";
import { GoSearch } from "react-icons/go";
import { HiAcademicCap } from "react-icons/hi2";
import { FaBell } from "react-icons/fa6";

import profileHeadPic from "../img/avatar/13.jpg";

const Container = styled.div`
  width: 90%;
  height: 64px;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  gap: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-top: 50px;

  .left-Header {
    flex-basis: 20%;
    display: flex;
    align-items: center;
    gap: 30px;

    button {
      display: flex;
      align-items: center;
      background: none;
      border: none;
      cursor: pointer;

      .logoImg {
        width: 30px;
        height: 30px;
        background-size: cover;
        color: #9e5cf2;
      }

      h1 {
        font-size: 30px;
        color: #000;
        font-weight: 900;
      }
    }

    ul {
      display: flex;
      gap: 20px;
      justify-content: center;
      align-items: center;
      width: max-content;
      list-style: none;

      li {
        margin-right: 10px;
        cursor: pointer;

        &:hover {
          color: #9e5cf2;
        }
      }
    }
  }

  .right-Header {
    flex-basis: 20%;
    display: flex;
    align-items: center;
    gap: 10px;

    .Search {
      position: relative;
      width: 100%;
      max-width: 288px;
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
        position: absolute;
        right: 25px;
        font-size: 18px;
        align-items: center;
        background: none;
        border: none;
        cursor: pointer;
      }
    }
    .profile {
      flex-basis: 20%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      cursor: pointer;

      .profileImg {
        width: 64px;
        height: 64px;
        border-radius: 20%;
        object-fit: cover;
        cursor: pointer;
      }

      .profileDetail {
        width: 200px;
        height: 100%;
        .Name {
          font-size: 16px;
          font-weight: bold;
        }
        p {
          font-size: 14px;
          color: #9e5cf2;
          cursor: pointer;
          transition: color 0.3s ease-in-out;
        }
      }
      button {
        height: 64px;
        width: 64px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: none;
        border: none;
        cursor: pointer;
        color: #9e5cf2;
        font-size: 20px;
      }
    }
  }
`;

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <Container>
      <div className="left-Header">
        <button>
          <HiAcademicCap className="logoImg" />
          <h1>ACADEMY</h1>
        </button>

        <ul>
          <li>Category</li>
          <li>Teach</li>
          <li>Contact Us</li>
          <li>About Us</li>
        </ul>
      </div>

      <div className="right-Header">
        <div className="Search">
          <input type="text" placeholder="Search Anything" />
          <button>
            <GoSearch />
          </button>
        </div>
        <div className="profile">
          <img className="profileImg" src={profileHeadPic} alt="" />
          <div className="profileDetail">
            <h2 className="Name">Behzad pashaei</h2>
            <p>ui & ux designer</p>
          </div>
          <button>
            <FaBell />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Header;
