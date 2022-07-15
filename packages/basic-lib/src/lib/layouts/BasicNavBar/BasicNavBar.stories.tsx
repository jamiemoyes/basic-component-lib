import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { BasicNavBar } from "./BasicNavBar";

const meta: ComponentMeta<typeof BasicNavBar> = {
  title: "Nav Bar",
  component: BasicNavBar,
};

export default meta;

export const Primary: ComponentStoryObj<typeof BasicNavBar> = {
  args: {
    title: "My Website",
    align: "end",
    links: [
      {
        text: "Link 1",
        link: "https://www.google.com",
      },
      {
        text: "Link 2",
        link: "https://www.google.com",
        nestedLinks: [
          {
            text: "Nested link 1",
            link: "https://www.google.com",
          },
          {
            text: "Nested link 2",
            link: "https://www.google.com",
          },
        ],
      },
    ],
    newTab: true,
  },
};
