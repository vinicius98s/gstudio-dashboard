import React from "react";
import * as S from "./styles";

interface Props {
  logo: JSX.Element;
  items: Array<{
    id: string;
    icon: JSX.Element;
    onPress?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    isActive: boolean;
  }>;
}

const SideBarMenu: React.FC<Props> = ({ logo, items }) => {
  return (
    <S.Container>
      {logo}
      <S.Divider />
      <div>
        {items.map(({ icon, onPress, isActive, id }) => (
          <S.MenuButton
            data-testid={`sidebar-menu-${id}`}
            key={id}
            isActive={isActive}
            onClick={onPress}
          >
            {icon}
          </S.MenuButton>
        ))}
      </div>
    </S.Container>
  );
};

export default SideBarMenu;
