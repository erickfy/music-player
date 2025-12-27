import { render } from "@testing-library/react-native";
import React from "react";
import ModalScreen from "../app/modal";

// Mock the expo-router Link component
jest.mock("expo-router", () => ({
  Link: ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <>{children}</>;
  },
}));

describe("ModalScreen", () => {
  it("renders correctly", () => {
    const { getByText } = render(<ModalScreen />);

    expect(getByText("This is a modal")).toBeTruthy();
    expect(getByText("Go to home screen")).toBeTruthy();
  });
});
