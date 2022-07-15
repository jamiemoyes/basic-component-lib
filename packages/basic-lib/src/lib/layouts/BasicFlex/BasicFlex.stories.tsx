import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { DummyBox } from "../_DummyBox";
import { BasicFlex } from "./BasicFlex";

const meta: ComponentMeta<typeof BasicFlex> = {
  title: "Flex",
  component: BasicFlex,
};

export default meta;

export const Primary: ComponentStoryObj<typeof BasicFlex> = {
  args: {
    children: [<DummyBox number={1} />, <DummyBox number={2} />],
    flexDirection: "column-reverse",
    alignContent: "center",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
};
