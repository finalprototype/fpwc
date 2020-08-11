import React, { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import {
  ModalContext,
  IModalContext,
  ModalContent,
  IModal,
  IModalProvider,
} from '../../contexts/ModalContext';
import { useModal } from '../../hooks/Modals';
import CloseButton from './CloseButton';

import styles from './__styles__/Modal.scss';

export const ModalProvider = ({ children }: IModalProvider): React.ReactElement => {
  const [content, setContent] = useState<ModalContent>(null);
  const [isActive, setActive] = useState<boolean>(false);
  const closeModal = () => {
    setActive(false);
  };
  const showModal = (newContent: React.ReactNode, modalProps: Partial<IModal> = {}) => {
    if (!newContent || newContent === null) {
      throw new TypeError('Modal content can not be null');
    }
    setContent((
      <Modal {...modalProps}>
        {newContent}
      </Modal>
    ));
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
      {children}
    </ModalContext.Provider>
  );
};

ModalProvider.displayName = 'ModalProvider';

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
          timeout={400}
          onExited={() => setContent(null)}
        >
          {content || <div />}
        </CSSTransition>
      </>
    )}
  </ModalContext.Consumer>,
  document.querySelector('#modal') as Element
);

ModalRoot.displayName = 'ModalRoot';

export const Modal = ({
  children,
  disableClose = false,
}: IModal): React.ReactElement => {
  const { closeModal } = useModal();
  const modalElement = useRef<HTMLDivElement|null>(null);

  const handleOutsideClick = ({ target }: React.SyntheticEvent) => {
    const el: Node = modalElement.current as Node;
    if (el && !el.contains(target as Node)) {
      closeModal();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className={styles.container}
      onClick={!disableClose ? handleOutsideClick : undefined}
      onKeyDown={undefined}
    >
      <div className={styles.inner} ref={modalElement}>
        {!disableClose && (
          <CloseButton
            className={styles['close-btn']}
            onClick={closeModal}
          />
        )}
        {children}
      </div>
    </div>
  );
};

Modal.displayName = 'Modal';

export default Modal;
