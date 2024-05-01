import { create } from "zustand";

interface settings {
  openNav: boolean;
  toggleOpenNav: () => void;
}

const useSetting = create<settings>()((set) => ({
  openNav: true,
  toggleOpenNav: () => set((state) => ({ ...state, openNav: !state.openNav })),
}));

export { useSetting };
