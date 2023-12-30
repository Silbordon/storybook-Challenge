// import ModalLogin from "./ModalLogin";
// import type { Meta } from "@storybook/react";
// import { MemoryRouter } from "react-router-dom";

// export default {
//   title: "Organism/Modal",
//   component: ModalLogin,
//   tags: ["autodocs"],
//   argTypes: {
//     setIsOpen: { action: "onClose" },
//   },
//   decorators: [
//     (Story) => (
//       <MemoryRouter initialEntries={["/"]}>
//         <Story />
//       </MemoryRouter>
//     ),
//   ],
 
// } as Meta<typeof ModalLogin>;


// // //@ts-ignore
// // const Template: StoryObj<typeof ModalLogin> = (args) => (
// //   <ModalLogin {...args} />
// // );

// //@ts-ignore
// export const ModalLoginBase = {
//   args: {
//     isOpen: true,
//   },
// };


import React, { useState } from "react";
import ModalLogin from "./ModalLogin";
import type { Meta } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Organism/Modal",
  component: ModalLogin,
  tags: ["autodocs"],
  argTypes: {
    setIsOpen: { action: "onClose" },
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta;

export const ModalLoginBase = {
 args:{
     isOpen: true
 }


};
