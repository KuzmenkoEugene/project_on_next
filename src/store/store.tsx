import { create } from 'zustand'

interface Card {
    time: string,
    firstValue: string,
    secondValue: string
}

interface CardStateinterface {
    cards: Card[]
    isLoading: false,
    errors: [],
    addCard: (time: string, firstValue: string, secondValue: string) => void,
    deleteCards: () => void,
}

export const useStore = create<CardStateinterface>((set) => ({
    cards: [],
    isLoading: false,
    errors: [],
    addCard: (time: string, firstValue: string, secondValue: string) => set(state => {
        let updatedCards = [...state.cards];
        if (updatedCards.length >= 8) {
            updatedCards.pop(); 
        }
        updatedCards.unshift({ time, firstValue, secondValue });
        return { cards: updatedCards };
    }),
    deleteCards: () => set({cards: []})
}))