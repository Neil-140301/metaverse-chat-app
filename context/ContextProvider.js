import { useCallback, useState } from 'react';
import { ModalContext } from './ModalContext';

const ContextProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = useCallback(() => {
    setModalOpen((m) => !m);
  }, []);

  return (
    <ModalContext.Provider value={{ modalOpen, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ContextProvider;
