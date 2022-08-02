import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import CustomList from "../index";
import { cleanup } from "@testing-library/react";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";
Enzyme.configure({ adapter: new Adapter() });

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));
let wrapper;

beforeEach(() => {
  wrapper = shallow(<CustomList />);
});
const props = {
  modalData: "",
};
describe("Custom List Component Testing", () => {
  it("renders component", () => {
    const tree = renderer.create(<CustomList {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CustomList {...props} />, div);
  });
  it("should have button", () => {
    console.log(wrapper);
    expect(wrapper.find("table")).toHaveLength(1);
  });

  afterEach(() => {
    cleanup();
  });
});
