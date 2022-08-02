import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import CustomForm from "../index";
import { cleanup } from "@testing-library/react";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";
Enzyme.configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
  wrapper = shallow(<CustomForm />);
});
const props = {
  formData: {},
  buttonAction: () => {},
};
describe("Custom Component Testing", () => {
  it("renders component", () => {
    const tree = renderer.create(<CustomForm {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CustomForm {...props} />, div);
  });
  it("should have CustomForm class name", () => {
    console.log(wrapper);
    expect(wrapper.find(".CustomForm")).toHaveLength(1);
  });

  afterEach(() => {
    cleanup();
  });
});
