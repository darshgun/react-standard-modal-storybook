import React, { Fragment, useState } from "react";
import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { Button } from "@storybook/react/demo";
import Modal from "react-standard-modal";

export default {
  title: "Modal",
  component: Modal
};

const props = {
  all: () => ({
    closeOnOverlayClick: boolean("closeOnOverlayClick", false),
    disableOverlayClick: boolean("disableOverlayClick", false),
    disableOverlay: boolean("disableOverlay", false),
    disablePortal: boolean("disablePortal", false),
    unMountIfClosed: boolean("unMountIfClosed", false),
    overlayClick: action("Clicked on overlay")
  })
};

export const Usage = () => {
  const allProps = props.all;
  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => {
    setIsOpen(true);
    console.log("props", allProps);
    action("Modal is open");
  };

  const handleClose = () => {
    setIsOpen(false);
    action("Modal is closed");
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
        {...allProps}
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
        // closeOnOverlayClick={boolean("closeOnOverlayClick", false)}
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
