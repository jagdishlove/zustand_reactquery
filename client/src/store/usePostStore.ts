import { create } from "zustand";

type PostStore = {
  selectedPostId: number | null;
  setSelectedPostId: (id: number) => void;
};

export const usePostStore = create<PostStore>((set) => ({
  selectedPostId: null,
  setSelectedPostId: (id) => set({ selectedPostId: id }),
}));
