import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

interface Props {
  toggle: () => void;
  modal: boolean;
}
const ControlsModal = ({ toggle, modal }: Props) => {
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Your exam is paused</ModalHeader>
      <ModalBody>
        You can leave this page and resume this test at any time. Your progress
        will be saved.
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          Resume exam
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ControlsModal;
