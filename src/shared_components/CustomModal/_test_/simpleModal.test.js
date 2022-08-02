import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import CustomModal from "../index";
import { cleanup } from "@testing-library/react";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";
Enzyme.configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
  wrapper = shallow(<CustomModal />);
});
const props = {
  showModal: false,
};
describe("Modal Component Testing", () => {
  it("renders component", () => {
    const tree = renderer.create(<CustomModal {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CustomModal {...props} />, div);
  });
  it("should have Modal", () => {
    console.log(wrapper);
    expect(wrapper.find("Modal")).toHaveLength(1);
  });

  afterEach(() => {
    cleanup();
  });
});
