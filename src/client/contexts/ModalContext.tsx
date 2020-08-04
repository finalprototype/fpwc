import {
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react';

const invariant = () => {
  throw new Error('Modal outside of provider');
};

export type ModalContent = ReactNode|null;

export interface IModalContext {
  content: ModalContent;
  setContent: Dispatch<SetStateAction<ModalContent>>;
  isActive: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  showModal: (c: ReactNode) => void,
  closeModal: () => void,
}

export const ModalContext = createContext<IModalContext>({
  content: null,
  setContent: invariant,
  isActive: false,
  setActive: invariant,
  showModal: invariant,
  closeModal: invariant,
});
