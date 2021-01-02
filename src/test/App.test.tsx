import App from "../App";
import { shallow } from "enzyme";

describe("app test", () => {
  test("successfully build", () => {
    const app = shallow(<App />);

    expect(app).toMatchSnapshot();
  });
});
