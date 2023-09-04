import { create } from 'zustand';

const useCartStore = create((set) => ({
  items: [],

  addItem: (product) => {
    // set((state) => ({ items: [...state.items, product] }));
    set((state) => {
      if(state.items.length > 0){
        const unique = state.items.filter(item => item.name !== product.name)
        return { items: [...unique, product] }
      }
      
      return { items: [...state.items, product] }
    });
    
  },

  removeItem: (productId) => {
    set((state) => ({ items: state.items.filter(item => item.id !== productId) }));
  },

  clearCart: () => {
    set({ items: [] });
  },
}));

export default useCartStore;