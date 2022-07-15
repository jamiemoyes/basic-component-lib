import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { BasicButton } from "../../BasicButton";
import { BasicInput } from "../../BasicInput/BasicInput";
import { BasicGrid } from "./BasicGrid";

const meta: ComponentMeta<typeof BasicGrid> = {
  title: "Basic Grid",
  component: BasicGrid,
};

export default meta;

export const Primary: ComponentStoryObj<typeof BasicGrid> = {
  args: {
    numberOfColumns: 2,
    gap: "2rem",
    children: [
      <BasicInput placeholder="Type here" />,
      <BasicInput type="submit" />,
    ],
  },
};
