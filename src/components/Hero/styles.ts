import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    max-width: 600px;
    color: #000000;
    font-weight: 500;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  p {
    color: #000000;
    opacity: 0.4;
    font-size: 14px;
    max-width: 456px;
    margin-bottom: 40px;
  }
`;
