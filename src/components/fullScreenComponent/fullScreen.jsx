import React, { useRef, useState } from 'react';

const FullscreenComponent = ({ items }) => {
  const [currentItem, setCurrentItem] = useState(null);
  const mediaRef = useRef(null);

  const openFullScreen = item => {
    setCurrentItem(item);
    setTimeout(() => {
      const element = mediaRef.current;
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        // Firefox
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        // Chrome, Safari, Opera
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        // IE/Edge
        element.msRequestFullscreen();
      }
    }, 100); // Delay to ensure the media element is rendered
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} onClick={() => openFullScreen(item)}>
          {item.type === 'video' ? (
            <video src={item.url} controls className="media-element" />
          ) : (
            <img src={item.url} alt={item.alt} className="media-element" />
          )}
        </div>
      ))}
      {currentItem && (
        <div style={{ display: 'none' }}>
          {currentItem.type === 'video' ? (
            <video ref={mediaRef} src={currentItem.url} controls className="media-element" />
          ) : (
            <img
              ref={mediaRef}
              src={currentItem.url}
              alt={currentItem.alt}
              className="media-element"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default FullscreenComponent;
