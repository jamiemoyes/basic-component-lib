import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { DummyBox } from "../_DummyBox";
import { RAM } from "./RAM";

const meta: ComponentMeta<typeof RAM> = {
  title: "RAM",
  component: RAM,
};

export default meta;

export const Primary: ComponentStoryObj<typeof RAM> = {
  args: {
    children: [
      <DummyBox number={1} />,
      <DummyBox number={2} />,
      <DummyBox number={3} />,
    ],
    minWidth: "150px",
  },
};
