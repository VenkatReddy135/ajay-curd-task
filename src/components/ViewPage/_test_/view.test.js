/* eslint-disable testing-library/no-node-access */
import React from "react";
import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import ViewPage from "../index";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";
Enzyme.configure({ adapter: new Adapter() });

jest.mock("react-router-dom", () => ({
  useParams: () => {
    return {
      match: {
        id: "1",
      },
    };
  },
  useNavigate: jest.fn(),
}));

afterEach(cleanup);

describe("View Component Testing", () => {
  const renderedData = renderer.create(<ViewPage />).toJSON();

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ViewPage />, div);
  });

  it("renders a snapshot", () => {
    expect(renderedData).toMatchSnapshot();
  });
});
