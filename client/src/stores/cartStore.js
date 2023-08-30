import create from 'zustand';

const useCartStore = create((set) => ({
  items: [],

  addItem: (product) => {
    set((state) => ({ items: [...state.items, product] }));
  },

  removeItem: (productId) => {
    set((state) => ({ items: state.items.filter(item => item.id !== productId) }));
  },

  clearCart: () => {
    set({ items: [] });
  },
}));

export default useCartStore;