import { create } from "zustand";


// const INITIAL_STATE = []

export const useStore = create((set, get)=>({
    count: 0,
    increaseCount: () => set(state => ({count: state.count + 1})),
    decreaseCount: () => set(state => ({count: state.count - 1})),
    resetCount: ()=> set({count: 0}),

    action: (type, payload)=>{
        switch(type){
            case 'add' :
                set({count: get().count + payload})
                break
            case 'less' :
                set({count: get().count + payload})
                break
            default : 
                console.log("you have not added an action");
            
        }
    }
}))