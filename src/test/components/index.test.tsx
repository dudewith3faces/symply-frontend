import { shallow } from "enzyme";
import Component from "../../components";

describe("component test", () => {
  test("successfully build", () => {
    const wrapper = shallow(<Component />);

    expect(wrapper).toMatchSnapshot();
  });
});
