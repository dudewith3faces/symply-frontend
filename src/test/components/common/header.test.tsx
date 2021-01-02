import { shallow } from "enzyme";
import { Header } from "../../../components/common";

describe("card test", () => {
  test("successfully build", () => {
    const wrapper = shallow(<Header />);

    expect(wrapper).toMatchSnapshot();
  });

  test("home link build", () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find(".text-primary").text()).toContain("Home");
  });

  test("saved link build", () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find(".text-danger").text()).toContain("Saved");
  });
});
