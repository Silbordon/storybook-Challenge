import type { StoryObj, Meta } from "@storybook/react";
import LinkButton from "./LinkButton";
import { MemoryRouter } from "react-router-dom";

export default {
    title: "Atoms/LinkButton",
    component: LinkButton,
    tags: ["autodocs"],
    decorators: [
        (Story) => (
            <MemoryRouter initialEntries={['/']}>
              <Story />
            </MemoryRouter>
          ),
    ],
    argTypes: {
        color: { control: "color" },
    },
} as Meta <typeof LinkButton>


//@ts-ignore
const Template: StoryObj<typeof LinkButton> = (args) => <LinkButton {...args} />;

//@ts-ignore
export const LinkBase = Template.bind({});
LinkBase.args= {
    to: "*" ,
    text: "LINK 1"
}



