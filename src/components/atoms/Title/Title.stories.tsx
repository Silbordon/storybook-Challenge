/* eslint-disable */
import type { StoryObj } from '@storybook/react';
import  Title  from './Title';

export default {
  component: Title,
  title: "Atoms/Title",
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
  },
};
  

type Story = StoryObj<typeof Title>;


export const TitleBase : Story = {
  args:{
    text: "Headline 5",
    color: "#646565"
  }
}

