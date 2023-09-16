import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function AlertDismissibleExample() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <div style={{ maxWidth: '1000px', height: '225px', position: 'relative' }}>
          <a href='https://docs.google.com/forms/d/e/1FAIpQLSfB5HQiG52ezvg6C0Cu1jVSJUqLxRwncf_egSXscaghLwQZUg/viewform'>
          <img
            src="/Frame.jpg" // Replace with the actual image source
            alt="Image"
            style={{
              maxWidth: '1000px', height: '225px', position: 'relative',

             // maxWidth: '100%',
             // height: '100%',
              objectFit: 'cover', // Maintain aspect ratio and cover the div
              borderRadius: '8px', // Add a rounded corner effect
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Add a subtle shadow

            }}
          />
          </a>
        </div>
      </Alert>
    );
  }
 
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

export default AlertDismissibleExample;
