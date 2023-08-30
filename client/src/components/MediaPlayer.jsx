import React, { useRef, useEffect } from "react";
import { useMedia } from "../stores/mediaStore";
import { BackIcon, PlayIcon, NextIcon, PauseIcon } from "./Icons";

function MediaPlayer({audioSource}) {
  const { isPlaying, playing, play, pause, stop } = useMedia();
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const handlePlayPause = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      pause();
    } else {
      4 // Replace with the actual path to your audio file
    }
  };

  const handleStop = () => {
    stop();
  };



  return (
    <section className="grid grid-cols-10 fixed bottom-0 z-50 px-6 bg-black w-screen text-white">
      <div className="col-span-6">
        <div className="">name</div>
        <div className="">artist</div>
      </div>

      <div className="flex justify-between col-span-4 py-3">
        <div className="">
          <button>
            <BackIcon />
          </button>
        </div>

        <div className="">
          <button onClick={handlePlayPause}>
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>
        </div>

        <div className="">
          <button onClick={handleStop} disabled={!isPlaying}>
            <NextIcon />
          </button>
        </div>
      </div>
      <audio className="hidden" ref={audioRef} src={audioSource} />
    </section>
  );
}

export default MediaPlayer;


