import CardMediaSimple from "./CardMediaSimple";
import type { StoryObj, Meta } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Organism/Card",
  component: CardMediaSimple,
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
} as Meta<typeof CardMediaSimple>;

const cardImg = "/assets/icons/Bitmap.svg";

//@ts-ignore
const Template: StoryObj<typeof CardMediaSimple> = (args) => (
  <CardMediaSimple {...args} />
);

//@ts-ignore
export const CardSimpleBase = Template.bind({});

//@ts-ignore
export const Cardmedia = Template.bind({});
Cardmedia.args = {
  imageUrl: cardImg,
};
