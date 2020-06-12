import React from "react";

import * as S from "./styles";

interface Props {
  onPress?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  background?: S.WrapperProps["background"];
}

const Button: React.FC<Props> = ({ onPress, background, children }) => {
  return (
    <S.Wrapper background={background} onClick={onPress}>
      {children}
    </S.Wrapper>
  );
};

export default Button;
