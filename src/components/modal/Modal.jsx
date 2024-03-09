import React from 'react';

const Modal = ({ isOpen, children, closeModal }) => {
  const handleCloseModal = () => {
    closeModal();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      {isOpen && (
        <div className='fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-35 flex justify-center items-center' onClick={handleOverlayClick}>
          <div className='relative bg-white p-5 rounded-lg w-4/5 h-screen overflow-auto'>
            <button className='absolute top-2.5 mb-10 right-10 bg-transparent border-none text-xl cursor-pointer' onClick={handleCloseModal}>
              X
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
