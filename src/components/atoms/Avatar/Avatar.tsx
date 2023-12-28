import React from 'react';
import styled from 'styled-components';

/**
 * Avatar component with a dinamic image.
 * @param imagePath - the url path
 */


type AvatarProps = {
  imagePath: string;
}

const AvatarContainer = styled.div<AvatarProps>`
  border-radius: 2.5rem;
  width: 2.5rem;
  height: 2.5rem;
  flex-shrink: 0;
  background: ${({imagePath}) => `url(${imagePath}), lightgray 50% / cover no-repeat`};
`;

const Avatar: React.FC<AvatarProps> = ({ imagePath }) => {
  return <AvatarContainer imagePath={imagePath} />;
};

export default Avatar;

