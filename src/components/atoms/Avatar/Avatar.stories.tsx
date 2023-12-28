import { StoryObj } from '@storybook/react';
import Avatar  from './Avatar';

const OvalImage = '/assets/icons/Oval.svg'

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  tags: ["autodocs"],
} 


type Story = StoryObj<typeof Avatar>;

export const SubtitleBase: Story = {
    args: {
        imagePath : OvalImage
    },
  };
