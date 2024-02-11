import { useEffect, useRef, useState } from "react";

const Effect = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <button onClick={() => {
        setIsPlaying(!isPlaying);
      }}>
        { isPlaying ? 'Pause' : 'Play'}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
      src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4">
      </VideoPlayer>
    </>
  );
}


const VideoPlayer = ({ src, isPlaying }) => {
  const ref = useRef(null);

  useEffect(() => {
    isPlaying ? ref.current.play() : ref.current.pause();
  });

  return <video ref={ref} src={src} loop playsInline></video>
}


export default Effect;
