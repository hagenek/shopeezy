import styled from "styled-components";

const HeroBox = styled.article`
  width: 600px;
  height: 200px;
  display: flex;
  flex-direction: colum;
  justify-content: center;
  margin: 40px;
`;

const HeroBanner = () => {
  return (
    <HeroBox>
      <img
        src="https://cdn.greatlifepublishing.net/wp-content/uploads/sites/2/2020/08/20175713/avo-stick-728x510.jpg"
        alt="avocado in deodorant form"
      ></img>
      <h1>Check out this amazing product!</h1>
      <p>
        Recommended by 83% of professional radio controlled helicopter pilot
        assistants
      </p>
    </HeroBox>
  );
};

export default HeroBanner;
