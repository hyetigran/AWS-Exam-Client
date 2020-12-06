import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

interface Props {
  toggle: (arg0: boolean) => void;
  modal: boolean;
  isStopped: boolean;
}
const ControlsModal = ({ toggle, modal, isStopped }: Props) => {
  return (
    <Modal isOpen={modal} toggle={() => toggle(false)}>
      <ModalHeader toggle={() => toggle(false)}>
        {isStopped
          ? "Are you sure you want to finish the test ?"
          : "Your exam is paused"}
      </ModalHeader>
      <ModalBody>
        {isStopped
          ? "If you don't want to submit this attempt now, you can always pause the test and return to it later. Remember that you can take this test as many times as you want."
          : "You can leave this page and resume this test at any time. Your progress will be saved."}
      </ModalBody>
      <ModalFooter>
        <Button
          color={isStopped ? "secondary" : "primary"}
          onClick={() => toggle(false)}
        >
          {isStopped ? "Cancel" : "Resume exam"}
        </Button>
        {isStopped && (
          <Button color="primary" onClick={() => toggle(false)}>
            Finish Exam
          </Button>
        )}
      </ModalFooter>
    </Modal>
  );
};

export default ControlsModal;
