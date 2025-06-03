import { create } from "zustand";
import { Profile } from "@/types/profile";

interface ProfileState {
  profile: Profile | null;
  setProfile: (profile: Profile) => void;
  updateBasicInfo: (name: string, summary: string) => void;
}

export const useProfileStore = create<ProfileState>((set) => ({
  profile: null,
  setProfile: (profile) => set({ profile }),
  updateBasicInfo: (name, summary) =>
    set((state) => {
      if (!state.profile) return state;
      return {
        profile: {
          ...state.profile,
          name,
          summary,
        },
      };
    }),
}));
