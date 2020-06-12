import React from "react";

import * as S from "./styles";

interface Props {
  placeholder?: string;
  icon?: JSX.Element;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({ placeholder, icon, value, onChange }) => {
  return (
    <S.Wrapper>
      {!!icon && <S.IconWrapper>{icon}</S.IconWrapper>}
      <S.Input placeholder={placeholder} value={value} onChange={onChange} />
    </S.Wrapper>
  );
};

export default Input;
