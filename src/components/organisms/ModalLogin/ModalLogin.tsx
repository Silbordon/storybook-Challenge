import Modal from "../../atoms/Modal/Modal";
import Title from "../../atoms/Title/Title";
import FooterModal from "../../molecules/FooterModal/FooterModal";
import MainModal from "../../molecules/MainModal/MainModal";
import styled from "styled-components";

/**
 *Modal login component with modal component, Title with text and Footer modal Component.
 */

type ModalLoginProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const FooterContainerModal = styled.div`
  display: flex;
  align-self: flex-end;
`;


const ModalLogin: React.FC<ModalLoginProps> = ({ isOpen, setIsOpen }) => {
  
    console.log(isOpen, "modalLogin");
    
    const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <Title text="Welcome Back" />
      <MainModal />
      <FooterContainerModal >
      <FooterModal />
      </FooterContainerModal>
     
    </Modal>
  );
};

export default ModalLogin;
