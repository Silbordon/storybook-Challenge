import Card from "../../atoms/Card/Card";
import Subtitle from "../../atoms/Subtitle/Subtitle";
import FooterCard from "../../molecules/FooterCard/FooterCard";
import HeaderCard from "../../molecules/HeaderCard/HeaderCard";
import styled from "styled-components";

/**
 *Card Media Simple component with two headerCard component, Subtitle with text and Footer card Component.
 */

interface CardProps {
  imageUrl?: string;
}

const CardMediaContainer = styled.div`
  padding: 0 0.2rem;
`;

const CardMediaSimple: React.FC<CardProps> = ({ imageUrl }) => {
  return (
    <Card imageUrl={imageUrl}>
      <HeaderCard />
      <CardMediaContainer>
        <Subtitle text="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor" />
      </CardMediaContainer>
      <FooterCard />
    </Card>
  );
};

export default CardMediaSimple;
