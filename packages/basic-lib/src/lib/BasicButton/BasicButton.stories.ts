import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { BasicButton } from "./BasicButton";

const meta: ComponentMeta<typeof BasicButton> = {
  title: "Basic Button",
  component: BasicButton,
};

export default meta;

export const Primary: ComponentStoryObj<typeof BasicButton> = {
  args: {
    text: "Hello",
    secondary: false,
    onClick: () => alert("hello"),
  },
};
