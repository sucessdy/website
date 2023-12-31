import React from 'react'
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const Video = () => {
  React.useEffect(() => {
      console.clear();
    }, [])
    const [isOpen, setOpen] = React.useState(false);
    return (
      <section
        className="video bg-img parallaxie"
        style={{ backgroundImage: "url(/demos/Homem.jpg)" }}
      >
        {typeof window !== "undefined" && (
          <ModalVideo
            channel="vimeo"
            autoplay
            isOpen={isOpen}
            videoId="127203262"
            onClose={() => setOpen(false)}
          />
        )}
        <a
          className="vid valign"
          onClick={(e) => {
            e.preventDefault();
            setOpen(true);
          }}
          href="https://youtu.be/4yxr322owNc"
        >
          <div className="vid-butn">
            <span className="icon">
              <i className="pe-7s-play"></i>
            </span>
          </div>
        </a>
      </section>
    );
}

export default Video