import React, { useRef, useEffect } from "react";
import { useMedia } from "../stores/mediaStore";
import { BackIcon, PlayIcon, NextIcon, PauseIcon } from "./Icons";
import useGlobal from "../hooks/useGlobal";
function MediaPlayer({ audioSource }) {
  const {setAudioSourceRef} = useGlobal()

  const { isPlaying, playing, previousTrack,play ,resume, pause, playList, nextTrack } =
    useMedia();
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    setAudioSourceRef(audio)

    if (isPlaying) {
      audio.play();

      // Add an event listener for the "ended" event
      audio.addEventListener("ended", handleEnded);

      return () => {
        // Remove the event listener when the component unmounts
        audio.removeEventListener("ended", handleEnded);
      };
    } else {
      audio.pause();
    }
  }, [isPlaying, playing]);

  function handleEnded() {
    const audio = audioRef.current;

    if(playList.length <= 1){
     pause(audio)
    }else{
      nextTrack();
    }
    
  }

  const handlePlayPause = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      pause(audio);
    } else {
      resume(audio);
    }
  };

  const handleNext = () => {
    nextTrack();
  };

  const handlePrevious = () => {
    previousTrack();
  };

  return (
    <section className="grid grid-cols-10 fixed bottom-0 z-50 px-6 bg-black w-screen text-white">
      <div className="col-span-6">
        <div className="">{playing.name}</div>
        <div className="">{playing.title}</div>
      </div>

      <div className="flex justify-between col-span-4 py-3">
        <div className="">
          <button onClick={handlePrevious}>
            <BackIcon />
          </button>
        </div>

        <div className="">
          <button onClick={handlePlayPause}>
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>
        </div>

        <div className="">
          <button onClick={handleNext}>
            <NextIcon />
          </button>
        </div>
      </div>
      <audio className="hidden" ref={audioRef} src={audioSource.url} />
    </section>
  );
}

export default MediaPlayer;
