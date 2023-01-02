import Modal from "react-bootstrap/Modal";

function ModalComponet({ open, setModal, message, title, callback }) {
  const handleClose = () => {
    setModal({ open: false });
    if (callback) {
      callback();
    }
  };

  return (
    <>
      <Modal show={open} onHide={handleClose} style={{ marginTop: "250px" }}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
      </Modal>
    </>
  );
}

export default ModalComponet;
