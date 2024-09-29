import React from "react";
import styled from "styled-components";
import { FaCaretDown } from "react-icons/fa";
import { MdPlayLesson, MdPerson } from "react-icons/md";
import { IoMdTrophy } from "react-icons/io";

import CardImg1 from "../img/academy/10.png";
import CardImg2 from "../img/academy/04.png";
import ScoreImg from "../img/Score.png";

const Container = styled.div`
  width: 90%;
  height: 648px;
  max-width: 100%;
  display: flex;
  flex-wrap: no-wrap;
  justify-content: center;
  padding: 1rem;
  gap: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-top: 50px;
  position: relative;

  .Header {
    width: 100%;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-weight: 600;
    }

    ul {
      display: flex;
      gap: 15px;
      list-style: none;
    }
  }

  .CardBox {
    width: 100%;
    display: grid;
    margin-top: 40px;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 20px;

    .Card {
      display: flex;
      flex-direction: column;
      width: 350px;
      margin-top: 20px;
      padding: 10px;
      border-radius: 20px;
      box-shadow: 0 2px 5px rgba(0.1, 0.1, 0.1, 0.1);

      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 10px;
      }

      h3 {
        font-size: 18px;
        margin-bottom: 10px;
      }

      .CardInfo {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        align-items: center;
        color: gray;
        font-size: 14px;
        margin-bottom: 10px;

        p {
          display: flex;
          align-items: center;
          gap: 5px;
        }
      }

      .CardActions {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;

        button {
          padding: 10px 24px;
          border: none;
          border-radius: 10px;
          background-color: #080808;
          color: white;
          cursor: pointer;
        }

        .CardScore {
          position: relative;
          height: 40px;
          width: 40px;
          display: flex;
          align-items: center;

          img {
            position: absolute;
            width: 40px;
            height: 40px;
            z-index: 1;
          }

          span {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 2;
          }
        }
      }
    }
  }
`;

const Crouse = [
  {
    id: 1,
    title: "Learn Figma - UI/UX Design Essential Training",
    lesson: 6,
    student: 198,
    level: "Beginner",
    ratting: 4,
    image: CardImg1,
  },
  {
    id: 2,
    title: "Python for Beginners - Learn Programming from scratch",
    lesson: 21,
    student: 99,
    level: "Advanced",
    ratting: 2,
    image: CardImg2,
  },
  {
    id: 3,
    title: "Learn Figma - UI/UX Design Essential Training",
    lesson: 6,
    student: 198,
    level: "Beginner",
    ratting: 4,
    image: CardImg1,
  },
  {
    id: 4,
    title: "Learn Figma - UI/UX Design Essential Training",
    lesson: 6,
    student: 198,
    level: "Beginner",
    ratting: 4,
    image: CardImg1,
  },
  {
    id: 5,
    title: "Learn Figma - UI/UX Design Essential Training",
    lesson: 6,
    student: 198,
    level: "Beginner",
    ratting: 4,
    image: CardImg1,
  },
  {
    id: 6,
    title: "Learn Figma - UI/UX Design Essential Training",
    lesson: 6,
    student: 198,
    level: "Beginner",
    ratting: 4,
    image: CardImg1,
  },
];

const NewCrouse = () => {
  return (
    <Container>
      <div className="Header">
        <h2>NEW COURSES</h2>
        <ul>
          <li>All Course</li>
          <li>Design</li>
          <li>Development</li>
          <li>Photography</li>
          <li>Music</li>
          <li>
            <FaCaretDown />
          </li>
        </ul>
      </div>

      <div className="CardBox">
        {Crouse.map((crouse) => (
          <div key={crouse.id} className="Card">
            <img src={crouse.image} alt={crouse.title} />
            <h3>{crouse.title}</h3>
            <div className="CardInfo">
              <p>
                <MdPlayLesson />
                Lesson : {crouse.lesson}
              </p>
              <p>
                <MdPerson />
                student : {crouse.student}
              </p>
              <p>
                <IoMdTrophy />
                {crouse.level}
              </p>
            </div>
            <div className="CardActions">
              <button>Start course</button>
              <div className="CardScore">
                <img src={ScoreImg} alt="Score" />
                <span>{crouse.ratting}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default NewCrouse;
