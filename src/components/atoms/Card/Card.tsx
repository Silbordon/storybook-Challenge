import React from 'react';
import styled from 'styled-components';

/**
 *Card component with 2 versions. with and without image
 * @param imageUrl - (optional)the PathUrl if you need to add an image
 * @param children - (optional) option to add any component
 */

interface CardProps {
  imageUrl?: string;
  children?: React.ReactNode;
}

const CardContainer = styled.div<{ imageUrl?: string }>`
  width: 23.375rem;
  min-height: ${({ imageUrl }) => (imageUrl ? '27.1875rem' : '12.625rem')};
  flex-shrink: 0;
  background: #fff;
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.10);
  border-radius: 8px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 50%;
`;

const Content = styled.div`
  height: 50%;
  padding: 1rem;
`;

const Card: React.FC<CardProps> = ({ imageUrl, children }) => {
  return (
    <CardContainer imageUrl={imageUrl}>
      {imageUrl && <Image src={imageUrl} alt="Card Image" />}
      <Content>{children}</Content>
    </CardContainer>
  );
};

export default Card;
