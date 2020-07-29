import React from "react";
import { shallow } from "enzyme";

import Loader from "../Loader";

describe("Loader", () => {
  it("renders default props", () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper).toMatchSnapshot();
  });
});
