import React, { Fragment, useState } from "react";
import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { Button } from "@storybook/react/demo";
import Modal from "react-standard-modal";

export default {
  title: "Modal",
  component: Modal
};

export const Usage = () => {
  const [isOpen, setIsOpen] = useState(true);
  const props = {
    closeOnOverlayClick: boolean("closeOnOverlayClick", false),
    disableOverlayClick: boolean("disableOverlayClick", false),
    disableOverlay: boolean("disableOverlay", false),
    disablePortal: boolean("disablePortal", false),
    unMountIfClosed: boolean("unMountIfClosed", false),
    overlayClick: action("Clicked on overlay")
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Fragment>
      <Button
        onClick={() => {
          handleOpen();
        }}
      >
        Open modal
      </Button>
      <Modal
        {...props}
        /**
         * Custom class names
         */
        className={{
          Modal: "modal-class",
          Overlay: "overlay-class"
        }}
        onClose={handleClose}
        onOpen={handleOpen}
        open={isOpen}
        closeOnOverlayClick={() => handleClose()}
        /**
         * Custom styles
         */
        style={{
          Modal: {
            borderRadius: 4,
            padding: 20,
            minHeight: 150,
            minWidth: 300
          },
          Overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.6)"
          }
        }}
      >
        Modal demo
      </Modal>
    </Fragment>
  );
};
