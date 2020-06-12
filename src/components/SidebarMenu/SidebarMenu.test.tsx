import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";

import SidebarMenu from "./index";

const onPress = jest.fn();
const id = "test";

afterEach(cleanup);

it("calls an 'onPress' prop on menu item click", () => {
  const { getByTestId } = render(
    <SidebarMenu
      logo={<img alt="" />}
      items={[{ id, icon: <img alt="" />, onPress, isActive: false }]}
    />
  );

  fireEvent.click(getByTestId(`sidebar-menu-${id}`));
  expect(onPress).toHaveBeenCalledTimes(1);
});
