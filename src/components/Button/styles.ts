import styled from "styled-components";

export interface WrapperProps {
  background?: "primary" | "secondary";
}

const getBackgroundColor = (color: WrapperProps["background"]): string => {
  switch (color) {
    case "primary":
      return "#4339F2";
    case "secondary":
      return "#02A0FC";
    default:
      return "#4339F2";
  }
};

export const Wrapper = styled.button<WrapperProps>`
  background: ${(p) => getBackgroundColor(p.background)};
  border-radius: 10px;
  color: #ffffff;
  padding: 14px 24px;
  border: none;
  font-size: 14px;
  cursor: pointer;
  outline: none;
`;
