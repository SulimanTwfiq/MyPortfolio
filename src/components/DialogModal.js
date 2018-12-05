import React from "react";
import Modal from "react-responsive-modal";

export default class DialogModal extends React.Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <Modal open={open} onClose={this.onCloseModal} center>
        <h2>Simple centered modal</h2>
      </Modal>
    );
  }
}
