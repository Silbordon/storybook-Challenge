import IconFavorite from "./IconFavorite";

export default {
  title: 'Atoms/Icon',
  component: IconFavorite,
  tags: ["autodocs"],
}

export const EmptyHeart = {
  args: {
    isFilled: false,
  },
};


export const FullHeart= {
  args: {
    isFilled: true,
  },
};