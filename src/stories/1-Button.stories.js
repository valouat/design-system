import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";
import { Avatar } from "../Avatar";

export default {
  title: "Button",
  component: Button,
};

export const Text = () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
);

export const Emoji = () => (
  <>
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
    <Avatar username="Valentine Dort" />
  </>
);
