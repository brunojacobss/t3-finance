import { create } from "zustand";

type SelectedTab =
  | "dashboard"
  | "accounts"
  | "transactions"
  | "analytics"
  | "settings";

type Store = {
  selectedTab: SelectedTab;
  changeTab: (newTab: SelectedTab) => void;
};

export const useTabStore = create<Store>()((set) => ({
  selectedTab: "dashboard",
  changeTab: (newTab: SelectedTab) => set(() => ({ selectedTab: newTab })),
}));
