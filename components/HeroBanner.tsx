import styled from "styled-components";
import React from "react";

const HeroBox = styled.article`
  width: 600px;
  height: 200px;
  display: flex;
  flex-direction: colum;
  justify-content: center;
  margin: 40px;
  box-shadow: 0 5px 20px -7px rgba(0, 0, 0, 0.25);
`;

const HeroBanner = () => {
  return (
    <HeroBox>
      <img
        src="https://cdn.greatlifepublishing.net/wp-content/uploads/sites/2/2020/08/20175713/avo-stick-728x510.jpg"
        alt="avocado in deodorant form"
      ></img>
      <div>
        <h1>Check out this amazing product!</h1>
        <p style={{ padding: "10px" }}>
          Recommended by 83% of professional helicopter pilots
        </p>
      </div>
    </HeroBox>
  );
};

export default HeroBanner;
