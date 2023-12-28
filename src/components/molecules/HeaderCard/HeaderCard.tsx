import styled from "styled-components";
import Subtitle from "../../atoms/Subtitle/Subtitle";
import Avatar from "../../atoms/Avatar/Avatar";
import Title from "../../atoms/Title/Title";

/**
 *Header Card component with Title component, Subtitle component and Avatar component.
 */

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TitleContainer = styled.div`
  margin-left: 0.8rem;
`;

const HeaderCard = () => {
  const OvalImage = "/assets/icons/Oval.svg";

  return (
    <HeaderContainer>
      <Avatar imagePath={OvalImage} />
      <TitleContainer>
        <Title text="Headline 5" />
        <Subtitle text="Subtitle" />
      </TitleContainer>
    </HeaderContainer>
  );
};

export default HeaderCard;
