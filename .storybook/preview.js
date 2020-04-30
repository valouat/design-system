import React from "react";
import { addDecorator } from "@storybook/react";
import { GlobalStyle } from "../src/shared/global";

addDecorator(withA11y);
addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));
