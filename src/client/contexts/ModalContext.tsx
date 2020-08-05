import {
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react';

export interface IModalProvider {
  children?: React.ReactNode
}

export interface IModal {
  children: React.ReactNode;
  disableClose?: boolean;
}

export type ModalContent = ReactNode|null;

export interface IModalContext {
  content: ModalContent;
  setContent: Dispatch<SetStateAction<ModalContent>>;
  isActive: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  showModal: (c: ReactNode, p?: Partial<IModal>) => void,
  closeModal: () => void,
}

const invariant = () => {
  throw new Error('Modal outside of provider');
};

export const ModalContext = createContext<IModalContext>({
  content: null,
  setContent: invariant,
  isActive: false,
  setActive: invariant,
  showModal: invariant,
  closeModal: invariant,
});
