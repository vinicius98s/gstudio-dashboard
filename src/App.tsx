import React from "react";

import * as S from "./styles";

import SideBarMenu from "./components/SidebarMenu";
import { items } from "./components/SidebarMenu/constants";

import Input from "./components/Input";

import Hero from "./components/Hero";

import Search from "./assets/icons/Search.svg";
import logo from "./assets/images/Logo.png";
import Illustration from "./assets/images/Illustration.png";

function App() {
  return (
    <S.Container>
      <SideBarMenu items={items} logo={<img src={logo} alt="" />} />
      <div>
        <Input placeholder="Search" icon={<img src={Search} alt="" />} />
        <Hero
          icon={<img src={Illustration} alt="" />}
          title="Every large design company whether it’s a multi-national branding"
          description="Every large design company whether it’s a multi-national branding corporation or a regular down at heel tatty magazine publisher needs to fill holes in the workforce."
        />
      </div>
    </S.Container>
  );
}

export default App;
