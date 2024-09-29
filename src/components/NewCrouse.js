import React from "react";
import styled from "styled-components";
import { FaCaretDown } from "react-icons/fa";
import CardImg1 from "../img/academy/10.png";

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
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    .card {
      width: 300px;
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
            <div className="Card-content">
              <h3>{crouse.title}</h3>
              <div className="CardInfo">
                <p></p>
                <p></p>
                <p></p>
              </div>
              <div className="CardActions">
                <button></button>
                <div className="CardScore"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default NewCrouse;
