import { render } from "@testing-library/react";
import Header from "./Header";
import { Data } from "../Data";

test("renders learn react link", () => {
  const { getByText } = render(<Header resumeData={Data} buttons={[]} />);
  const linkElement = getByText(
    /I am a Physicist currently working as a Software Developer/i
  );
  expect(linkElement).toBeInTheDocument();
});
