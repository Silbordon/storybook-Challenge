import Button from "./Button";

export default {
  title: 'Atoms/Button',
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: 'clicked' },
  },
}


export const Buttonbase = {
    args:{
        text:"LOG IN",
    }
};
