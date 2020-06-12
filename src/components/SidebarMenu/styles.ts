import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  border-radius: 0px 20px 20px 0px;
  width: 96px;
  height: 100vh;
  display: flex;
  padding: 40px 13px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-right: 40px;

  > img {
    width: 36px;
  }

  > div {
    justify-content: space-around;
    flex-direction: column;
    display: flex;
    height: 100%;
  }

  button::first-child {
    margin-top: 0;
  }

  button:last-child {
    margin-top: auto;
    margin-bottom: 0;
  }
`;

export const Divider = styled.span`
  width: 100%;
  height: 1px;
  background-color: #000000;
  opacity: 0.2;
  margin-top: 30px;
  margin-bottom: 37px;
`;

export const MenuButton = styled.button<{ isActive: boolean }>`
  border: none;
  background: none;
  cursor: pointer;
  opacity: ${(p) => (p.isActive ? 1 : 0.2)};
  margin: 2.3vh 0;
  outline: none;
`;
