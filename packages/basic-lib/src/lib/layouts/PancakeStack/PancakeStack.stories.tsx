import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { DummyBox } from "../_DummyBox";
import { PancakeStack } from "./PancakeStack";

const meta: ComponentMeta<typeof PancakeStack> = {
  title: "Pancake Stack",
  component: PancakeStack,
};

export default meta;

export const Primary: ComponentStoryObj<typeof PancakeStack> = {
  args: {
    children: [
      <DummyBox number={1} />,
      <DummyBox number={2} />,
      <DummyBox number={3} />,
    ],
  },
};
