import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface BookingPopoutProps {
  show: boolean;
  handleClose: () => void;
  handleSave: () => void;
  text: string;
}

function BookingPopout({ show, handleClose, handleSave, text }: BookingPopoutProps) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Booking Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>{text}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave}>
            Confirm Booking
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default BookingPopout;
