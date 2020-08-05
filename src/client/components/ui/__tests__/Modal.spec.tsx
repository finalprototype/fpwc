import React from 'react';
import { act } from 'react-dom/test-utils';
import {
  shallow,
  mount,
  ReactWrapper,
} from 'enzyme';

import {
  ModalContext,
  IModalContext,
  IModal,
} from '../../../contexts/ModalContext';

import {
  Modal,
  ModalRoot,
  ModalProvider,
} from '../Modal';

describe('Modal', () => {
  const initialContext = {
    content: null,
    setContent: jest.fn(),
    isActive: false,
    setActive: jest.fn(),
    showModal: jest.fn(),
    closeModal: jest.fn(),
  };

  const modalRoot = global.document.createElement('div');
  modalRoot.setAttribute('id', 'modal');
  global.document.body.appendChild(modalRoot);

  const dummyChild = (<div>test</div>);
  const setProviderWrapper = (children = dummyChild) => (
    <ModalProvider>
      {children}
    </ModalProvider>
  );

  beforeEach(() => {
    initialContext.setContent.mockReset();
    initialContext.setActive.mockReset();
    initialContext.showModal.mockReset();
    initialContext.closeModal.mockReset();
  });

  describe('ModalProvider', () => {
    it('renders ModalContext Provider with children', () => {
      const wrapper = shallow(setProviderWrapper());
      expect(wrapper).toMatchSnapshot();
    });

    describe('Provider:values', () => {
      let activeContext: IModalContext;
      let wrapper: ReactWrapper;

      beforeEach(() => {
        wrapper = mount(setProviderWrapper(
          <ModalContext.Consumer>
            {(cxt) => {
              activeContext = cxt;
              return dummyChild;
            }}
          </ModalContext.Consumer>
        ));
      });

      afterEach(() => {
        wrapper.unmount();
      });

      describe('Provider:values:setContent', () => {
        it('sets content with valid ReactNode value', () => {
          act(() => {
            activeContext.setContent(dummyChild);
          });
          expect(activeContext.content).toEqual(dummyChild);

          act(() => {
            activeContext.setContent(null);
          });
          expect(activeContext.content).toEqual(null);
        });
      });

      describe('Provider:values:setActive', () => {
        it('sets isActive boolean', () => {
          act(() => {
            activeContext.setActive(true);
          });
          expect(activeContext.isActive).toEqual(true);

          act(() => {
            activeContext.setActive(false);
          });
          expect(activeContext.isActive).toEqual(false);
        });
      });

      describe('Provider:values:showModal', () => {
        it('sets content active, wrapped in Modal', () => {
          act(() => {
            activeContext.showModal((
              <p>testing showModal</p>
            ));
          });
          expect(activeContext.isActive).toEqual(true);
          expect(activeContext.content).toMatchSnapshot();
        });

        it('provides props to Modal', () => {
          const modalProps:Partial<IModal> = {
            disableClose: true,
          };

          act(() => {
            activeContext.showModal(
              (<p>testing showModal</p>),
              modalProps,
            );
          });

          expect(activeContext.isActive).toEqual(true);
          expect(activeContext.content).toMatchSnapshot();
        });

        it('throws Error if provided content is invalid', () => {
          function drinkOctopus() {
            act(() => activeContext.showModal(null));
          }
          expect(drinkOctopus).toThrowErrorMatchingSnapshot();
        });
      });

      describe('Provider:values:closeModal', () => {
        it('retains content and sets isActive false', () => {
          act(() => {
            activeContext.setContent(dummyChild);
            activeContext.setActive(true);
          });
          expect(activeContext.content).toEqual(dummyChild);
          expect(activeContext.isActive).toEqual(true);
          act(() => {
            activeContext.closeModal();
          });
          expect(activeContext.content).toEqual(dummyChild);
          expect(activeContext.isActive).toEqual(false);
        });
      });
    });
  });

  describe('ModalRoot', () => {
    it('renders ReactPortal with fallback div as content', () => {
      const wrapper = mount(
        <ModalContext.Provider value={initialContext}>
          <ModalRoot />
        </ModalContext.Provider>
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('renders non-null content', () => {
      const updatedContext = {
        ...initialContext,
        ...{
          content: (<p>new content</p>),
        },
      };
      const wrapper = mount(
        <ModalContext.Provider value={updatedContext}>
          <ModalRoot />
        </ModalContext.Provider>
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('sets CSSTransition `in` prop with isActive value', () => {
      const updatedContext = {
        ...initialContext,
        ...{
          content: (<p>new content</p>),
          isActive: true,
        },
      };
      const wrapper = mount(
        <ModalContext.Provider value={updatedContext}>
          <ModalRoot />
        </ModalContext.Provider>
      );
      expect(wrapper.find('CSSTransition').props().in).toEqual(true);
    });
  });

  describe('Modal', () => {
    it('renders children with CloseButton', () => {
      const wrapper = mount(
        <ModalContext.Provider value={initialContext}>
          <Modal>
            <p>content</p>
          </Modal>
        </ModalContext.Provider>
      );

      expect(wrapper).toMatchSnapshot();
      const closeButton = wrapper.find('CloseButton').first();
      closeButton.simulate('click', {
        target: closeButton.getDOMNode(),
      });
      expect(initialContext.closeModal).toHaveBeenCalledTimes(1);
    });

    it('calls closeModal on outside click of content', () => {
      const wrapper = mount(
        <ModalContext.Provider value={initialContext}>
          <Modal>
            <p>content</p>
          </Modal>
        </ModalContext.Provider>
      );

      const container = wrapper.find('.container').first();
      const content = wrapper.find('.inner').first();
      expect(initialContext.closeModal).toHaveBeenCalledTimes(0);
      container.simulate('click', {
        target: content.getDOMNode(),
      });
      expect(initialContext.closeModal).toHaveBeenCalledTimes(0);
      container.simulate('click', {
        target: container.getDOMNode(),
      });
      expect(initialContext.closeModal).toHaveBeenCalledTimes(1);
    });

    it('renders with close button/outside click disabled', () => {
      const wrapper = mount(
        <ModalContext.Provider value={initialContext}>
          <Modal disableClose>
            <p>content</p>
          </Modal>
        </ModalContext.Provider>
      );

      expect(wrapper.find('CloseButton')).toHaveLength(0);
      const container = wrapper.find('.container').first();
      container.simulate('click', {
        target: container.getDOMNode(),
      });
      expect(initialContext.closeModal).toHaveBeenCalledTimes(0);
    });
  });
});
