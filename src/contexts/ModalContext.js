import React, { useEffect, useState } from 'react';
import NewTodo from '../components/NewTodo';
import ViewTodo from '../components/ViewTodo';

export const ModalContext = React.createContext();

export function ModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  function openModal(options) {
    switch (options.type) {
      case 'NEW_TODO':
        setModalContent(<NewTodo />);
        break;
      case 'VIEW_TODO':
        setModalContent(<ViewTodo todo={options.todo} />);
        break;
      default:
        setModalContent(null);
    }
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <ModalContext.Provider value={{ isModalOpen, modalContent, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}
