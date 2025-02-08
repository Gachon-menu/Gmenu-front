import { create } from "zustand";
import { persist } from "zustand/middleware";
interface UseTabLink {
  tabLink: string;
  setTabLink: (tabLink: string) => void;
}

export const useTabLinkStore = create(
  persist<UseTabLink>(
    (set) => ({
      tabLink: "/today",
      setTabLink: (tabLink) => set({ tabLink }),
    }),
    {
      name: "tab-storage", // 로컬 스토리지에 저장될 key 값
    }
  )
);
