import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";

import Button from "./index";

const onPress = jest.fn();

afterEach(cleanup);

it("<Button /> is rendered correctly", () => {
  const { getByText } = render(<Button>Test</Button>);

  expect(getByText(/Test/g)).toBeInTheDocument();
});

it("calls an 'onPress' prop on button click", () => {
  const { getByText } = render(<Button onPress={onPress}>Test</Button>);

  fireEvent.click(getByText(/Test/g));
  expect(onPress).toHaveBeenCalledTimes(1);
});
