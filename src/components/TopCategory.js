import React, { useRef } from "react";
import styled from "styled-components";
import { FcPrevious, FcNext } from "react-icons/fc";
import { FaCode } from "react-icons/fa6";
import { LuPenTool } from "react-icons/lu";
import { HiOutlineVideoCamera } from "react-icons/hi2";

const Container = styled.div`
  width: 90%;
  height: 64px;
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

  .ButtonPrevNext {
    font-size: 16px;
    width: auto;
    height: 67px;
    padding: 12px 16px;
    border: none;
    border-radius: 12px;
    background: none;
    cursor: pointer;
    color: #9e5cf2;
  }

  .categoryTab {
    width: 90%;
    display: flex;
    align-items: center;
    gap: 10px;
    overflow-x: auto;
    white-space: nowrap;
    gap: 20px;
    list-style: none;
    font-size: 30px;

    button {
      font-size: 18px;
      font-weight: 600;
      width: auto;
      height: 67px;
      padding: 12px 16px;
      border: none;
      border-radius: 12px;
      background: transparent;
      cursor: pointer;
      color: #9e5cf2;
    }
  }
`;

const categories = [
  {
    name: "Code",
    icon: <FaCode />,
    link: "/#",
  },
  {
    name: "Python",
    icon: null,
    link: "/#",
  },
  {
    name: "React",
    icon: null,
    link: "/#",
  },
  {
    name: "Unity",
    icon: null,
    link: "/#",
  },
  {
    name: "Design",
    icon: <LuPenTool />,
    link: "/#",
  },
  {
    name: "Ui & Ux",
    icon: null,
    link: "/#",
  },
  {
    name: "Vector",
    icon: null,
    link: "/#",
  },
  {
    name: "Video",
    icon: <HiOutlineVideoCamera />,
    link: "/#",
  },
  {
    name: "After Effects",
    icon: null,
    link: "/#",
  },
  {
    name: "Lightroom",
    icon: null,
    link: "/#",
  },
  {
    name: "Photography",
    icon: null,
    link: "/#",
  },
  {
    name: "Figma",
    icon: null,
    link: "/#",
  },
  {
    name: "Photoshop",
    icon: null,
    link: "/#",
  },
];

const TopCategory = () => {
  const categoryRef = useRef(null);

  const scrollLeft = () => {
    categoryRef.current.scrollLeft -= 100;
  };

  const scrollRight = () => {
    categoryRef.current.scrollLeft += 100;
  };

  return (
    <Container>
      <button className="ButtonPrevNext">
        <FcPrevious />
      </button>
      <div className="categoryTab">
        {categories.map((category, index) => (
          <button key={index} className="scrollBtn">
            {category.icon ? category.icon : category.name}
          </button>
        ))}
      </div>
      <button className="ButtonPrevNext">
        <FcNext />
      </button>
    </Container>
  );
};

export default TopCategory;
