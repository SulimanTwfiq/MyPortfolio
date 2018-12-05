import React from "react";
import Modal from "react-responsive-modal";

export default class ModalComp extends React.Component {
  render() {
    const { isModalOpen, onModalChange, children } = this.props;
    return (
      <Modal open={isModalOpen} onClose={onModalChange} center>
        {children}
      </Modal>
    );
  }
}
