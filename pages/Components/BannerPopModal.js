import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function BannerPopModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
      <a href='https://docs.google.com/forms/d/e/1FAIpQLSfB5HQiG52ezvg6C0Cu1jVSJUqLxRwncf_egSXscaghLwQZUg/viewform' target="_blank" rel="noopener noreferrer">
            <img
              src="/public/Frame.jpg" // Corrected image source
              alt="Image Link"
              style={{ 
                width: '100%',  // By default, image width is 100%
                height: 'auto', // Auto height to maintain aspect ratio
              }}
              className="responsive-image" // Add a class name for CSS
            />
          </a>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default BannerPopModal;