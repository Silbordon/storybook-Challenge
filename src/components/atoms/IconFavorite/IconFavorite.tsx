import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";

/**
 * Icon component with toggle options.
 * @param isFilled - boolean that switches between favorite and non-favorite
 */

interface IconProps {
  isFilled?: boolean;
}

const expand = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const IconImage = styled.img<{ isExpanded: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  ${({ isExpanded }) =>
    isExpanded &&
    css`
      animation: ${css`
          ${expand}`} 0.6s ease-in-out;
    `}
`;

const emptyHeart = "/assets/icons/NoFavorite.svg";
const filledHeart = "/assets/icons/Favorite.svg";

const IconFavorite: React.FC<IconProps> = ({ isFilled }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [filled, setFilled] = useState(isFilled);

  const handleClick = () => {
    const newFilledState = !filled;
    setFilled(newFilledState);
    setIsExpanded(true);
    setTimeout(() => {
      setIsExpanded(false);
    }, 600);
  };

  return (
    <IconImage
      src={filled ? filledHeart : emptyHeart}
      alt="Heart Icon"
      onClick={handleClick}
      isExpanded={isExpanded}
    />
  );
};

export default IconFavorite;
