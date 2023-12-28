import styled from "styled-components";
import IconFavorite from "../../atoms/IconFavorite/IconFavorite";
import LinkButton from "../../atoms/LinkButton/LinkButton";

/**
 *Footer Card component with two Links Button and IconFavorite
 */

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LinkContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FooterCard = () => {
  return (
    <FooterContainer>
      <LinkContainer>
        <LinkButton to={"*"} text={"ACTION 1"} />
        <LinkButton to={"*"} text={"ACTION 2"} />
      </LinkContainer>
      <IconFavorite isFilled={true} />
    </FooterContainer>
  );
};

export default FooterCard;
