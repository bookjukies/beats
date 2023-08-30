import { create } from "zustand";

export const useMedia = create((set) => ({
  isPlaying: false,
  playing: null,
  play: (params) => set({ isPlaying: true, playing: params }),
  pause: () => set({ isPlaying: false }), // New action for pausing
  stop: () => set({ isPlaying: false, playing: null }),
}));


