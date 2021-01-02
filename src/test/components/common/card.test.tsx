import { shallow } from "enzyme";
import { Card } from "../../../components/common";
import { ICardProps } from "../../../components/interface";
const prop: ICardProps = {
  id: "1234",
  onClick: () => console.log("clicked"),
  title: "lorem ipsum",
};

describe("card test", () => {
  test("successfully build", () => {
    const wrapper = shallow(<Card {...prop} />);
    expect(wrapper).toMatchSnapshot();
  });
  test("check for paragraph", () => {
    const wrapper = shallow(<Card {...prop} />);
    expect(wrapper.find("p").text()).toStrictEqual(prop.title);
  });
  test("check for classname", () => {
    const wrapper = shallow(<Card {...prop} />);
    expect(wrapper.find("button").hasClass("btn btn-primary")).toBeTruthy();
  });
  test("check for classname for true", () => {
    const wrapper = shallow(<Card {...prop} fav={true} />);
    expect(wrapper.find("button").hasClass("btn btn-danger")).toBeTruthy();
  });
});
