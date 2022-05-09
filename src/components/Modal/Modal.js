import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ children, close }) => {
  const modal = {
    hide: {
      opacity: 0,
      y: 200,
    },
    show: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: 200,
    },
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={close}
        className="fixed inset-0 z-10 bg-black opacity-80"
      />
      <motion.div
        initial="hide"
        animate="show"
        exit="exit"
        variants={modal}
        transition={{ duration: 0.3 }}
        className="fixed rounded left-0 top-10 right-0 bottom-auto m-auto max-w-screen-sm z-20 bg-transparent">
        {children}
      </motion.div>
    </>
  );
};

export default Modal;
