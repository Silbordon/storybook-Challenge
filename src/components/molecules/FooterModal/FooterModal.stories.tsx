import FooterModal from "./FooterModal";
import type { StoryObj, Meta } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Molecules/FooterModal",
  component: FooterModal,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta<typeof FooterModal>;

export const FooterModalBase = {};
// //@ts-ignore
// const Template: StoryObj<typeof FooterModal> = (args) => (
//   <FooterModal {...args} />
// );

// //@ts-ignore
// export const FooterModalBase = Template.bind({});
