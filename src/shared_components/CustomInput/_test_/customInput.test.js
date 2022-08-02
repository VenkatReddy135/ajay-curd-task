import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import CustomInput from "../index";
import { cleanup } from "@testing-library/react";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";
Enzyme.configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
  wrapper = shallow(<CustomInput />);
});
const props = {
  inputType: "",
  placeHolderText: "",
};
describe("Custom Input Component Testing", () => {
  it("renders component", () => {
    const tree = renderer.create(<CustomInput {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CustomInput {...props} />, div);
  });
  it("should have input element", () => {
    console.log(wrapper);
    expect(wrapper.find("input")).toHaveLength(1);
  });

  afterEach(() => {
    cleanup();
  });
});
