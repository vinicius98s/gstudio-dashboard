import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";

import Input from "./index";

afterEach(cleanup);

const onChange = jest.fn();
const placeholder = "test";

it("<Input /> is rendered correctly", () => {
  const { getByPlaceholderText } = render(<Input placeholder={placeholder} />);

  expect(getByPlaceholderText(placeholder)).toBeInTheDocument();
});

it("calls the onChange on text change", () => {
  const { getByPlaceholderText } = render(
    <Input placeholder={placeholder} onChange={onChange} />
  );

  fireEvent.change(getByPlaceholderText(placeholder), {
    target: { value: "testing input" },
  });
  expect(onChange).toHaveBeenCalled();
});
