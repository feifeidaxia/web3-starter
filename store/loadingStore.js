// loadingStore.js
import { create } from "zustand"

const useLoadingStore = create((set) => ({
  pageLoading: false,
  setPageLoading: (isLoading) => set({ pageLoading: isLoading }),
}))

export default useLoadingStore
