import { shallow } from "enzyme";
import React from "react";

import App from "../pages/index";

describe("With Enzyme", () => {
  it('App shows "Welcome to Shopeezy" in a <p> tag', () => {
    const app = shallow(<App />);
    expect(app.find("p").text()).toEqual("Welcome to Shopeezy!");
  });
  it("Page has profile link", () => {
    const app = shallow(<App />);
    expect(app.find("a").text()).toEqual("Profile");
  });
});
