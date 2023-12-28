/* eslint-disable */
import type { StoryObj } from "@storybook/react";
import Subtitle from "./Subtitle";

export default {
  component: Subtitle,
  title: "Atoms/Subtitle",
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
  },
};

type Story = StoryObj<typeof Subtitle>;

export const SubtitleBase: Story = {
  args: {
    text: "Subtitle",
    color: "#646565",
  },
};
