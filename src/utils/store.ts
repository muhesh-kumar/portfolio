import create from 'zustand';

type BottombarStore = {
  activePathName: string;
  setActivePathName: (pathName: string) => void;
};

export const useBottombarStore = create<BottombarStore>((set) => ({
  activePathName: '/',

  setActivePathName: (pathName: string) =>
    set(() => ({
      activePathName: pathName,
    })),
}));
