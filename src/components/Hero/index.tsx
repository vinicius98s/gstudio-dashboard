import React from "react";

import * as S from "./styles";

import Button from "../Button";

interface Props {
  title: string;
  description: string;
  icon: JSX.Element;
}

const Hero: React.FC<Props> = ({ icon, description, title }) => {
  return (
    <S.HeroContainer>
      {icon}
      <h1>{title}</h1>
      <p>{description}</p>
      <Button>Start for Free</Button>
    </S.HeroContainer>
  );
};

export default Hero;
