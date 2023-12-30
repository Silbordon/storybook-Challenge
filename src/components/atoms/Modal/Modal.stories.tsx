import Modal from "./Modal";

export default {
  title: 'Atoms/Modal',
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    onClose: { action: 'onClose' }, 
  },
}

export const ModalContainer = {
    args:{
        isOpen: true,
    }
};