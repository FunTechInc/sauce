import { create } from "zustand";

export interface IAppStore {
   isModalOpen: boolean;
   setIsModalOpen: (value: boolean) => void;
   isMenuOpen: boolean;
   setIsMenuOpen: (value: boolean) => void;
   fontsLoaded: boolean;
   setFontsLoaded: (fontsLoaded: boolean) => void;
}

export const useAppStore = create<IAppStore>((set) => ({
   isModalOpen: false,
   setIsModalOpen: (value: boolean) => set({ isModalOpen: value }),
   isMenuOpen: false,
   setIsMenuOpen: (value: boolean) => set({ isMenuOpen: value }),
   fontsLoaded: false,
   setFontsLoaded: (fontsLoaded: boolean) =>
      set((s) => ({ ...s, fontsLoaded })),
}));
