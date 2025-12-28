// Zustand store for application state

import { create } from 'zustand';

interface AppState {
  selectedBrandId: string | null;
  selectedModuleId: string | null;
  setSelectedBrand: (brandId: string) => void;
  setSelectedModule: (moduleId: string | null) => void;
}

export const useAppStore = create<AppState>((set) => ({
  selectedBrandId: null,
  selectedModuleId: null,
  setSelectedBrand: (brandId) => set({ selectedBrandId: brandId }),
  setSelectedModule: (moduleId) => set({ selectedModuleId: moduleId }),
}));

