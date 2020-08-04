import React, { createRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import { ModalContext, IModalContext, ModalContent } from '../../contexts/ModalContext';
import { useModal } from '../../hooks/Modals';

import styles from './styles/Modal.scss';

export interface IModal {
  children: React.ReactNode;
  allowClose?: boolean;
}

export const Modal = ({
  children,
  allowClose = true,
}: IModal): React.ReactElement => {
  const { closeModal } = useModal();
  const modalElement = createRef<HTMLDivElement>();

  // const handleOutsideClick = ({ target }: React.SyntheticEvent) => {
  //   const el: Node = modalElement.current as Node;
  //   if (el && !el.contains(target as Node)) {
  //     closeModal();
  //   }
  // };

  return (
    <div className={styles.container}>
      <div className={styles.inner} ref={modalElement}>
        {allowClose && (
          <button
            type="button"
            className={styles['close-btn']}
            onClick={closeModal}
          >
            close
          </button>
        )}
        {children}
      </div>
    </div>
  );
};

export const ModalRoot = (): React.ReactPortal => createPortal(
  <ModalContext.Consumer>
    {({ content, isActive, setContent = () => {} }) => (
      <>
        <CSSTransition
          in={isActive}
          classNames={{
            enter: styles.enter,
            enterActive: styles['enter-active'],
            enterDone: styles['enter-done'],
            exit: styles.exit,
            exitActive: styles['exit-active'],
            exitDone: styles['exit-done'],
          }}
          timeout={1000}
          onExited={() => setContent(null)}
        >
          {content || <div />}
        </CSSTransition>
      </>
    )}
  </ModalContext.Consumer>,
  document.querySelector('#modal') as Element
);

interface IModalProvider {
  children?: React.ReactNode
}

export const ModalProvider = ({ children }: IModalProvider): React.ReactElement => {
  const [content, setContent] = useState<ModalContent>(null);
  const [isActive, setActive] = useState<boolean>(false);
  const closeModal = () => {
    setActive(false);
  };
  const showModal = (newContent: React.ReactNode) => {
    setContent((<Modal>{newContent}</Modal>));
    setActive(true);
  };

  const providerValue: IModalContext = {
    content,
    setContent,
    isActive,
    setActive,
    showModal,
    closeModal,
  };
  return (
    <ModalContext.Provider value={providerValue}>
      <>
        {children}
        <ModalRoot />
      </>
    </ModalContext.Provider>
  );
};
