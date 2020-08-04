import { useContext } from 'react';

import { ModalContext, IModalContext } from '../contexts/ModalContext';

export const useModal = (): IModalContext => {
  const {
    content,
    setContent,
    isActive,
    setActive,
    showModal,
    closeModal,
  } = useContext(ModalContext);

  return {
    content,
    setContent,
    isActive,
    setActive,
    showModal,
    closeModal,
  };
};
