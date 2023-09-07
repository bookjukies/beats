import { create } from "zustand";

export const useMedia = create((set) => ({
  playList: [],
  currentIndex: 0,
  setPlayList: (params) => set({ playList: [...params] }),
  isPlaying: false,
  playing: null,
  isPaused: null,
  play: (params) =>
    set((state) => {

      const current = state.playList.find(
        (entry) => entry.name === params.name && entry.title === params.title
      );

      const index = state.playList.indexOf(current);

      return { isPlaying: true, playing: current, currentIndex: index, isPaused: false };
    }),
  pause: (params) =>
    set(() => {
      params.pause();
      return { isPlaying: false, isPaused: true };
    }),
  resume: (params) =>
    set(() => {
      params.play();
      return { isPlaying: true , isPaused: false};
    }),
  nextTrack: () =>
    set((state) => {
      set({ currentIndex: (state.currentIndex + 1) % state.playList.length });
      state.play(
        state.playList[(state.currentIndex + 1) % state.playList.length]
      );
      return [];
    }),
  previousTrack: () =>
    set((state) => {
      set({
        currentIndex:
          (state.currentIndex - 1 + state.playList.length) %
          state.playList.length,
      });
      state.play(
        state.playList[
          (state.currentIndex - 1 + state.playList.length) %
            state.playList.length
        ]
      );
      return [];
    }),
}));

//isPlaying
//playing contains a strin g with the audio source and if null the media player closes
//pause sets isPlaying to false
//stop annuls the playing which closes the media player
