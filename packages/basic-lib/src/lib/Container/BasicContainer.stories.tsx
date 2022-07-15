import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { BasicContainer } from "./BasicContainer";
import { BasicButton } from "../BasicButton";
import { BasicInput } from "../BasicInput/BasicInput";

const meta: ComponentMeta<typeof BasicContainer> = {
  title: "Basic Container",
  component: BasicContainer,
};

export default meta;

export const Primary: ComponentStoryObj<typeof BasicContainer> = {
  args: {
    children: [<BasicInput type="text" />, <BasicInput type="submit" />],
  },
};
