import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { BasicInput } from "./BasicInput";

const meta: ComponentMeta<typeof BasicInput> = {
  title: "Basic Input",
  component: BasicInput,
};

export default meta;

export const Primary: ComponentStoryObj<typeof BasicInput> = {
  args: {
    type: "password",
  },
};
