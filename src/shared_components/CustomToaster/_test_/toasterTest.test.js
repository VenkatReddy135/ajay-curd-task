import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import CustomToaster from "../index";
import { cleanup } from "@testing-library/react";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";
Enzyme.configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
  wrapper = shallow(<CustomToaster />);
});
const props = {
  showToast: false,
};
describe("Toaster Component Testing", () => {
  it("renders component", () => {
    const tree = renderer.create(<CustomToaster {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CustomToaster {...props} />, div);
  });
  it("should have Toast", () => {
    console.log(wrapper);
    expect(wrapper.find("Toast")).toHaveLength(1);
  });

  afterEach(() => {
    cleanup();
  });
});
