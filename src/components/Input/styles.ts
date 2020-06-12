import styled from "styled-components";

export const Input = styled.input`
  background: none;
  border: none;
  font-size: 14px;
  color: #000000;
  padding: 10px;
  outline: none;

  ::placeholder {
    opacity: 0.4;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;
