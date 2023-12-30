import Button from "../../atoms/Button/Button";
import LinkButton from "../../atoms/LinkButton/LinkButton";
import styled from "styled-components";

/**
 *Footer Modal component with two Button compontents. the LinkButton component and Button component.
 */

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Space = styled.div`
    margin-left: 2rem;
`

const FooterModal = () => {
  return (
    <FooterContainer>
      <LinkButton to={"*"} text={"SIGN UP"} />
      <Space>
        <Button text={"LOG IN"} onClick={() => console.log("click")} />
      </Space>
    </FooterContainer>
  );
};

export default FooterModal;
