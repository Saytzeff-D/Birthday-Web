import React, { useRef, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

const BirthdayVideo = () => {
  const videoRef = useRef(null);

  const [open, setOpen] = useState(false);

  // When video ends
  const handleVideoEnd = () => {
    setOpen(true);
  };

  const messageMe = () => {
    setOpen(false);
    window.open('https://wa.me/message/5Z6Q2K7X5Z3MO1', '_blank');

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <div
      className="container-fluid happy-birthday d-flex align-items-center justify-content-center" data-aos="fade">
      <div className="container p-lg-5 p-3">
        <div className="d-flex justify-content-center">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            controls
            onEnded={handleVideoEnd}
            className="tolu-video rounded-4 shadow-lg"
            style={{
              width: "100%",
              maxWidth: "850px",
              height: "auto",
              objectFit: "cover",
            }}
          >
            <source src={'https://res.cloudinary.com/ololadedavid15/video/upload/v1779379129/samples/birthday-sobayo/Birthday_ehbsy8.mp4'} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* DIALOG */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          style: {
            borderRadius: "24px",
            padding: "10px",
            textAlign: "center",
          },
        }}
      >
        <DialogTitle
          sx={{
            fontWeight: 700,
            fontSize: "2rem",
          }}
        >
          Happy Birthday 🎉
        </DialogTitle>

        <DialogContent>
          <p className="mb-4">
            Wishing you joy, peace, long life and happiness ❤️
          </p>

          <div className="d-flex justify-content-center gap-3">
            <Button
              variant="contained"
              color="success"
              onClick={messageMe}
            >
              Click
            </Button>            
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BirthdayVideo;