import React, { FC } from "react";
import styled from "styled-components";

/**
 * Modal Component
 * @param isOpen - boolean with
 * @param onClose - funtion for modal close
 * @param children - (optional) option to add any component
 */

type ModalProps = {
  isOpen: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
};

const ModalContainer = styled.div<ModalProps>`
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 23.4375rem;
  height: 23.875rem;
  flex-shrink: 0;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  box-shadow: 0px 0px 25px 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
`;

const CloseIcon = styled.img`
  width: 1rem;
  height: 1rem;
`;

const closeIcon = "/assets/icons/Vector.svg";

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
    console.log(isOpen, "modal");
    
  return (
    <ModalContainer isOpen={isOpen}>
      <CloseButton onClick={onClose}>
        <CloseIcon src={closeIcon} alt="Close" />
      </CloseButton>
      {children}
    </ModalContainer>
  );
};

export default Modal;
