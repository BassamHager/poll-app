import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Section from "..";

describe("section component", () => {
  // constant elements
  const getSection = () => document.querySelector(".sectionWrapper");

  beforeEach(() => {
    render(<Section header={"header"} body={"body"} footer={"footer"} />);
  });
  it("should be rendered", () => {
    expect.assertions(1);
    expect(getSection()).toBeInTheDocument();
  });
  it("should render a section tag", () => {
    expect.assertions(1);
    expect(getSection()?.tagName).toBe("SECTION");
  });
  it("should should have content", () => {
    expect.assertions(2);
    expect(getSection()?.textContent).not.toBe("" || undefined);
    expect(getSection()?.textContent?.startsWith("header")).toBe(true);
    screen.debug();
  });

  afterAll(() => {
    cleanup();
    expect(getSection()).toBeUndefined;
  });
});
