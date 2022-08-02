import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import CustomButton from "../index";
import { cleanup } from "@testing-library/react";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";
Enzyme.configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
  wrapper = shallow(<CustomButton />);
});
const props = {
  buttonClass: "",
  handleClick: () => {},
  buttonValue: "",
};
describe("Button Component Testing", () => {
  it("renders component", () => {
    const tree = renderer.create(<CustomButton {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CustomButton {...props} />, div);
  });
  it("should have button", () => {
    console.log(wrapper);
    expect(wrapper.find("button")).toHaveLength(1);
  });

  afterEach(() => {
    cleanup();
  });
});
