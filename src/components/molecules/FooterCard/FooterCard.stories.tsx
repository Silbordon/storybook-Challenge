import FooterCard from "./FooterCard";
import type { StoryObj, Meta } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Molecules/FooterCard",
  component: FooterCard,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {
    color: { control: "color" },
  },
} as Meta<typeof FooterCard>;

//@ts-ignore
const Template: StoryObj<typeof LinkButton> = (args) => (
  <FooterCard {...args} />
);

//@ts-ignore
export const FooterCardBase = Template.bind({});
