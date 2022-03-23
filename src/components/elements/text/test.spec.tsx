import React from "react";
import { render } from "@testing-library/react";
import { Text } from ".";

describe("Text component", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Text>Hello text</Text>);

    expect(getByText("Hello text")).toBeInTheDocument();
  });
});
