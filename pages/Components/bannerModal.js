import React, { useEffect } from 'react';
import { useDisclosure, ChakraProvider } from '@chakra-ui/react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    // Open the modal when the component mounts
    onOpen();
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="960px" mx="auto"
         bgGradient="linear(to-t, green.200, pink.500)"
      >
        <ModalCloseButton />
        <ModalBody maxW="960px" mx="auto">
          <a href='https://docs.google.com/forms/d/e/1FAIpQLSfB5HQiG52ezvg6C0Cu1jVSJUqLxRwncf_egSXscaghLwQZUg/viewform' target="_blank" rel="noopener noreferrer">
            <img
              src="/Frame.jpg" // Corrected image source
              alt="Image Link"
              style={{ 
                width: '100%',  // By default, image width is 100%
                height: 'auto', // Auto height to maintain aspect ratio
              }}
              className="responsive-image" // Add a class name for CSS
            />
          </a>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

function BannerModal() {
  return (
    <ChakraProvider>
      <BasicUsage />
    </ChakraProvider>
  );
}

export default BannerModal;
