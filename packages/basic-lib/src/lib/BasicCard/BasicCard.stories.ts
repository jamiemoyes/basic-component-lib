import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { BasicCard } from "./BasicCard";

const meta: ComponentMeta<typeof BasicCard> = {
  title: "Basic Card",
  component: BasicCard,
};

const imgPath =
  "https://images.unsplash.com/photo-1652932374553-3ee7a4343a2a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470";

export default meta;

export const Primary: ComponentStoryObj<typeof BasicCard> = {
  args: {
    image: imgPath,
    title: "Welcome",
    subtitle: "This is my component library",
    description: "Lorem Ipsum blah blah blah blah",
    showIcon: true,
  },
};
